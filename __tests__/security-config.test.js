import { describe, it } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

describe("Security & Compliance Configuration Tests", () => {
  const cwd = process.cwd();

  it("should have valid RFC 9116 security.txt with unexpired deadline", () => {
    const securityTxtPath = path.join(cwd, "public", ".well-known", "security.txt");
    assert.ok(fs.existsSync(securityTxtPath), "security.txt must exist");

    const content = fs.readFileSync(securityTxtPath, "utf8");
    assert.ok(content.includes("Contact:"), "Must include Contact directive");
    assert.ok(content.includes("Expires:"), "Must include Expires directive");
    assert.ok(content.includes("Canonical:"), "Must include Canonical directive");

    // Verify expiration date is in the future
    const match = content.match(/Expires:\s*([^\r\n]+)/);
    assert.ok(match, "Expires header format valid");
    const expiresDate = new Date(match[1].trim());
    assert.ok(expiresDate.getTime() > Date.now(), "Security.txt expiration date must be in the future");
  });

  it("should enforce complete OWASP recommended security headers in vercel.json", () => {
    const vercelConfigPath = path.join(cwd, "vercel.json");
    assert.ok(fs.existsSync(vercelConfigPath), "vercel.json must exist");

    const vercelJson = JSON.parse(fs.readFileSync(vercelConfigPath, "utf8"));
    const rootHeaders = vercelJson.headers.find((h) => h.source === "/(.*)")?.headers || [];
    const headerMap = Object.fromEntries(rootHeaders.map((h) => [h.key, h.value]));

    assert.strictEqual(headerMap["X-Content-Type-Options"], "nosniff");
    assert.strictEqual(headerMap["X-Frame-Options"], "DENY");
    assert.strictEqual(headerMap["Referrer-Policy"], "strict-origin-when-cross-origin");
    assert.ok(headerMap["Strict-Transport-Security"].includes("max-age=63072000"));
    assert.ok(headerMap["Content-Security-Policy"].includes("default-src 'self'"));
    assert.ok(headerMap["Content-Security-Policy"].includes("frame-ancestors 'none'"));
  });

  it("should maintain valid robots.txt and sitemap.xml for search integrity", () => {
    const robotsPath = path.join(cwd, "public", "robots.txt");
    const sitemapPath = path.join(cwd, "public", "sitemap.xml");

    assert.ok(fs.existsSync(robotsPath), "robots.txt must exist");
    assert.ok(fs.existsSync(sitemapPath), "sitemap.xml must exist");

    const robotsContent = fs.readFileSync(robotsPath, "utf8");
    assert.ok(robotsContent.includes("Sitemap: https://arfan.biz.id/sitemap.xml"));

    const sitemapContent = fs.readFileSync(sitemapPath, "utf8");
    assert.ok(sitemapContent.includes("<loc>https://arfan.biz.id/</loc>"));
  });
});
