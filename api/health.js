export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    service: "vk-mini-vercel-api",
    time: new Date().toISOString(),
    ip:
      req.headers["x-forwarded-for"] ||
      req.socket?.remoteAddress ||
      null,
    ua: req.headers["user-agent"] || ""
  });
}
