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


let app = document.querySelector('#app');

app.addEventListener('click', function(){
    window.location = 'https://xd.adobe.com/view/02937209-16f6-4f9a-b085-a9b6d22209a4-57c0/?fullscreen';
})

