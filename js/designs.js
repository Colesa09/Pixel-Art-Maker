// Select color input
// Select size input
var color, width, height;
// When size is submitted by the user, call makeGrid()
sizePicker = document.getElementById('sizePicker');
sizePicker.addEventListener('submit', function(event) { 
	event.preventDefault();
  	height = document.getElementById('inputHeight').value;
	width = document.getElementById('inputWidth').value;
	makeGrid(height, width);
});


var rows = document.createElement('tr');
var cols = document.createElement('td');
function makeGrid (height, width) {
	for (var i =1; i <= height; i++) {
		document.querySelector('#pixelCanvas').appendChild(rows);
		for( var j = 1; j <= width; i++) {
		rows.appendChild(cols);
		}
	}
	color = document.getElementById('colorPicker').value;
	cols.addEventListener('click', function addColor() {
	if($(this).attr('style')) {
			$(this).removeAttr('style')
		} else {
			$(this).attr('style', 'background-color:' + color);
		}	
	
});
}	





/*
for (var x = 1; x <= h; x++) {
	canvas.append('<#pixelCanvas tr' + x + '></tr>');
	for (var y = 1; y <= w; y++) {
		$('#pixelCanvas' + x).append('<td></td>');
	}
}
	$('td').click(function addColor() {
		color.val();
		if($(this).attr('style')) {
			$(this).removeAttr('style')
		} else {
			$(this).attr('style', 'background-color:' + color);
		}	
	});
}*/
  // Your code goes here!