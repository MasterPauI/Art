function accordion (header, block) {

    let accHeader = document.querySelectorAll(header);
    let accBlock = document.querySelectorAll(block);

    for (let i = 0; i < accHeader.length; i++) {
        accHeader[i].onclick = function () {
            let setClasses = !this.classList.contains ('active');
            setClass (accHeader, 'active', 'remove');
            setClass (accBlock, 'show', 'remove');

            if (setClasses) {
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("show");
            }
        }
    }

    function setClass (els, className, fnName) {
        for (let i = 0; i < els.length; i++) {
            els[i].classList[fnName](className);
        }
    }

}

export default accordion