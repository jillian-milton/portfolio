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
let website = document.querySelector('#website');
let calendar = document.querySelector('#calendar');

figma.addEventListener('click', function(){
    window.open('https://www.figma.com/design/gkh6NgP2lPREEc8PHOwewb/Karli-Mockup?node-id=87-62&t=5UWGEgRYgfyQCurE-1');
})

website.addEventListener('click', function(){
    window.open('https://johansenw7486.wixsite.com/the-boss');
})

calendar.addEventListener('click', function(){
    window.open('https://www.figma.com/design/FD6ut3mXghxmVfeP4DBkaP/December-Content-Calendar?node-id=0-1&t=00ruKAB9LQXYbemk-1');
})