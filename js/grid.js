'use strict';

function Grid(cellKlass, height, width) {
  this.height = height || 5;
  this.width = width || 5;
  this.cellGenerator = cellKlass;
}

Grid.prototype.generateRow = function() {
  var row = [];
  for(var i=0; i < this.width; i++) {
    row.push('');
  } 
  return row;
};

Grid.prototype.generateGrid = function() {
  var layout = [];
  for(var i=0; i < this.height; i++) {
    layout.push(this.generateRow()); 
  }
  return layout;
};

Grid.prototype.refreshGrid = function() {
  var emptyGrid = this.generateGrid();
  for(var i = 0; i < this.cellList.length; i++) {
    var cell = this.cellList[i];
    var y = cell.y;
    var x = cell.x;
    emptyGrid[y][x] = cell.alive;
  }
  return emptyGrid;
};

Grid.prototype.nextGeneration = function() {
  this.cellList.forEach(function(cell) {
    cell.checkNeighbours();
  });
  this.cellList.forEach(function(cell) {
    cell.updateCell();
  });
  return this.refreshGrid();
};

Grid.prototype.giveLife = function(x, y) {
  var cell = this.findCell(x, y);
  cell.birth();
};

Grid.prototype.kill = function(x, y) {
  var cell = this.findCell(x, y);
  cell.kill();
};

Grid.prototype.findCell = function(x, y) {
  var result;
  this.cellList.forEach(function(cell) {
    if ((cell.x === x) && (cell.y === y)) {
      result = cell;
    } 
  });
  return result;
};

Grid.prototype.generateCellList = function() {
  var cellList = [];
  for(var y=0; y < this.height; y++) {
    for(var x=0; x < this.width; x++) {
      cellList.push(this.generateCell(x,y));
    }
  }
  this.cellList = cellList;
  this.findAllNeighbours();
};

Grid.prototype.findAllNeighbours = function() {
  for(var i=0; i<this.cellList.length; i++) {
    this.findNeighbours(this.cellList[i]);
  }
};

Grid.prototype.generateCell = function(x,y) {
  return new this.cellGenerator({"x":x,"y":y});
};

Grid.prototype.findNeighbours = function(cell) {
  var result = [];
  var x = cell.x;
  var y = cell.y;
  var n = [x-1, y];
  var ne = [x-1, y+1];
  var e = [x, y+1];
  var se = [x+1, y+1];
  var s = [x+1, y];
  var sw = [x+1, y-1];
  var w = [x, y-1];
  var nw = [x-1, y-1];
  var neighbours = [n, ne, e, se, s, sw, w, nw];
  neighbours = this.wrap(neighbours);
  for(var i=0; i<neighbours.length; i++) {
    result.push(this.findCell(neighbours[i][0], neighbours[i][1]));
  }
  cell.neighbours = result;
};

Grid.prototype.wrap = function(neighbours) {
  for(var i=0; i<neighbours.length; i++) {
    if (neighbours[i][0] < 0) {
      neighbours[i][0] = (this.width -1);   
    }
    if (neighbours[i][0] > (this.width -1)) {
      neighbours[i][0] = 0;
    }
    if (neighbours[i][1] < 0) {
      neighbours[i][1] = (this.height -1);
    }
    if (neighbours[i][1] > (this.height -1)) {
      neighbours[i][1] = 0;
    }
  }
  return neighbours;
};

Grid.prototype.giveLifeToRandomCells = function() {
  var amount = Math.floor((this.height * this.width) / 2);
  for(var i = 0; i < amount; i++) {
    var randx = Math.floor(Math.random() * (this.width));
    var randy = Math.floor(Math.random() * (this.height));
    this.giveLife(randx, randy);
  }
}

//module.exports = Grid;
