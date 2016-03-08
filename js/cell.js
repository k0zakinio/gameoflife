function Cell(args) {
  this.alive = false;
  this.coords = [args.x, args.y];
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

module.exports = Cell;