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

  it("should redact sensitive object fields (password, token, secret)", () => {
    const rawObj = {
      username: "arfan",
      password: "SuperSecretPassword123!",
      token: "xyz987654321",
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
});
