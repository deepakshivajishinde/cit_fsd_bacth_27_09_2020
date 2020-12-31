function Student() {
  this.studentList = [];
  this.singleStudent = {
    userName: "",
    dob: "",
    gender: "",
  };
}
Student.prototype.addNewStudent = function (student, callback) {
  this.studentList.push(student);
  callback();
};
Student.prototype.checkGender = function (gender, callback) {
  var _gender = "";
  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) _gender = gender[i].value;
  }
  callback(_gender);
};
Student.prototype.resetGender = function (gender) {
  for (var i = 0; i < gender.length; i++) {
    gender[i].checked = false;
  }
};
let student = new Student();
