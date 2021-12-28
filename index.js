

const foodContainer = document.getElementById('container')

const arr = [
    {
        deal: 'Deal 1',
        type: 'Pizza',
        day: 'Monday',
        price: 300,
        image: 'https://media.istockphoto.com/photos/foods-high-in-zinc-picture-id1289940519?b=1&k=20&m=1289940519&s=170667a&w=0&h=u5BwIDikkJCxrQQopgYHW2rOi7XBmG3JOHJJvYIE2C0='
    },
    {
        deal: 'Burger',
        type: 'burger',
        day: 'Monday',
        price: 500,
        image: 'https://media.istockphoto.com/photos/cheeseburger-with-tomato-and-lettuce-on-wooden-board-picture-id1309352410?b=1&k=20&m=1309352410&s=170667a&w=0&h=YduYl7Us5MSrw1EFSCxR9zDRLnEFa_O608NdqhHlSyM='
    },
    {
        deal: 'Deal 1',
        type: 'Pizza',
        day: 'Monday',
        price: 300,
        image: 'https://media.istockphoto.com/photos/foods-high-in-zinc-picture-id1289940519?b=1&k=20&m=1289940519&s=170667a&w=0&h=u5BwIDikkJCxrQQopgYHW2rOi7XBmG3JOHJJvYIE2C0='
    },
    {
        deal: 'Burger',
        type: 'burger',
        day: 'Tuesday',
        price: 500,
        image: 'https://media.istockphoto.com/photos/cheeseburger-with-tomato-and-lettuce-on-wooden-board-picture-id1309352410?b=1&k=20&m=1309352410&s=170667a&w=0&h=YduYl7Us5MSrw1EFSCxR9zDRLnEFa_O608NdqhHlSyM='
    },
    {
        deal: 'Deal 1',
        type: 'Pizza',
        day: 'Tuesday',
        price: 300,
        image: 'https://media.istockphoto.com/photos/foods-high-in-zinc-picture-id1289940519?b=1&k=20&m=1289940519&s=170667a&w=0&h=u5BwIDikkJCxrQQopgYHW2rOi7XBmG3JOHJJvYIE2C0='
    },
    {
        deal: 'Burger',
        type: 'burger',
        day: 'Tuesday',
        price: 500,
        image: 'https://media.istockphoto.com/photos/cheeseburger-with-tomato-and-lettuce-on-wooden-board-picture-id1309352410?b=1&k=20&m=1309352410&s=170667a&w=0&h=YduYl7Us5MSrw1EFSCxR9zDRLnEFa_O608NdqhHlSyM='
    },
    {
        deal: 'Deal 1',
        type: 'Pizza',
        day: 'Wednesday',
        price: 300,
        image: 'https://media.istockphoto.com/photos/foods-high-in-zinc-picture-id1289940519?b=1&k=20&m=1289940519&s=170667a&w=0&h=u5BwIDikkJCxrQQopgYHW2rOi7XBmG3JOHJJvYIE2C0='
    },
    {
        deal: 'Burger',
        type: 'burger',
        day: 'Wednesday',
        price: 500,
        image: 'https://media.istockphoto.com/photos/cheeseburger-with-tomato-and-lettuce-on-wooden-board-picture-id1309352410?b=1&k=20&m=1309352410&s=170667a&w=0&h=YduYl7Us5MSrw1EFSCxR9zDRLnEFa_O608NdqhHlSyM='
    },
    {
        deal: 'Deal 1',
        type: 'Pizza',
        day: 'Wednesday',
        price: 300,
        image: 'https://media.istockphoto.com/photos/foods-high-in-zinc-picture-id1289940519?b=1&k=20&m=1289940519&s=170667a&w=0&h=u5BwIDikkJCxrQQopgYHW2rOi7XBmG3JOHJJvYIE2C0='
    },
    {
        deal: 'Burger',
        type: 'burger',
        day: 'Thursday',
        price: 500,
        image: 'https://media.istockphoto.com/photos/cheeseburger-with-tomato-and-lettuce-on-wooden-board-picture-id1309352410?b=1&k=20&m=1309352410&s=170667a&w=0&h=YduYl7Us5MSrw1EFSCxR9zDRLnEFa_O608NdqhHlSyM='
    },
    {
        deal: 'Deal 1',
        type: 'Pizza',
        day: 'Thursday',
        price: 300,
        image: 'https://media.istockphoto.com/photos/foods-high-in-zinc-picture-id1289940519?b=1&k=20&m=1289940519&s=170667a&w=0&h=u5BwIDikkJCxrQQopgYHW2rOi7XBmG3JOHJJvYIE2C0='
    },
    {
        deal: 'Burger',
        type: 'burger',
        day: 'Thursday',
        price: 500,
        image: 'https://media.istockphoto.com/photos/cheeseburger-with-tomato-and-lettuce-on-wooden-board-picture-id1309352410?b=1&k=20&m=1309352410&s=170667a&w=0&h=YduYl7Us5MSrw1EFSCxR9zDRLnEFa_O608NdqhHlSyM='
    },
    {
        deal: 'Deal 1',
        type: 'Pizza',
        day: 'Friday',
        price: 300,
        image: 'https://media.istockphoto.com/photos/foods-high-in-zinc-picture-id1289940519?b=1&k=20&m=1289940519&s=170667a&w=0&h=u5BwIDikkJCxrQQopgYHW2rOi7XBmG3JOHJJvYIE2C0='
    },
    {
        deal: 'Burger',
        type: 'burger',
        day: 'Friday',
        price: 500,
        image: 'https://media.istockphoto.com/photos/cheeseburger-with-tomato-and-lettuce-on-wooden-board-picture-id1309352410?b=1&k=20&m=1309352410&s=170667a&w=0&h=YduYl7Us5MSrw1EFSCxR9zDRLnEFa_O608NdqhHlSyM='
    },
    {
        deal: 'Deal 1',
        type: 'Pizza',
        day: 'Friday',
        price: 300,
        image: 'https://media.istockphoto.com/photos/foods-high-in-zinc-picture-id1289940519?b=1&k=20&m=1289940519&s=170667a&w=0&h=u5BwIDikkJCxrQQopgYHW2rOi7XBmG3JOHJJvYIE2C0='
    },
    {
        deal: 'Burger',
        type: 'burger',
        day: 'Saturday',
        price: 500,
        image: 'https://media.istockphoto.com/photos/cheeseburger-with-tomato-and-lettuce-on-wooden-board-picture-id1309352410?b=1&k=20&m=1309352410&s=170667a&w=0&h=YduYl7Us5MSrw1EFSCxR9zDRLnEFa_O608NdqhHlSyM='
    },
    {
        deal: 'Burger',
        type: 'burger',
        day: 'Saturday',
        price: 500,
        image: 'https://media.istockphoto.com/photos/cheeseburger-with-tomato-and-lettuce-on-wooden-board-picture-id1309352410?b=1&k=20&m=1309352410&s=170667a&w=0&h=YduYl7Us5MSrw1EFSCxR9zDRLnEFa_O608NdqhHlSyM='
    },
    {
        deal: 'Burger',
        type: 'burger',
        day: 'Sunday',
        price: 500,
        image: 'https://media.istockphoto.com/photos/cheeseburger-with-tomato-and-lettuce-on-wooden-board-picture-id1309352410?b=1&k=20&m=1309352410&s=170667a&w=0&h=YduYl7Us5MSrw1EFSCxR9zDRLnEFa_O608NdqhHlSyM='
    },
    {
        deal: 'Burger',
        type: 'burger',
        day: 'Sunday',
        price: 500,
        image: 'https://media.istockphoto.com/photos/cheeseburger-with-tomato-and-lettuce-on-wooden-board-picture-id1309352410?b=1&k=20&m=1309352410&s=170667a&w=0&h=YduYl7Us5MSrw1EFSCxR9zDRLnEFa_O608NdqhHlSyM='
    },
]


arr.forEach((data, ind) => {

    let div = `<div class = 'food_div'> 
    <img src = ${data.image} height = '200' width = '200' /> 
    
    <p>${data.deal}</p>
    <p>${data.day}</p> </div>`
    foodContainer.innerHTML += div
}) 



