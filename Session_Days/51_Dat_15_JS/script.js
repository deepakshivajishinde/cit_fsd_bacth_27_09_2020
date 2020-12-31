function CreateCircle() {
  this.radius = 20;
  this.getDiameter = function () {
    console.log(this.radius * this.radius);
  };
}
CreateCircle.prototype.draw = function () {
  console.log(this.radius);
};

var circle = new CreateCircle();

circle.draw();

var circle1 = new CreateCircle();
circle1.draw();
