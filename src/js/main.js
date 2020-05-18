import modals from "./modules/modals.js"
import slider from "./modules/slide"
window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    modals();
    slider('.main-slider-item',"verticalInDown");
    // slider('.main-slider-item',"verticalUpDown");
    // slider('.main-slider-item',"orizontalLeft");
    // slider('.main-slider-item',"orizontalRight");
});


