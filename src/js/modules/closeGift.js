const closePopupGift = ()=> {
    const closeBtnx = document.querySelector('.popup-gift .popup-close');
    const popupGift = document.querySelector('.popup-gift');
    const fixedGift = document.querySelector(".fixed-gift");
    const button = document.querySelectorAll('.button');

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

    function stopEvent () {
        closeBtnx.addEventListener('click',()=>{
            window.removeEventListener('scroll', closeGift);
        });
            button.forEach (buton => {
            buton.addEventListener ("click", () => {
                window.removeEventListener('scroll', closeGift);
                fixedGift.style.display = "none";
            })
        });
    }
    stopEvent();


  };
export default closePopupGift
