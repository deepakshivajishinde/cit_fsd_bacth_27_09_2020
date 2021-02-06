var userController = {
  userHomeView: function (req, res) {
    res.render("index", { title: "Student Registration" });
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
