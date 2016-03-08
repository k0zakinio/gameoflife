function Grid(cellKlass, height, width) {
  this.height = height || 5,
  this.width = width || 5,
  this.cellGenerator = cellKlass
}

Grid.prototype.generateRow = function() {
  var row = [];
  for(var i=0; i < this.width; i++) {
  row.push('o');
  } 
  return row;
}

Grid.prototype.generateGrid = function() {
  var layout = [];
  for(var i=0; i < this.height; i++) {
  layout.push(this.generateRow()); 
  }
  return layout;
}

Grid.prototype.findCells = function(coordsArray) {
  var result = [];
  for(var i=0; i < coordsArray.length; i++) {
    var cell = coordsArray[i];
    
  }  
}

Grid.prototype.generateCellList = function() {
  var cellList = [];
  for(var y=0; y < this.height; y++) {
    for(var x=0; x < this.width; x++) {
      cellList.push(this.generateCell(x,y));
    }
  }
  return cellList
}

Grid.prototype.generateCell = function(x,y) {
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
  return new this.cellGenerator({"x":x,"y":y,"neighbours":neighbours})
}

Grid.prototype.wrap = function(neighbours) {
  for(i=0; i<neighbours.length; i++) {
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

module.exports = Grid;