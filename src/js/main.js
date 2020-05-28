import modals from "./modules/modals.js"
import slider from "./modules/slide"
import blokByImg from "./modules/changeBlockByImg"
// import blokByImg from "./modules/task9"
import sliderAndButton from "./modules/sliderAndButton.js"
import accordion from "./modules/accordion";
import inactivityTime from "./modules/showModalByTime";
import closePopupGift from "./modules/closeGift"

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    modals();
    slider('.main-slider-item',".animated",".slideInDown");
    // slider('.main-slider-item',".animated",".slideInUp");
    // slider('.main-slider-item',".animated",".slideInLeft");
    // slider('.main-slider-item',".animated",".slideInRight");


    // blokByImg('.size-1', "./assets/img/sizes-1-1.png", './assets/img/sizes-1.png');
    // blokByImg('.size-2', './assets/img/sizes-2-1.png', './assets/img/sizes-2.png');
    // blokByImg('.size-3', './assets/img/sizes-3-1.png', './assets/img/sizes-3.png');
    // blokByImg('.size-4', './assets/img/sizes-4-1.png', './assets/img/sizes-4.png');
    blokByImg();
    sliderAndButton ();
    accordion ();
    inactivityTime();
    closePopupGift();
});



