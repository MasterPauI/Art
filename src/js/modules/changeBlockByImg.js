
const blokByImg = () =>{

const block1 = document.querySelector('.size-1');
const block2 = document.querySelector('.size-2');
const block3 = document.querySelector('.size-3');
const block4 = document.querySelector('.size-4');

loadEvent();

function loadEvent() {
block1.addEventListener('mouseover', runImg1);
block2.addEventListener('mouseover', runImg2);
block3.addEventListener('mouseover', runImg3);
block4.addEventListener('mouseover', runImg4);

    block1.addEventListener('mouseout', closeImg1);
    // block2.addEventListener('mouseout', closeImg2);
    // block3.addEventListener('mouseout', closeImg3);
    // block4.addEventListener('mouseout', closeImg4);


}
//
function runImg1() {
    block1.src = "./assets/img/sizes-1-1.png"
}
    function closeImg1() {
             document.querySelector('.size-1').removeAttribute(this.src)
    }



function runImg2() {
    block2.src = "./assets/img/sizes-2-1.png"
}
function runImg3() {
    block3.src = "./assets/img/sizes-3-1.png"
}
function runImg4() {
    block4.src = "./assets/img/sizes-4-1.png"
}

};

export default blokByImg