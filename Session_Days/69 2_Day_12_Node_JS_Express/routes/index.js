var express = require("express");
var router = express.Router();
// var user = require("../userDetails");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/home", function (request, response) {
  response.render("user/mainIndex", {
    userInfo: {
      name: "Umesh",
      dob: "24-06-2000",
      mobile: 8007070845,
      age: 20,
      gender: "Male",
      subject: [
        {
          name: "Math",
          marks: 40,
          maxMarks: 100,
        },
        {
          name: "Biology",
          marks: 36,
          maxMarks: 100,
        },
        {
          name: "Physics",
          marks: 55,
          maxMarks: 100,
        },
        {
          name: "Chemistry",
          marks: 99,
          maxMarks: 100,
        },
      ],
    },
  });
});

module.exports = router;
