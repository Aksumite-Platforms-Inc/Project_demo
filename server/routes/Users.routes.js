import express from "express";
const UsersRouter = express.Router();

import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  login,
  checkUser,
} from "../controllers/Users.controllers.js";
import {
  authMiddleware,
  adminMiddleware,
} from "../middlewares/Auth.middlewares.js";
UsersRouter.get("/", authMiddleware, adminMiddleware, getUsers);
UsersRouter.post("/register", createUser);
UsersRouter.post("/login", login);
UsersRouter.put("/", authMiddleware, updateUser);
UsersRouter.delete("/:userid", authMiddleware, deleteUser);
UsersRouter.get("/checkuser", authMiddleware, checkUser);
export default UsersRouter;
