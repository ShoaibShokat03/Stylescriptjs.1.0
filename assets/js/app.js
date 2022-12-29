if (document.readyState == "complete") {
    CustomeJavascript()
}
window.onload = () => {
    //CustomeJavascript()
}
var CustomeJavascript = () => {

    let movSlide = () => {
        let slideBox = document.querySelectorAll('.slide-box');
        slideBox.forEach(slidebox => {
            let slides = slidebox.querySelectorAll('.slide');
            let width = slides.length;
            slidebox.style.width = 100 * width + '%';
            slides.forEach(slide => {
                let move = 0;
                let moved = 100;
                let count = 0;
                let totalSlides = slides.length
                //console.log("Total Slides " + totalSlides);
                //console.log("Slide " + count);
                let slideMove = () => {
                    move = move + moved;
                    count++;
                    //console.log("Slide " + count);
                    if (count >= totalSlides) {
                        move = 0;
                        count = 0;
                    }
                    slide.style.setProperty('transform', 'translateX(' + -move + '%)')
                }

                let slideTime = 0;
                let slideParentClassArr = slide.parentElement.getAttribute('class').split(' ');
                slideParentClassArr.forEach(sliderClass => {
                    if (sliderClass.includes('slide-time')) {
                        let sliderClassArr = sliderClass.split('-');
                        slideTime = sliderClassArr[sliderClassArr.length - 1];
                        //console.log(slideTime);
                    }
                });

                setInterval(function () {
                    slideMove();
                }, slideTime);

                let slideNext = document.getElementById('slide-next-btn');
                slideNext.addEventListener('click', () => {
                    if (count < totalSlides - 1) {
                        move = move + moved;
                        count++;
                        slide.style.setProperty('transform', 'translateX(' + -move + '%)')
                    }
                });

                let slidePreve = document.getElementById('slide-preve-btn');
                slidePreve.addEventListener('click', () => {
                    if (count > 0) {
                        move = move - moved;
                        count = count - 1;
                        slide.style.setProperty('transform', 'translateX(' + -move + '%)')
                    }
                });
            });
        });
    }
    movSlide();

    
}
CustomeJavascript();