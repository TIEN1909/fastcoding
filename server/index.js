const express = require("express");
const app = express();

const products = [
  {
    id: 1,
    image:
      "https://fastcoding.jp/sample/html002/img/top/img_best_seller_01.png",
    face: "FACE",
    name: "サンプル商品",
    price: 999,
  },
  {
    id: 2,
    image:
      "https://fastcoding.jp/sample/html002/img/top/img_best_seller_02.png",
    face: "FACE",
    name: "サンプル商品",
    price: 999,
  },
  {
    id: 3,
    image:
      "https://fastcoding.jp/sample/html002/img/top/img_best_seller_03.png",
    face: "FACE",
    name: "サンプル商品",
    price: 999,
  },
];
const avantages = [
  {
    id: 1,
    image:
      "https://fastcoding.jp/sample/html002/img/top/img_best_seller_01.png",
    face: "FACE",
    name: "サンプル商品",
    price: 999,
  },
  {
    id: 2,
    image:
      "https://fastcoding.jp/sample/html002/img/top/img_best_seller_02.png",
    face: "FACE",
    name: "サンプル商品",
    price: 999,
  },
  {
    id: 3,
    image:
      "https://fastcoding.jp/sample/html002/img/top/img_best_seller_03.png",
    face: "FACE",
    name: "サンプル商品",
    price: 9992,
  },
];

app.get("/v1/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/v1/avantages", (req, res) => {
  res.status(200).json(avantages);
});

app.listen("8080", () => {
  console.log("Server is running....");
});
