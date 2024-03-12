import jwt from "jsonwebtoken";

async function authMiddleware(req, res, next) {
  // Find and check token
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ message: "Authorization invalid" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const { username, userid, isAdmin } = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = { username, userid, isAdmin };
    next();
  } catch (error) {
    return res.status(401).json({ message: "Authorization invalid" });
  }
}

export default authMiddleware;
