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


let app = document.querySelector('#app');

app.addEventListener('click', function(){
    window.open('https://www.figma.com/proto/T3lnh7w6BI7eGBQ1AGYKRU/Habit-Tracker-JM2?type=design&scaling=scale-down&page-id=0%3A1&node-id=1-51&starting-point-node-id=1%3A19');
})

