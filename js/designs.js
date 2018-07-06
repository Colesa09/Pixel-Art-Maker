// Select color input
// Select size input
var color, width, height;
// When size is submitted by the user, call makeGrid()
sizePicker = document.getElementById('sizePicker');
sizePicker.addEventListener('submit', function(event) { 
	event.preventDefault();
  	height = document.querySelector('#inputHeight').value;
	width = $('#inputWeight').val();
	makeGrid(height, width);
});

/*function makeGrid(h, w) {
	for (let x = 1; x <= w; x++) {
  	 
  for (let y=1; y <= h; y++) {
  		console.log ("y");
		}
    }
}*/
var rows = document.createElement('tr');
var cols = document.createElement('td');
function makeGrid () {
	rows.innerHTML('<tr> </tr>');
	cols.innerHTML('<td> </td>');
	cols.innerHTML('<td> </td>');
}	
rows.appendChild(cols);
document.querySelector('#pixelCanvas').appendChild(rows);

var rows = document.createElement('tr');
var cols = document.createElement('td');
function makeGrid (height, width) {
	document.querySelector('#pixelCanvas').appendChild(rows);
	for( var i = 1; i <= height; i++) {
	rows.appendChild(cols);
	}
}	



color = document.querySelector('#colorPicker').val(' ');
cols.addEventListener('click', function addColor() {
	color.val();
	if($(this).attr('style')) {
			$(this).removeAttr('style')
		} else {
			$(this).attr('style', 'background-color:' + color);
		}	
	
});

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