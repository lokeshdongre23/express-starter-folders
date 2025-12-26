import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to TypeScript Express Starter!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
