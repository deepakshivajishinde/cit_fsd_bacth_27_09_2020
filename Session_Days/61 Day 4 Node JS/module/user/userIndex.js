let userArea = require("./userArea/userAreaOne");
let userAreaTwo = require("./userArea/userAreaTwo");
let userAreaOne = new userArea();
let userIndex = {
  userAreaOne: userAreaOne,
  userAreaTwo: userAreaTwo,
  updateUserTwoName: function (name) {
    userAreaTwo.name = name;
    userAreaTwo.printUserName(function (result) {
      console.log(result);
    });
  },
  userName: userAreaOne.printUser(),
};

module.exports = userIndex;
