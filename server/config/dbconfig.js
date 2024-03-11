import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// mongo db connection string

const connectionString = process.env.MONGO_URI;
async function main() {
  const db = await mongoose.connect(connectionString);
  console.log("Connected to database");
}

export default main;
