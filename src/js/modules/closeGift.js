
const closePopupGift = ()=> {
    const closeBtnx = document.querySelector('.popup-close');
    const popupGift = document.querySelector('.popup-gift');
    const gift = document.querySelector(".fixed-gift");


    gift.addEventListener("click", () => {
        return gift.style.display = "none";
    });

    window.addEventListener('scroll', closeGift);
    function closeGift(){
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scroled = window.scrollY;

        if (Math.ceil(scroled) === scrollable){
            popupGift.style.display = "block";
            if(popupGift.style.display) {
                return gift.style.display = "none";
            }
        }

    }

    closeBtnx.addEventListener('click',()=>{
        popupGift.classList.remove('popup-gift');
        window.removeEventListener('scroll', closeGift);

    });


};
export default closePopupGift
