import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import initializeDatabaseConnection from "./utils/dbConnection";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const start = async () => {
  try {
    await initializeDatabaseConnection();
    app.listen(PORT, () => {
      console.info(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

start();
