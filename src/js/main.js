import modals from "./modules/modals.js"
import slider from "./modules/slide"
import blokByImg from "./modules/changeBlockByImg";
import sliderAndButton from "./modules/task10.js"
import closePopupGift from "./modules/closeGift"


window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    modals();
    slider('.main-slider-item',"verticalInDown");
    // slider('.main-slider-item',"verticalUpDown");
    // slider('.feedback-slider-item',"orizontalLeft");
    // slider('.main-slider-item',"orizontalRight");

    blokByImg();
    sliderAndButton();
    closePopupGift();


});



