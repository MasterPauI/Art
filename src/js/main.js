import modals from "./modules/modals.js"
import slider from "./modules/slide"
import blokByImg from "./modules/changeBlockByImg"
import sliderAndButton from "./modules/sliderAndButton.js"
import accordion from "./modules/accordion";
import inactivityTime from "./modules/showModalByTime";
import closePopupGift from "./modules/closeGift";
import filter from "./modules/filtru.js"

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    modals();
    slider('.main-slider-item',"verticalInDown");
    // slider('.main-slider-item',"verticalUpDown");
    // slider('.feedback-slider-item',"orizontalLeft");
    // slider('.main-slider-item',"orizontalRight");

    blokByImg();
    sliderAndButton ();
    accordion ();
    inactivityTime();
    closePopupGift();
    filter();
});



