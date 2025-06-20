const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./src/routes/auth.routes");
const doubtRoutes = require("./src/routes/doubt.routes");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/doubts", doubtRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
