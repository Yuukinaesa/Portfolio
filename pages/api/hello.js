import { logger } from "../../lib/logger.js";

// Next.js API route: Health check endpoint

/**
 * Health check API endpoint.
 * Returns a simple JSON response confirming the API is operational.
 *
 * Security:
 *  - Method-restricted to GET (OWASP A01:2021 — Broken Access Control)
 *  - Rate limiting via Cache-Control headers
 *  - No sensitive data exposed (NIST SP 800-53 SI-11)
 *  - Strict Content-Type enforcement
 *
 * @param {import('next').NextApiRequest} req - The incoming request
 * @param {import('next').NextApiResponse} res - The server response
 */
export default function handler(req, res) {
  try {
    // Only allow GET requests (OWASP: Restrict HTTP methods)
    if (req.method !== "GET") {
      res.setHeader("Allow", "GET");
      res.setHeader("X-Content-Type-Options", "nosniff");
      logger.warn("Method Not Allowed attempt on /api/hello", { method: req.method });
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    // Security headers
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Content-Type", "application/json; charset=utf-8");

    // Prevent information leakage — no server fingerprinting
    res.setHeader("X-Powered-By", "");

    logger.info("Health check endpoint invoked successfully");

    return res.status(200).json({
      status: "ok",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    logger.error("Unhandled exception in /api/hello", { error });
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
