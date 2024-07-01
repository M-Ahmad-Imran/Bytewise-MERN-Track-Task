// --------------------Calculator--------------------
const DiscountCalculator = ()=>{
    const actualPrice = document.getElementById("actualPrice").value;
    document.getElementById("actualPrice").value = "";
    const discount = document.getElementById("discount").value;
    document.getElementById("discount").value = "";
    
    const discountAmount = actualPrice * (discount/100);
    const newPrice = actualPrice - discountAmount;

    if (actualPrice == 0 || discount > 99) {
        document.getElementById("discountAmount").innerHTML = "Enter Valide Value!"
    }else{
        document.getElementById("discountAmount").innerHTML = `${actualPrice} * (${discount}/100) = ${discountAmount}<br>
                                                                Your new Price is ${newPrice} 😍`;
    }
}

// --------------------Stop Watch-------------------------
let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

function formatTime(time) {
    const milliseconds = Math.floor((time % 1000) / 10);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    return (
        (hours < 10 ? '0' : '') + hours + ':' +
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds + ':' +
        (milliseconds < 10 ? '0' : '') + milliseconds
    );
}

function updateDisplay() {
    display.textContent = formatTime(elapsedTime);
}

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime += Date.now() - startTime;
        startStopButton.textContent = 'Start 💥';
    } else {
        startTime = Date.now();
        timer = setInterval(() => {
            const timePassed = Date.now() - startTime;
            display.textContent = formatTime(elapsedTime + timePassed);
        }, 10);
        startStopButton.textContent = 'Stop 🙄';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    startStopButton.textContent = 'Start 💥';
    elapsedTime = 0;
    updateDisplay();
}

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);

// Initialize display
updateDisplay();
