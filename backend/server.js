import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors()); 

app.get("/api/quote", async (req, res) => {
  const response = await fetch("https://zenquotes.io/api/random");
  const data = await response.json();
  res.json(data);
});

app.listen(5000, () => console.log("Server running on port 5000"));
