async function startCountdown() {
    const countdownElement = document.getElementById("countdown");
    let count = 10;

    while (count >= 0) {
        countdownElement.textContent = count;
        await sleep(10); 
        count -= 0.01;  
        count = count.toFixed(2)
    }

    countdownElement.textContent = "Færdig!";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

startCountdown();