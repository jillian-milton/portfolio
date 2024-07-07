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
let app = document.querySelector('#app');
let thesis = document.querySelector('#thesis');

figma.addEventListener('click', function(){
    window.location = 'https://www.figma.com/design/qozV3CFjZ84RObfAiz5joa/Gated-Final-Design?node-id=0-1';
})

app.addEventListener('click', function(){
    window.location = 'https://gated.onrender.com';
})

thesis.addEventListener('click', function(){
    //Add link here once published to Open Commons
    window.location = '';
})