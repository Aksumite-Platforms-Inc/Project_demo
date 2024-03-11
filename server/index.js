import express from "express";
import main from "./config/dbconfig.js";
import cors from "cors";
import UsersRouter from "./routes/Users.routes.js";
import ProductsRouter from "./routes/Products.routes.js";
import CartsRouter from "./routes/Carts.routes.js";

const app = express();
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionSuccessStatus: 200,
};
const PORT = process.env.PORT || 5000;
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/users", UsersRouter);
app.use("/api/Products", ProductsRouter);
app.use("/api/Carts", CartsRouter);
main()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
