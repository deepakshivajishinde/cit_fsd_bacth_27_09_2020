var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Student Registration" });
});
router.get("/add-new-student", function (request, response) {
  var data = request.query;
  response.status(200).send({ call: data });
});

router.post("/add-new-student", function (request, response) {
  var data = request.body;
  response.status(200).send({ call: data.candidateName });
});

module.exports = router;
