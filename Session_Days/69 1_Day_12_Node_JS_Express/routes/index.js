var express = require("express");
var router = express.Router();
var studentList = [
  {
    name: "Suraj",
    marks: 10,
  },
  {
    name: "Ganesh",
    marks: 70,
  },
  {
    name: "Saurabh",
    marks: 30,
  },
];
/* GET home page. */
router.get("/", function (request, response) {
  response.render("index", {
    titleName: "Confluence Infotech",
    stud_list: studentList,
  });
}); // end of /

router.get("/home", function (request, response) {
  response.render("home");
}); // end of /home
module.exports = router;
