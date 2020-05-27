
const blokByImg = () =>{

const block1 = document.querySelector('.size-1');
const block2 = document.querySelector('.size-2');
const block3 = document.querySelector('.size-3');
const block4 = document.querySelector('.size-4');
const parent1 = document.querySelector('.size-1').parentElement;
const parent2 = document.querySelector('.size-2').parentElement;
const parent3 = document.querySelector('.size-3').parentElement;
const parent4 = document.querySelector('.size-4').parentElement;

loadEvent();

function loadEvent() {
    block1.addEventListener('mouseover', runImg1);
    block2.addEventListener('mouseover', runImg2);
    block3.addEventListener('mouseover', runImg3);
    block4.addEventListener('mouseover', runImg4);

    block1.addEventListener('mouseout', closeImg1);
    block2.addEventListener('mouseout', closeImg2);
    block3.addEventListener('mouseout', closeImg3);
    block4.addEventListener('mouseout', closeImg4);
}

function runImg1() {
    block1.src = "./assets/img/sizes-1-1.png";

    for(let i=0; i<parent1.getElementsByTagName('p').length; i++){
        parent1.getElementsByTagName('p')[i].style.display = 'none';
    }
   }
    function closeImg1() {
    block1.src = "./assets/img/sizes-1.png";
        for(let i=0; i<parent1.getElementsByTagName('p').length; i++) {
            parent1.getElementsByTagName('p')[i].style.display = 'block';
        }
    }
function runImg2() {
    block2.src = "./assets/img/sizes-2-1.png";
    for(let i=0; i<parent2.getElementsByTagName('p').length; i++) {
        parent2.getElementsByTagName('p')[i].style.display = 'none';
    }
}
function closeImg2() {
        block2.src = "./assets/img/sizes-2.png";
    for(let i=0; i<parent2.getElementsByTagName('p').length; i++) {
        parent2.getElementsByTagName('p')[i].style.display = 'block';
        }
    }
function runImg3() {
    block3.src = "./assets/img/sizes-3-1.png";
    for(let i=0; i<parent3.getElementsByTagName('p').length; i++) {
        parent3.getElementsByTagName('p')[i].style.display = 'none';
    }
}
function closeImg3() {
        block3.src = "./assets/img/sizes-3.png";
    for(let i=0; i<parent3.getElementsByTagName('p').length; i++) {
        parent3.getElementsByTagName('p')[i].style.display = 'block';
    }
    }
function runImg4() {
    block4.src = "./assets/img/sizes-4-1.png";
    for(let i=0; i<parent4.getElementsByTagName('p').length; i++) {
        parent4.getElementsByTagName('p')[i].style.display = 'none';
    }
}
function closeImg4() {
        block4.src = "./assets/img/sizes-4.png";
    for(let i=0; i<parent4.getElementsByTagName('p').length; i++) {
        parent4.getElementsByTagName('p')[i].style.display = 'block';
    }
    }
};

export default blokByImg