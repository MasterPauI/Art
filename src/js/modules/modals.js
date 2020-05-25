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
    //         document.querySelector(selector).style.display = "block";
    //         document.body.style.overflow = "hidden";
    //     }, time);
    // }


    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');

    // showModalByTime(".popup-consultation", 5000);


    const gift = document.querySelector(".fixed-gift");
    gift.addEventListener("click", () => {
        // localStorage.setItem ("active", "true");
        return gift.style.display = "none";
    });
    bindModal ('.fixed-gift', '.popup-gift', '.popup-gift .popup-close');



};

    // showModalByTime('.popup-design', 60000);

export default modals

