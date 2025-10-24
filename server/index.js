require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const OpenAI = require("openai");
// 1. Initialize conversation history array
// Store the system message here so it's always included.
let conversationHistory = [
  {
    role: "system",
    content:
      "You are a friendly assistant. You are helping to manage tasks and projects.",
  },
];
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
app.post("/:Id", (req, res) => {
  const result = req.params.Id;
  res.send(`Hi ${result}`);
  console.log("Success");
});
app.post("/", (req, res) => {
  res.send("Ok");
  console.log("success");
});

// Initialize OpenRouter Client
const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

// Chatbot API Route (MODIFIED)
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    // 2. Add the user's new message to the history
    conversationHistory.push({ role: "user", content: message });

    const response = await client.chat.completions.create({
      model: "openai/gpt-4o-mini",
      // 3. Send the full history to the model
      messages: conversationHistory,
    });

    const botReply = response.choices[0].message.content;

    // 4. Add the bot's reply to the history for the next turn
    conversationHistory.push({ role: "assistant", content: botReply });

    res.json({ reply: botReply });
  } catch (error) {
    console.error(error);
    // On error, revert the user's message from the history to prevent confusion
    conversationHistory.pop();
    res
      .status(500)
      .json({ error: "Something went wrong with the AI service." });
  }
});
// 5. NEW: Conversation Reset Route (To support frontend reset button)
app.delete("/chat", (req, res) => {
  // Reset the history to just the initial system message
  conversationHistory = [
    {
      role: "system",
      content:
        "You are a friendly assistant. You are helping to manage tasks and projects.",
    },
  ];
  res.status(200).json({ message: "Conversation reset successfully." });
});
app.listen(PORT, () => {
  console.log(`Server is runnning on port: ${PORT}`);
});
