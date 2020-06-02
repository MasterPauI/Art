import modals from "./modals";

const modal = () => {
    let button = document.getElementById('modal-button');
    let body = document.getElementById('body');
    button.addEventListener('click', onClick);
    body.addEventListener('resize', onResize);
    function onClick() {
        let modalHeader = document.getElementById('modal-header');
        if (modalHeader.style.display === 'flex') {
            modalHeader.style.display = 'none'
        } else {
            modalHeader.style.display = 'flex';
        }
    }
    function onResize() {
        console.log('am intrat')
        let modalHeader = document.getElementById('modal-header');
        console.log(window.innerWidth);
        if (window.innerWidth > 992) {
            modalHeader.style.display = 'none'
        }
    }
}
export default modal