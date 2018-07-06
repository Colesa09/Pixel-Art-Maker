// Select color input
// Select size input
var color, width, height;
// When size is submitted by the user, call makeGrid()
sizePicker = document.getElementById('sizePicker');
sizePicker.addEventListener('submit', function(event) { 
	event.preventDefault();
  	height = document.getElementById('inputHeight').value;
	width = document.getElementById('inputWidth').value;
	color = document.getElementById('colorPicker').value;
	makeGrid(height, width);
});


var rows;
var cols;
function makeGrid (height, width) {
	for (var i = 1; i <= height; i++) {
		rows = document.createElement('tr');
		document.getElementById('pixelCanvas').appendChild(rows);
		for( var j = 1; j <= width; j++) {
		cols = document.createElement('td');
		rows.appendChild(cols);
		}
	}
	//color = document.getElementById('colorPicker').value;
	cols.addEventListener('click', function addColor() {
	if(cols.setAttribute('style','')) {
		cols.style.backgroundColor = color;
		} else {
			cols.style.removeAttribute('style');
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