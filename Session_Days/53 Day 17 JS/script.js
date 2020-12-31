function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(value) {
  this.value = value;
}
Shape.prototype.draw = function () {
  return this.value;
};

function CreateCircle(rad) {
  Shape.call(this, rad);
}
extend(CreateCircle, Shape);
CreateCircle.prototype.pie = 3.14;
CreateCircle.prototype.draw = function () {
  var result = Shape.prototype.draw.call(this);
  console.log(result * this.pie);
};
var circle = new CreateCircle(30);
circle.draw();

function Rectangle(height) {
  Shape.call(this, height);
}
extend(Rectangle, Shape);
Rectangle.prototype.draw = function () {
  var result = Shape.prototype.draw.call(this);
  console.log(result);
  //3.14
};
var rectangle = new Rectangle(50);
rectangle.draw();
