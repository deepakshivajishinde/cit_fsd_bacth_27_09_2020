var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (request, response) {
  response.render("index", {
    titleName: "Confluence Infotech JAN",
    lastName: "Kadam",
  });
}); // end of /

router.get("/home", function (request, response) {
  response.render("home");
}); // end of /home
module.exports = router;
