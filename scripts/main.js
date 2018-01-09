// Define a Function
function sayOuch() {
	alert('Ouch! Stop poking me!');
}

// Use a CSS selector to identify an element
var foxImage = document.querySelector('#fox')

//Assign the function to the onclick event on that element
foxImage.onclick = sayOuch

function hide() {
	var image = document.querySelector('#fox');
	image.style.visibility = 'hidden';
}

var buttonImage = document.querySelector('#button')

buttonImage.onclick = hide