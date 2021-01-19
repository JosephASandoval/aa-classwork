Function.prototype.inherits = function(superClass) {
  function Surrogate() {};
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}

function MovingObject(title) {
    this.title = title;
  }

MovingObject.prototype.makeMove = function () {
  console.log(`${this.title} is moving`);
}

function Ship(title, size) {
  MovingObject.call(this, title);
  this.size = size
}

Ship.inherits(MovingObject);

let myShip = new Ship("my ship", 23);
myShip.makeMove();

function Asteroid() {}
Asteroid.inherits(MovingObject);