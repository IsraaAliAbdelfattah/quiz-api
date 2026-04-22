const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

// بنقرأ ملف JSON
const questions = require("./questions.json");

// لما حد يفتح /questions يرجعله البيانات
app.get("/questions", (req, res) => {
  res.json(questions);
});

// تشغيل السيرفر
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running...");
});