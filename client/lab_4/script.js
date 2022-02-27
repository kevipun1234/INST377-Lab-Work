let slidePosition = 0;
const slides = document.querySelectorAll('.carousel_item');
const totalSlides = slides.length;



const next = document.querySelector('#carousel_button--next')
    next.addEventListener("click", () => {
        moveNext();
    });
const prev = document.querySelector('#carousel_button--prev')
    prev.addEventListener("click", () => {
        movePrev();
    });


function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('carousel_item--visible');
        slide.classList.add('carousel_item--hidden');
    }
        slides[slidePosition].classList.add('carousel_item--visible');
    
}
function moveNext() {

    if (slidePosition === totalSlides - 1) {
         slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition()
}

function movePrev() {
   

    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
        }
        updateSlidePosition()
    }


