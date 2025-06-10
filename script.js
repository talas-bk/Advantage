
// Burger Menu 
const burgerOpen = document.getElementById("burger");
const headerOpen =document.querySelector(".section-header");

    burgerOpen.addEventListener("click",() => {
        headerOpen.classList.toggle("open");
    })

// Scroll animations
const homePage = document.querySelector(".container-general");
const page = document.querySelector(".hero-img2");
const firstSect = document.querySelector(".first-page");
const advanteg = document.querySelector(".advanteg");


 const scrollAnimation = () => {
    let windowCenter = window.scrollY;
    let windowScroll = firstSect.offsetHeight / 2;
    if (windowCenter >= windowScroll) {
        page.classList.add('active');
        advanteg.classList.add('active');
    } 
 }


// Scroll header fixed
const scrollFixed = () => {

   let centerY = window.scrollY;
   let firstSect = homePage.offsetHeight / 10 ;

    if (centerY >= firstSect ) {
        headerOpen.classList.add("fixed");
    }
    else {
        headerOpen.classList.remove("fixed");
    }

}

window.addEventListener("scroll", () => {
scrollFixed();
scrollAnimation();
})

const sideBar = document.querySelector(".portfolio");
let barOpen = document.querySelector('.aside-bar');


sideBar.addEventListener('click', () => {
    barOpen.classList.toggle("side-open");
})
