let hamburger = document.querySelector('.hamburger');
let open = document.querySelector('.open');
let closed = document.querySelector('.closed');

hamburger.addEventListener('click', function(){
    open.classList.toggle('closed');
})


let linkedin = document.querySelector('.linkedin');
linkedin.addEventListener('click', function(){
    window.open('https://www.linkedin.com/in/jillian-milton-uxdesigner/');
    //Original URL: https://www.linkedin.com/in/jillian-milton/
})

let github = document.querySelector('.github');
github.addEventListener('click', function(){
    window.open('https://github.com/jillian-milton/');
})

let figma = document.querySelector('#figma');

figma.addEventListener('click', function(){
    window.open('https://www.figma.com/design/5NmkDa3kbGa6ATtM6RBEv2/HuksyHub?node-id=15-1282&t=MVsG8zrKGf70VW4n-1');
})

let app = document.querySelector('#app');

app.addEventListener('click', function(){
    window.open('https://charizard-948v.onrender.com');
    //Link does not work
})

