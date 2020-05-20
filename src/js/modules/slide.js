const slider = (slideName, direction) =>{
    let slideCounter = 0;
    showSlides();

    function showSlides() {

        let slides = document.querySelectorAll(slideName);
        switch (direction) {
            case "verticalInDown":
                slides.forEach((slid) => {
                    slid.classList.add("animated", "slideInDown");
                });
                break;
            case "verticalUpDown":
                slides.forEach((slid) => {
                    slid.classList.add("animated", "slideInUp");
                });
                break;
            case "orizontalLeft":
                slides.forEach((slid) => {
                    slid.classList.add("animated", "slideInLeft");
                });
                break;
            case "orizontalRight":
                slides.forEach((slid) => {
                    slid.classList.add("animated", "slideInRight");
                });
                break;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideCounter++;
        if (slideCounter > slides.length) {
            slideCounter = 1
        }

        slides[slideCounter - 1].style.display = "block";
        setTimeout(showSlides, 3000);

    }

};




export default slider


