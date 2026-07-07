const currentYear = new Date().getFullYear();
const kickoffDate = new Date(`August 28, ${currentYear} 19:00:00`).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = kickoffDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

    if (distance < 0) {
        clearInterval(timerInterval);
        document.querySelector(".countdown-panel").innerHTML = "<h2 class='panel-header' style='font-size:2rem; color:#ff1a1a;'>IT'S KICKOFF TIME! GO EAGLES!</h2>";
    }
}

updateCountdown();
const timerInterval = setInterval(updateCountdown, 1000);

// Native Full Screen Logic
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

