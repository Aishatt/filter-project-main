const navicon = document.querySelector('.icon')
const navbar = document.querySelector('.navlink')
const logo = document.querySelector('#image1')
const icon = document.querySelector('.d-none')
const pasteries = document.querySelectorAll('#pasteries')
const itemslinks = document.querySelector('.item-links')
const cards = document.querySelector('.cards')
const card = document.querySelectorAll('.card')
const cart = document.querySelector('.item')
const cartContainer = document.querySelector('#cart-container')
const clearCart=document.querySelector('#clear-cart')
const checkout=document.querySelector('.checkout')

navicon.style.cursor='pointer';
navicon.addEventListener('click', function () {
    if (navicon.classList.contains('show')){
           navbar.style.display = 'inline-flex'
    navicon.classList.remove('show')
    }
     else {
    navicon.classList.add('show')
    navbar.style.display = 'none'
}
})


pasteries.forEach(function (button) {
    button.addEventListener('click', function (e) {
        e.preventDefault()

        //grab the filter that was clicked
        const filter = e.target.dataset.filter
        if (filter === 'all') {
            //show all items
            card.forEach(function (item) {
                item.style.display = 'block'
            })

        } else if (filter === 'sweet') {
            card.forEach(function (item) {
                if (item.classList.contains('sweet')) {
                    item.style.display = 'block'
                } else {
                    item.style.display = 'none'
                }
            })
        } else if (filter === 'cake') {
            card.forEach(function (item) {
                if (item.classList.contains('cake')) {
                    item.style.display = 'block'
                } else {
                    item.style.display = 'none'
                }
            })
        } else if (filter === 'cupcake') {
            card.forEach(function (item) {
                if (item.classList.contains('cupcake')) {
                    item.style.display = 'block'
                } else {
                    item.style.display = 'none'
                }
            })
        } else if (filter === 'doughnut') {
            card.forEach(function (item) {
                if (item.classList.contains('doughnut')) {
                    item.style.display = 'block'
                } else {
                    item.style.display = 'none'
                }
            })
        }

    })
})

const modalContainer = document.querySelector('.modal-container')
const modalimage = document.querySelector('.modal-img')
const itemImage = document.querySelectorAll('.item-img')
//set upan array
const modals = []
//set up counter
let counter = 0
//foreach to copy images and push to array
itemImage.forEach(function (image) {
    modals.push(image.src);
})
//add click event


card.forEach(function (item) {
    item.addEventListener('click', function (e) {
        //grab the image of the item that was clicked
        let image = e.target.src;
        modalimage.style.backgroundImage = `url(${image})`;
        modalContainer.style.display = 'block'
        //get array index no for the image selected
        counter = modals.indexOf(image)
    })
})
const prevbtn = document.querySelector('#prev')
const nxtbtn = document.querySelector('#nxt')
prevbtn.addEventListener('click', function () {
    counter--;
    if (counter < 0) {
        counter = counter.length - 1
    }
    modalimage.style.backgroundImage = `url(${modals[counter]})`;
});
nxtbtn.addEventListener('click', function () {
    counter++;
    if (counter >= counter.length) {
        counter = 0;
    }
    modalimage.style.backgroundImage = `url(${modals[counter]})`;
});
//close button
const closebtn = document.querySelector('.close')

closebtn.addEventListener('click', function () {
    modalContainer.style.display = 'none'
});
//CART

cart.addEventListener('click', function () {
    if(cartContainer.classList.contains('cart')){
        cartContainer.classList.remove('cart')}
       
});

const closecart = document.querySelector('.close-cart')
closecart.addEventListener('click', function () {
    cartContainer.classList.add('cart')
});