// Select color input
// Select size input
var color, width, height;
// When size is submitted by the user, call makeGrid()
sizePicker = document.getElementById('sizePicker');
sizePicker.addEventListener('submit', function(event) { 
	event.preventDefault();
  	height = $('#inputHeight').val();
	width = $('#inputWeight').val();
	makeGrid(height, width);
});

function makeGrid(h, w) {
	for (let x = 1; x <= w; x++) {
  	 x = document.createElement('tr');
  	 x.innerHTML = '<tr> </tr>'
  for (let y=1; y <= h; y++) {
  		y = document.createElement("td");
    	y.innerHTML = '<td> </td>';
    	x.appendChild(y);
		}
    }
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