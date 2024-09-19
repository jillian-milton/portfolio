let about = document.querySelector('#about');
let portfolio = document.querySelector('#porfolio');

let hamburger = document.querySelector('.hamburger');
let open = document.querySelector('.open');
let closed = document.querySelector('.closed');

hamburger.addEventListener('click', function(){
    open.classList.toggle('closed');
})

let linkedin = document.querySelector('.linkedin');
linkedin.addEventListener('click', function(){
    window.open('https://www.linkedin.com/in/jillian-milton-178349203/?trk=public_profile_samename-profile');
})

let github = document.querySelector('.github');
github.addEventListener('click', function(){
    window.open('https://github.com/jillian-milton/');
})

about.addEventListener('click', function(){
    window.location = '../html/about.html';
})


portfolio.addEventListener('click', function(){
    window.location = '../html/portfolio.html';
})

let winning = document.querySelector('.winning');

winning.addEventListener('click', function(){
    window.location = '../html/winning.html';
})

let gated = document.querySelector('.gated');

gated.addEventListener('click', function(){
    window.location = '../html/gated.html';
})

let hub = document.querySelector('.hub');

hub.addEventListener('click', function(){
    window.location = '../html/husky-hub.html';
})

