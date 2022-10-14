const restaurantRec = document.getElementById('restaurant-button')

const restaurants = ['Blue Fish', 'Market Street Grill and Oyster Bar', 'Porch Restaurant', 'Olive Garden', 'Saffron Valley']



function pickRestaurant (){
    event.preventDefault()
    let arr = restaurants
    let pick = arr[Math.floor(Math.random() * arr.length)]
    alert(`You should try ${pick}`)
}

restaurantRec.addEventListener('click', pickRestaurant)