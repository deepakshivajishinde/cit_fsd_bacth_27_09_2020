function Shape() {}
Shape.prototype.draw = function () {
  console.log("Shape function");
};

function CreateCircle(rad) {
  this.radius = rad;
}

CreateCircle.prototype = Object.create(Shape.prototype);
CreateCircle.prototype.constructor = CreateCircle;

var circle = new CreateCircle(20);
