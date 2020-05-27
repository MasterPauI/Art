//                                     for slidershow

function sliderAndButton (slider, btnLeft, btnRight, mouseEvent) {

    let slides = document.querySelectorAll (slider),
        arrowLeft = document.querySelector (btnLeft),
        arrowRight = document.querySelector (btnRight),
        mouse = document.querySelector (mouseEvent),
        current = 0;

    showSlides ();

    function showSlides () {

        let i;
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        current++;
        if (current > slides.length) {
            current = 1;
        }

        slides[current - 1].style.display = "block";
    }

    let slideInterval = setInterval (showSlides, 2000);

    //                                       for button

// Clear all images
    function reset () {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
    }

// Show prev
    function slideLeft () {
        reset();
        slides[current - 1].style.display = "block";
        current--;
    }

// Show next
    function slideRight () {
        reset();
        slides[current + 1].style.display = "block";
        current++;
    }

// Left arrow click
    arrowLeft.addEventListener ("click", function () {
        if (current === 0) {
            current = slides.length;
        }
        slideLeft ();
    });

// Right arrow click
    arrowRight.addEventListener ("click", function () {
        if (current === slides.length - 1) {
            current = -1;
        }
        slideRight ();
    });

//                         for mouse

    function pauseSlide () {
        clearTimeout (slideInterval);
    }

    function playSlide () {
        slideInterval = setInterval (showSlides, 2000);
    }

    mouse.addEventListener ("mouseover", () => {
        pauseSlide ();
    });

    mouse.addEventListener ("mouseout", () => {
        playSlide ();
    });
}

export default sliderAndButton




