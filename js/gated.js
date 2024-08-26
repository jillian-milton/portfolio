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

let figma = document.querySelector('#figma');
let app = document.querySelector('#app');
let thesis = document.querySelector('#thesis');

figma.addEventListener('click', function(){
    window.open('https://www.figma.com/design/qozV3CFjZ84RObfAiz5joa/Gated-Final-Design?node-id=0-1');
})

app.addEventListener('click', function(){
    window.open('https://gated.onrender.com');
})

thesis.addEventListener('click', function(){
    //Add link here once published to Open Commons
    window.open('');
})