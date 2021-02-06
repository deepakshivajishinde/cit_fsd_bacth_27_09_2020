let express = require("express");
let router = express.Router();

router.get("/", function (req, res) {
  res.status(200).send({ call: "product/" });
});

router.get("/add-new-product", function (req, res) {
  res.status(200).send({ call: "product --- adding new product" });
});
module.exports = router;
