let linkedin = document.querySelector('#linkedin');
let github = document.querySelector('#github');
let about = document.querySelector('#about');
let portfolio = document.querySelector('#porfolio');

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

about.addEventListener('click', function(){
    window.location = '../html/about.html';
})


portfolio.addEventListener('click', function(){
    window.location = '../html/porfolio.html';
})

