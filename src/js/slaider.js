
const slider = () =>{
    let slideCounter = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("main-slider-item");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideCounter++;
        if (slideCounter > slides.length) {slideCounter = 1}

        slides[slideCounter-1].style.display = "block";
        setTimeout(showSlides, 3000);
    }
};
export {slider};

