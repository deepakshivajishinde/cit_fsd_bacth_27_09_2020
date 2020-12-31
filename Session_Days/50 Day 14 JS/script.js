//factory function
function studentData(name) {
  return {
    name: name,
    alert: function () {
      this.printStudent();
    },
  };
}

// var obj = studentData("Sai");
// obj.alert();
//constructor function
function CreateCircle(rad) {
  radius = rad;
  pie = 3.14;
  sqrRadius = function () {
    return radius * radius;
  };
  this.getDimeter = function () {
    var sqr = sqrRadius();
    console.log(sqr);
  };
  Object.defineProperty(this, "radius", {
    get: function () {
      return radius;
    },
    set: function (rad) {
      radius = rad;
    },
  });
  Object.defineProperty(this, "pie", {
    get: function () {
      return pie;
    },
  });
}

var circle = new CreateCircle(5);
circle.radius = 50;
circle.getDimeter();
