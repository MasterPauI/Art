import modals from "./modules/modals.js"
import slider from "./modules/slide"
import blokByImg from "./modules/changeBlockByImg"
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


    blokByImg();
    sliderAndButton ();
    accordion ();
    inactivityTime();
    closePopupGift();
});



