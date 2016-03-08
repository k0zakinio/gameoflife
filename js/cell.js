function Cell(args) {
  this.alive = false;
  this.coords = [args.x, args.y];
  this.neighbours = args.neighbours;
}


[{alive: false, coords: x, y}, {}. {}]


Cell.prototype.numberOfNeighboursAlive = function() {
  var result = 0
  for(i=0; i<this.neighbours.length; i++) {
    if (this.neighbours[i].alive) {
      result++
    }
  }
  return result;
};

Cell.update
  if numberOfNeighalive > 3
    this.alive = true
}

module.exports = Cell;