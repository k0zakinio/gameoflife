function Cell(args) {
  this.alive = false;
  this.x = args.x;
  this.y = args.y;
  this.neighbours = args.neighbours;
}

Cell.prototype.numberOfNeighboursAlive = function() {
  var result = 0
  for(i=0; i<this.neighbours.length; i++) {
    if (this.neighbours[i].alive) {
      result++
    }
  }
  return result;
};

Cell.prototype.birth = function() {
  this.alive = true;
};

module.exports = Cell;