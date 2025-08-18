require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const OpenAI = require("openai");
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error: ", err);
  });
app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json([
    { title: "Demo Project", description: "This is a sample project" },
  ]);
});
app.get("/{id}", (req, res) => {
  const result = req.params.id;
  if ((result = "hi")) {
    res.status(200).json({ message: "ok" });
  } else {
    res.status(404).json({ message: "Error" });
  }
});
app.post("/");

// Initialize OpenRouter Client
const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

// Chatbot API Route
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await client.chat.completions.create({
      model: "openai/gpt-4o-mini", // You can try "anthropic/claude-3-haiku"
      messages: [
        { role: "system", content: "You are a friendly assistant." },
        { role: "user", content: message },
      ],
    });

    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is runnning on port: ${PORT}`);
});
