function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(value) {
  this.value = value;
}
Shape.prototype.draw = function () {
  console.log(this.value);
};

function CreateCircle(rad) {
  Shape.call(this, rad);
}
extend(CreateCircle, Shape);

CreateCircle.prototype.pie = 3.14;
var circle = new CreateCircle(30);
circle.draw();

function Rectangle(height) {
  Shape.call(this, height);
}
extend(Rectangle, Shape);
var rectangle = new Rectangle(50);
rectangle.draw();
