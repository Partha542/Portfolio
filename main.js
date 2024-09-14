let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle('active');
}



let sections = document.querySelectorAll('selection');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    selections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.ofsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top <= offset + height) {
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a{href*=' + id + ']').classList.add('active');
            });
        };
    });


    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);


    menuIcon.classList.remove('fa-mark');
    navbar.classList.remove('active');
}
     




ScrollReveal({
    distance: '80px',
    duration: 2000,
    Delay: 200,
});

ScrollReveal().reveal('.home-content, heading, .skills, .contact-text',{origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form',{origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img',{origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content',{origin: 'right' });


const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Software Engineer','Frontend Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
})