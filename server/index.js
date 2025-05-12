require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Contact = require("./models/contact");
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

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
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error", err });
  }
});

app.listen(PORT, () => {
  console.log(`Server is runnning on port: ${PORT}`);
});
