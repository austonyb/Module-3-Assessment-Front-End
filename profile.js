const fvtColor = document.getElementById('color')
const fvtPlace = document.getElementById('place')
const fvtRitual = document.getElementById('ritual')
const form = document.querySelector('#contact');

const myFvtColor = () => {
    alert('My favorite color is blue.')
}

const myFvtPlace = () => {
    alert('My favorite place is Hawaii.')
}

const myFvtRitual = () => {
    alert('My favorite ritual is getting together with family and friends on holidays.')
}

function handleSubmit(evt) {
	evt.preventDefault();
	alert("Your information has been submitted. We'll be in touch soon.")
	console.log('form submit');
}

fvtColor.addEventListener('click', myFvtColor)
fvtPlace.addEventListener('click', myFvtPlace)
fvtRitual.addEventListener('click', myFvtRitual)
form.addEventListener('submit', handleSubmit);





