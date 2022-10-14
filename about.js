console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('Form Submitted successfully.')
	console.log('form submit');
}

function compliment () {
	alert("You found the easter egg! You're one smart cookie!")
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const image = document.querySelector('img')

image.addEventListener('mouseover', compliment)