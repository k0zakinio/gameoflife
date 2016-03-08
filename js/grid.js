function Grid(height, width) {
  this.height = height,
  this.width = width
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

module.exports = Grid;