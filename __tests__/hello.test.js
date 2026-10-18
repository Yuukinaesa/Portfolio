import { describe, it } from "node:test";
import assert from "node:assert/strict";
import handler from "../pages/api/hello.js";

/**
 * Creates a mock Next.js API Response object for unit testing.
 */
function createMockResponse() {
  const res = {
    statusCode: 200,
    headers: {},
    body: null,
    ended: false,
    setHeader(name, value) {
      this.headers[name] = value;
      return this;
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    },
    end() {
      this.ended = true;
      return this;
    },
  };
  return res;
}

describe("Health Check API (/api/hello) Unit Tests", () => {
  it("should return 200 status and ok JSON payload on GET request", () => {
    const req = { method: "GET" };
    const res = createMockResponse();

    handler(req, res);

    assert.strictEqual(res.statusCode, 200);
    assert.strictEqual(res.body.status, "ok");
    assert.ok(res.body.timestamp);
    assert.strictEqual(res.headers["Cache-Control"], "no-store, no-cache, must-revalidate");
    assert.strictEqual(res.headers["X-Content-Type-Options"], "nosniff");
  });

  it("should return 200 status and empty body on HEAD request", () => {
    const req = { method: "HEAD" };
    const res = createMockResponse();

    handler(req, res);

    assert.strictEqual(res.statusCode, 200);
    assert.strictEqual(res.body, null);
    assert.strictEqual(res.ended, true);
    assert.strictEqual(res.headers["Cache-Control"], "no-store, no-cache, must-revalidate");
    assert.strictEqual(res.headers["X-Content-Type-Options"], "nosniff");
  });

  it("should return 405 Method Not Allowed on non-GET/HEAD request", () => {
    const req = { method: "POST" };
    const res = createMockResponse();

    handler(req, res);

    assert.strictEqual(res.statusCode, 405);
    assert.strictEqual(res.body.error, "Method Not Allowed");
    assert.strictEqual(res.headers["Allow"], "GET, HEAD");
  });
});
