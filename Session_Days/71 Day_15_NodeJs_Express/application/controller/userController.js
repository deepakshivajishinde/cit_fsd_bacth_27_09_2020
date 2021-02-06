let userModule = require("../model/userModel");

let userController = {
  userHomeView: function (req, res) {
    userModule
      .getUserInfo()
      .then(function (result) {
        res.render("index", {
          title: "Student Registration",
          users: result,
        });
      })
      .catch(function (error) {
        res.status(500).send({ data: error });
      });
  },
  getAddNewStudent: function (request, response) {
    var data = request.query;
    response.status(200).send({ call: data });
  },
  postAddNewStudent: function (request, response) {
    var data = request.body;
    response.status(200).send({ call: data.candidateName });
  },
};

module.exports = userController;
