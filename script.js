// Set the target kickoff date (August 28 at 7:00 PM)
// Note: Adjust the year dynamically to ensure it counts down to the upcoming August 28th
const currentYear = new Date().getFullYear();
const kickoffDate = new Date(`August 28, ${currentYear} 19:00:00`).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = kickoffDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output results to the HTML elements, forcing two digits (e.g., '07' instead of '7')
    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

    // If the countdown is over
    if (distance < 0) {
        clearInterval(timerInterval);
        document.querySelector(".countdown-panel").innerHTML = "<h2 class='panel-header' style='font-size:2rem; color:#ff1a1a;'>IT'S KICKOFF TIME! GO EAGLES!</h2>";
    }
}

// Run immediately on load, then update every 1 second
updateCountdown();
const timerInterval = setInterval(updateCountdown, 1000);

