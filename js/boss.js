let linkedin = document.querySelector('#linkedin');
let github = document.querySelector('#github');

let hamburger = document.querySelector('.hamburger');
let open = document.querySelector('.open');
let closed = document.querySelector('.closed');

hamburger.addEventListener('click', function(){
    open.classList.toggle('closed');
})


linkedin.addEventListener('click', function(){
    window.location = 'https://www.linkedin.com/in/jillian-milton-178349203/?trk=public_profile_samename-profile';
})


github.addEventListener('click', function(){
    window.location = 'https://github.com/jillian-milton/';
})


let figma = document.querySelector('#figma');
let website = document.querySelector('#website');
let calendar = document.querySelector('#calendar');

figma.addEventListener('click', function(){
    window.location = 'https://www.figma.com/design/gkh6NgP2lPREEc8PHOwewb/Karli-Mockup?node-id=87-62&t=5UWGEgRYgfyQCurE-1';
})

website.addEventListener('click', function(){
    window.location = 'https://johansenw7486.wixsite.com/the-boss';
})

calendar.addEventListener('click', function(){
    window.location = 'https://www.figma.com/design/FD6ut3mXghxmVfeP4DBkaP/December-Content-Calendar?node-id=0-1&t=00ruKAB9LQXYbemk-1';
})