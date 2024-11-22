let hamburger = document.querySelector('.hamburger');
let open = document.querySelector('.open');
let closed = document.querySelector('.closed');

hamburger.addEventListener('click', function(){
    open.classList.toggle('closed');
})


let linkedin = document.querySelector('.linkedin');
linkedin.addEventListener('click', function(){
    window.open('https://www.linkedin.com/in/jillian-milton/');
})

let github = document.querySelector('.github');
github.addEventListener('click', function(){
    window.open('https://github.com/jillian-milton/');
})


let app = document.querySelector('#app');

app.addEventListener('click', function(){
    window.open('https://snack.expo.dev/@skye22/restaurwrap?platform=ios');
})

