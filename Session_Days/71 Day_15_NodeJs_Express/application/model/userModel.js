var userData = require("../json/user");

module.exports = {
  getUserInfo: function () {
    return new Promise(function (resolve, reject) {
      var query = userData.userInfo();
      resolve(query);
    });
  },
};
