const e = require("express");
const fs = require("fs");
const cors = require('cors');
const m = require("mongoose");
const app = e();
app.use(cors());
app.use(e.json());
m.connect("mongodb://localhost:27017/quiz", { useNewUrlParser: true, useUnifiedTopology: true });

const qnaSchema = new m.Schema({
  question: String,
  ans1: String,
  ans2: String,
  ans3: String,
  ans4: String,
  crctans: String
});
const qanModel = new m.model('qna', qnaSchema);

app.post("/add", (req, res) => {
  const ans = req.body.checked;
  qanModel.find({__v:req.body.qno})
    .then((data) => {
      res.json({ data });
      console.log({ data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.listen(8000, '127.0.0.1');
