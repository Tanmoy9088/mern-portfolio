require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

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
app.use(cors({origin: "*"}));
app.use(express.json());

app.get("/", (req,res)=>{
    res.json([{title: "Demo Project", description: "This is a sample project"}])
})

app.listen(PORT, () => {
  console.log(`Server is runnning on port: ${PORT}`);
});
