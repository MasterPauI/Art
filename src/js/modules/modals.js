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


    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close ');
    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');

};

    // showModalByTime('.popup-design', 60000);

export default modals

