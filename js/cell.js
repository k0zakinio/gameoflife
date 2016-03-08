'use strict';

function Cell(args) {
  this.alive = false;
  this.x = args.x;
  this.y = args.y;
  this.neighbours = args.neighbours;
  this.neighboursAlive = 0;
}

Cell.prototype.checkNeighbours = function() {
  var result = 0;
  for(var i=0; i<this.neighbours.length; i++) {
    if (this.neighbours[i].alive) {
      result++;
    }
  }
  this.neighboursAlive = result;
};

Cell.prototype.kill = function() {
  this.alive = false;
};

Cell.prototype.birth = function() {
  this.alive = true;
};

Cell.prototype.updateCell = function() {
  var alive = this.neighboursAlive;
  if(alive < 2) {
    this.kill();
  } else if (alive === 3) {
    this.birth();
  } else {
    this.kill();
  }
};

module.exports = Cell;