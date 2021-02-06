var express = require("express");
var router = express.Router();
var userRouter = require("./userRouter");
var productRouter = require("./productRouter");
router.use("/", userRouter);
router.use("/product", productRouter);

module.exports = router;
