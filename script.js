let currentSlide = 0;
const slides = document.querySelectorAll('.item');
const prevbtn = document.querySelector(".prev");
const nextbtn = document.querySelector(".next")

function moveSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

//Auto slide functionality
function autoslide(){
    autoslideInterval = setInterval(() => { moveSlide(1); }, 6000);
}

// clear auto slide when prev button is pressed
prevbtn.addEventListener("click", ()=>{
    clearInterval(autoslideInterval);
})
nextbtn.addEventListener("click", ()=>{
    clearInterval(autoslideInterval);
})

autoslide();


// loader
const loader = document.querySelector(".loader-wrapper");
window.addEventListener("load", ()=>{
    loader.style.display = "none";
})
// animate on scroll

function isElementInViewPort(el){
    const rect = el.getBoundingClientRect();
    return(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight) &&
        rect.left <= (window.innerWidth) //check if element is within view port
    );
}

function onScroll(){
    const box = document.querySelector(".socials");
    const box1 = document.querySelector(".about-head");
    const box2 = document.querySelector(".about-para");
    if(isElementInViewPort(box, box1, box2)){
        box.classList.add("animate"); //adds class animate if element is in view port
        box1.classList.add("animate");
        box2.classList.add("animate");
    }
    else{
        box.classList.remove("animate"); //removes animate when element is out of view port
        box1.classList.remove("animate");
        box2.classList.remove("animate");
    }
}

window.addEventListener('scroll', onScroll);

// harmburger menu

const harmburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const icon = hamburgerMenu.querySelector("i");

hamburgerMenu.addEventListener('click', ()=>{
    harmburger.style.display = harmburger.style.display === "flex"? "none": "flex";
})