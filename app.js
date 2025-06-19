import express, { json } from "express";
const app = express();
import { sequelize } from "./models";
require("dotenv").config();

app.use(json());

import authRoutes from "./routes/auth.routes";
import doubtRoutes from "./routes/doubt.routes";

app.use("/api/auth", authRoutes);
app.use("/api/doubts", doubtRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
