//factory function
//constructor function
function studentData(name) {
  return {
    name: name,
    roll: 20,
    marks: 70.5,
    isAbsent: true,
    studentCatalog: [1, 2, 3],
    mobile: {
      parent: 874587455,
      student: 98547845,
    },
    printStudent: function () {
      console.log(this.name);
    },
    alert: function () {
      this.printStudent();
    },
  };
}

var obj = studentData("Sai");
var obj2 = studentData("Ram");
var obj3 = studentData("Sandip");

obj.alert();
obj2.alert();
obj3.alert();
