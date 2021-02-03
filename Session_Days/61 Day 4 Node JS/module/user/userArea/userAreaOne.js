function UserAreaOne() {
  this.name = "userAreaOne";
}
UserAreaOne.prototype.printUser = function () {
  console.log(this.name);
};

module.exports = UserAreaOne;
