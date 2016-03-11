$(document).ready(function() {
  var grid = new Grid(Cell, 70, 40);
  $('#generate').click(function() {
    grid.giveLifeToRandomCells(10);
    updateView();
  });

  $('#nextgen').click(function() {
    grid.nextGeneration();
    updateView();
  })

  var updateView = function() {
    $('#grid').html('');
    var view = grid.refreshGrid(); 
    console.log(view);
    for( var i = 0; i < view.length; i++) {
      var row = view[i];
      var rowHtml = "<div class='row'>";
      for(var j = 0; j < row.length; j++) {
	var itemAlive = row[j];
	if(itemAlive) {
	  var css = "class='alive box'";
	} else {
	  var css = "class='dead box'";
	}
	rowHtml += ("<div " + css + "></div>");
      }
      $('#grid').append(rowHtml);
    }
  }

  grid.generateCellList();
  updateView(); 
});
