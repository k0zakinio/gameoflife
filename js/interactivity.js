$(document).ready(function() {
  var grid = new Grid(Cell, 70, 40);
  var interval; 

  $('#generate').click(function() {
    grid.giveLifeToRandomCells(10);
    updateView();
  });

  $('#nextgen').click(function() {
    interval = setInterval(function() {
      grid.nextGeneration();
      updateView();
    });
    $('#nextgen').hide(100, function() {
      $('#stop').show(100);
    });
  })

  $('#stop').click(function() {
    clearInterval(interval);
    $('#stop').hide(100);
    $('#nextgen').show(100);
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
