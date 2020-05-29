const slider = (slideName, selectorAnimate1, selectorAnimate2) => {
    let slideIndex = 0;
    showSlides();
    function showSlides() {
    let slides = document.querySelectorAll(slideName);
    slides.forEach((slid) => {
        slid.classList.add(selectorAnimate1, selectorAnimate2);
    });

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
    slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000);

    }
};
export default slider


