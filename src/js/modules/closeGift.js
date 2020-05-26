
const closePopupGift = ()=> {
    const closeBtnx = document.querySelector('.popup-gift .popup-close');
    const popupGift = document.querySelector('.popup-gift');
    const fixedGift = document.querySelector(".fixed-gift");
    // const button = document.querySelector('button');
    // button.addEventListener('click')

    window.addEventListener('scroll', closeGift);
    function closeGift(){
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scroled = window.scrollY;

        if (Math.ceil(scroled) === scrollable){
            popupGift.style.display = "block";
            if(popupGift.style.display) {
                return fixedGift.style.display = "none";
            }
        }

    }


    closeBtnx.addEventListener('click',()=>{
        // popupGift.classList.remove('popup-gift');
        window.removeEventListener('scroll', closeGift);

    });


};
function clickButon(e){
    console.log(e.target);
}
export default closePopupGift
