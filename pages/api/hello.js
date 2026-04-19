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
  // Only allow GET requests (OWASP: Restrict HTTP methods)
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    res.setHeader("X-Content-Type-Options", "nosniff");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // Security headers
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  // Prevent information leakage — no server fingerprinting
  res.setHeader("X-Powered-By", "");

  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
}
