let inactivityTime = () => {

    let button = document.querySelectorAll (".button");
    let timeoutId;

    function startTimer () {
        // window.setTimeout returns an Id that can be used to start and stop a timer
        timeoutId = setTimeout (doInactive, 4000);

    }
    startTimer();

    function doInactive () {
        // does whatever you need it to actually do - probably signs them out or stops polling the server for info
        document.querySelector (".popup-consultation").style.display = "block";
        document.body.style.overflow = "hidden";
    }

    function stopTimeout () {
        button.forEach (item => {
            item.addEventListener ("click", () => {
                clearTimeout (timeoutId);
            })
        });
    }
    stopTimeout();

};


export default inactivityTime