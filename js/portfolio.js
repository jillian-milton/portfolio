// Large Scale Projects
let gated = document.querySelector('.gated');
let boss = document.querySelector('.boss');
let band = document.querySelector('.band');

gated.addEventListener('click', function(){
    window.location = '../html/gated.html';
})

boss.addEventListener('click', function(){
    window.location = '../html/boss.html';
})

band.addEventListener('click', function(){
    window.location = '../html/band.html';
})

// UI/UX Design Projects
let winning = document.querySelector('.winning');
let pals = document.querySelector('.pals');
let orig = document.querySelector('.orig');
let redesign = document.querySelector('.redesign');

winning.addEventListener('click', function(){
    window.location = '../html/winning.html';
})

pals.addEventListener('click', function(){
    window.location = '../html/husky-pals.html';
})

orig.addEventListener('click', function(){
    window.location = '../html/blind-orig.html';
})

redesign.addEventListener('click', function(){
    window.location = '../html/blind-redesign.html';
})

// Coding Projects
let van = document.querySelector('.van');
let corporate = document.querySelector('.corporate');
let hub = document.querySelector('.hub');
let wrap = document.querySelector('.wrap');

van.addEventListener('click', function(){
    window.location = '../html/van.html';
})

corporate.addEventListener('click', function(){
    window.location = '../html/corporate.html';
})

hub.addEventListener('click', function(){
    window.location = '../html/husky-hub.html';
})

wrap.addEventListener('click', function(){
    window.location = '../html/wrap.html';
})

// Footer
let linkedin = document.querySelector('.linkedin');
linkedin.addEventListener('click', function(){
    window.open('https://www.linkedin.com/in/jillian-milton-uxdesigner/');
    //Original URL: https://www.linkedin.com/in/jillian-milton/
})

let github = document.querySelector('.github');
github.addEventListener('click', function(){
    window.open('https://github.com/jillian-milton/');
})

// Hamburger Icon (Goose)
let hamburger = document.querySelector('.hamburger');
let open = document.querySelector('.open');
let closed = document.querySelector('.closed');

hamburger.addEventListener('click', function(){
    open.classList.toggle('closed');
})