import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = "uploads";
    cb(null, "public/" + uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// Create multer instance with the configured storage
const upload = multer({ storage: storage });

// Middleware function to handle file uploads
export const fileUploadMiddleware = (req, res, next) => {
  try {
    // Save the file to the uploads folder in the server
    upload.single("image")(req, res, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
      res.locals.savedFileName = req.file?.filename || "";
      next();
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export async function authMiddleware(req, res, next) {
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

export function adminMiddleware(req, res, next) {
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: "Forbidden" });
  }
  next();
}
