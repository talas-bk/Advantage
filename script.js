
// Burger Menu 
const burgerOpen = document.getElementById("burger");
const headerOpen =document.querySelector(".section-header");

    burgerOpen.addEventListener("click",() => {
        headerOpen.classList.toggle("open");
    })

// Scroll animations
const homePage = document.querySelector(".fade-in");
const page = document.querySelector(".hero-img2");
const firstSect = document.querySelector(".first-page");
const advanteg = document.querySelector(".advanteg");
const homeSect = document.querySelector(".container-general");
const cards = document.querySelectorAll('.fade-up')

function checkScrollBox () {
  const bottom = window.innerHeight * 0.85;
  cards.forEach(el => {
    const cardTop = el.getBoundingClientRect().top;
    if (cardTop < bottom) {
        el.classList.add('show');
    }
  })
}


 const scrollAnimation = () => {
    let windowCenter = window.scrollY;
    let windowScroll = firstSect.offsetHeight /2;
    if (windowCenter >= windowScroll) {
        page.classList.add('active');
        advanteg.classList.add('active');
    };
 }


 window.addEventListener('DOMContentLoaded',()  => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
    setTimeout(()=> {
    el.classList.add('active');
 },index * 50 )
    })
 })


 


window.addEventListener("scroll", () => {
scrollAnimation();
checkScrollBox();
})

window.addEventListener('load', checkScrollBox);

const fastQa = document.querySelector(".add-inform");
const textQa = document.querySelector(".text-scale");

fastQa.addEventListener('click', () => {
    textQa.classList.toggle('text-scaleActive')
})



