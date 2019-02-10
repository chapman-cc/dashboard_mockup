const navbar = document.querySelector('#navbar');

navbar.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target);
})
