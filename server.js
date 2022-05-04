const express = require("express");
const PORT = 5000;
const app = express();
const productRoutes = require("./routes");

app.use("/api/products", productRoutes);

app.use(express.json());
//bodyparser 모듈 설치대신 express에 내장되어있다. 4.16 이후버전 req.body 가 undefined 뜨지 않도록
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT);
console.log(`Running on port ${PORT}`);
