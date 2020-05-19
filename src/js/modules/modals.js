import slider from "./slide";

const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.classList.add('popup-');
            });
        });
        close.addEventListener('click', () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.classList.remove('popup-design');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.classList.remove('modal-open');
            }
        });
    }

    // function showModalByTime(selector, time) {
    //     setTimeout(function() {
    //         document.querySelector(selector).style.display = 'block';
    //         document.body.style.overflow = "hidden";
    //     }, time);
    // }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');


    const gift = document.querySelector(".fixed-gift");
    gift.addEventListener("click", () => {
        return gift.style.display = "none";
    });
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close ');


};

    // showModalByTime('.popup-design', 60000);


// ------------------------------------------------------------------------------------

//                                        Task 10

//                                     for slider

// function sliderAndButton () {
//
//     let slides = document.querySelectorAll(".feedback-slider-item"),
//         arrowLeft = document.querySelector(".main-prev-btn"),
//         arrowRight = document.querySelector(".main-next-btn"),
//         mouse = document.querySelector(".feedback-slider"),
//         current = 0;
//
//     showSlides();
//
//     function showSlides() {
//
//         let i;
//         for (i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";
//         }
//         current++;
//         if (current > slides.length) {
//             current = 1;
//         }
//
//         slides[current - 1].style.display = "block";
//     }
//
//     let slideInterval = setInterval(showSlides, 2000);
//
//     //                                       for button
//
// // Clear all images
//     function reset() {
//         for (let i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";
//         }
//     }
//
// // Show prev
//     function slideLeft() {
//         reset();
//         slides[current - 1].style.display = "block";
//         current--;
//     }
//
// // Show next
//     function slideRight() {
//         reset();
//         slides[current + 1].style.display = "block";
//         current++;
//     }
//
// // Left arrow click
//     arrowLeft.addEventListener("click", function () {
//         if (current === 0) {
//             current = slides.length;
//         }
//         slideLeft();
//     });
//
// // Right arrow click
//     arrowRight.addEventListener("click", function () {
//         if (current === slides.length - 1) {
//             current = -1;
//         }
//         slideRight();
//     });
//
// //                         for mouse
//
//     function pauseSlideshow() {
//         clearTimeout(slideInterval);
//     }
//
//     function playSlideshow() {
//         slideInterval = setInterval(showSlides, 2000);
//     }
//
//     mouse.addEventListener("mouseover", () => {
//         pauseSlideshow();
//     });
//
//     mouse.addEventListener("mouseout", () => {
//         playSlideshow();
//     });
// }
//
// sliderAndButton();

export default modals

