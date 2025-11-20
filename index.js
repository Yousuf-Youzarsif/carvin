import express from "express";
import pool from "./config/db.js";
import router from "./routes/carproduct.route.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;
app.get("/health", (req, res) => {
  res.send("health is good");
});
app.use("/api", router);
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
  pool
    .connect()
    .then(() => {
      console.log("PostgresDB Connected!");
    })
    .catch((err) => {
      console.log(err);
    });
});
