//toggle icon navbar
let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');
let menuBar = document.getElementById('menu-bar')

// hamburger menu for smaller devices.

menuIcon.onclick = function () {
    menuIcon.classList.toggle('nav-items');
    navbar.classList.toggle('active');
}



//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll =()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            // active navbar links
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
        
    });
    //sticky header
    let header= document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY >100);

    // remove toggle icon and navbar when click navbar links(scroll)
    menuIcon.classList.toggle('');
    navbar.classList.toggle('active');
}