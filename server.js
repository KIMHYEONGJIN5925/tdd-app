const express = require("express");
const PORT = 5000;
const app = express();
const productRoutes = require("./routes");
const mongoose = require("mongoose");
//db네임만 바꿔서 사용하면 되는것일까? 프로젝트를 새로 만드는 느낌이 아니라..?
mongoose
  .connect(
    "mongodb+srv://hyeongjin:1234@tdd-app.h0e3p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDB Connected....."))
  .catch((err) => console.log(err));

app.use("/api/products", productRoutes);

app.use(express.json());
//bodyparser 모듈 설치대신 express에 내장되어있다. 4.16 이후버전 req.body 가 undefined 뜨지 않도록
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT);
console.log(`Running on port ${PORT}`);
