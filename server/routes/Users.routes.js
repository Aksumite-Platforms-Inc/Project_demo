import express from "express";
const UsersRouter = express.Router();

import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  login,
} from "../controllers/Users.controllers.js";
UsersRouter.get("/", getUsers);
UsersRouter.post("/register", createUser);
UsersRouter.post("/login", login);
UsersRouter.put("/:userid", updateUser);
UsersRouter.delete("/:userid", deleteUser);

export default UsersRouter;
