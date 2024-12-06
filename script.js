function updateClock() {
    const clock = document.getElementById("clock");
    const greeting = document.getElementById("greeting");

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format time as HH:MM:SS
    const timeString = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    clock.textContent = timeString;

    // Update theme and greeting based on the time
    if (hours >= 6 && hours < 18) {
        document.body.className = "day-theme";
        greeting.textContent = "Good Morning!";
        if (hours >= 12) greeting.textContent = "Good Afternoon!";
    } else {
        document.body.className = "night-theme";
        greeting.textContent = "Good Evening!";
    }
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock on page load
updateClock();
