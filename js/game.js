function Grid(height, width) {
    this.height = height,
    this.width = width
}

Grid.prototype.generateRow = function() {
    var row = [];
    for(var i=0; i < this.width; i++) {
	row.push('o');
    } 
    this.row = row;
}

Grid.prototype.generateGrid = function() {
    var grid = [];
    for(var i=0; i < this.height; i++) {
	grid.push(this.row);
    }
    this.grid = grid;
}

var test = new Grid(5,5);

test.generateRow();
test.generateGrid();
console.log(test.grid);
