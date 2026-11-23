import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { logger } from "../lib/logger.js";

describe("Structured Logger Unit Tests", () => {
  it("should sanitize PII email addresses from strings", () => {
    const raw = "User contact is user@example.com for verification";
    const sanitized = logger.sanitize(raw);
    assert.strictEqual(sanitized, "User contact is [REDACTED_EMAIL] for verification");
  });

  it("should sanitize bearer authorization tokens", () => {
    const raw = "Authorization: Bearer secret_token_12345";
    const sanitized = logger.sanitize(raw);
    assert.strictEqual(sanitized, "Authorization: Bearer [REDACTED]");
  });

  it("should sanitize both bearer token and email in the same string without early exit", () => {
    const mockBearer = ["mock", "bearer", "token"].join("_");
    const raw = `Authorization: Bearer ${mockBearer} allocated to user test@example.com`;
    const sanitized = logger.sanitize(raw);
    assert.strictEqual(
      sanitized,
      "Authorization: Bearer [REDACTED] allocated to user [REDACTED_EMAIL]"
    );
  });

  it("should sanitize raw JWT tokens in strings", () => {
    const p1 = ["eyJ", "header", "segment", "1234"].join("");
    const p2 = ["eyJ", "payload", "claims", "1234"].join("");
    const p3 = ["signature", "mock", "hash", "1234"].join("");
    const sampleJwt = `${p1}.${p2}.${p3}`;
    const raw = `Session token: ${sampleJwt} active`;
    const sanitized = logger.sanitize(raw);
    assert.strictEqual(sanitized, "Session token: [REDACTED_JWT] active");
  });

  it("should redact sensitive object fields (password, token, secret)", () => {
    const rawObj = {
      username: "arfan",
      password: ["dummy", "test", "pass"].join("-"),
      token: ["mock", "test", "token"].join("-"),
      profile: {
        email: "arfan@example.com",
      },
    };
    const sanitized = logger.sanitize(rawObj);
    assert.strictEqual(sanitized.password, "[REDACTED]");
    assert.strictEqual(sanitized.token, "[REDACTED]");
    assert.strictEqual(sanitized.username, "arfan");
    assert.strictEqual(sanitized.profile.email, "[REDACTED_EMAIL]");
  });

  it("should generate valid structured JSON logs for info level", () => {
    const resultJson = logger.info("Test info message", { key: "value" });
    const parsed = JSON.parse(resultJson);

    assert.strictEqual(parsed.level, "INFO");
    assert.strictEqual(parsed.message, "Test info message");
    assert.strictEqual(parsed.meta.key, "value");
    assert.ok(parsed.timestamp);
  });

  it("should correctly serialize Date instances to ISO strings", () => {
    const testDate = new Date("2026-09-23T12:00:00.000Z");
    const sanitized = logger.sanitize({ created: testDate });
    assert.strictEqual(sanitized.created, "2026-09-23T12:00:00.000Z");
  });

  it("should handle circular object references gracefully without stack overflow", () => {
    const circularObj = { name: "test-cycle" };
    circularObj.self = circularObj;
    const sanitized = logger.sanitize(circularObj);
    assert.strictEqual(sanitized.name, "test-cycle");
    assert.strictEqual(sanitized.self, "[CIRCULAR]");
  });

  it("should serialize BigInt values to string without throwing serialization TypeError", () => {
    const raw = { balance: 1000000000000000000n };
    const sanitized = logger.sanitize(raw);
    assert.strictEqual(sanitized.balance, "1000000000000000000");
  });

  it("should sanitize Error instances and their cause chains", () => {
    const rootError = new Error("Database connection refused for user admin@test.com");
    const appError = new Error("Service initialization failed", { cause: rootError });
    const sanitized = logger.sanitize(appError);

    assert.strictEqual(sanitized.name, "Error");
    assert.strictEqual(sanitized.message, "Service initialization failed");
    assert.ok(sanitized.cause);
    assert.strictEqual(
      sanitized.cause.message,
      "Database connection refused for user [REDACTED_EMAIL]"
    );
  });

  it("should serialize and sanitize Set and Map collections without data loss", () => {
    const roleSet = new Set(["admin", "user@test.com"]);
    const configMap = new Map([
      ["host", "localhost"],
      ["adminEmail", "admin@test.com"],
    ]);

    const sanitizedSet = logger.sanitize(roleSet);
    assert.deepStrictEqual(sanitizedSet, ["admin", "[REDACTED_EMAIL]"]);

    const sanitizedMap = logger.sanitize(configMap);
    assert.deepStrictEqual(sanitizedMap, {
      host: "localhost",
      adminEmail: "[REDACTED_EMAIL]",
    });
  });
});
