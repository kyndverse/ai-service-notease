import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import processPdfRoute from "./routes/process-pdf.route.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => {
  res.json({
    status: "ok",
  });
});

app.use("/api", processPdfRoute);

app.listen(8000, () => {
  console.log("AI Service running on port 8000");
});
