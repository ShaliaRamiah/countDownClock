// Define a function to start the countdown
function startCountdown() {
    // Set the target date and time for the countdown
    var countDownDate = new Date("Dec 13, 2023 00:00:00").getTime();

    // Set an interval to update the countdown every 1 second
    var countdownInterval = setInterval(function() {
        // Get the current date and time
        var now = new Date().getTime();

        // Calculate the remaining time in milliseconds
        var timeRemaining = countDownDate - now;

        // Calculate days, hours, minutes and seconds
        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Update the corresponding elements in the HTML with the countdown values
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("mins").innerHTML = minutes;
        document.getElementById("secs").innerHTML = seconds;

        // Check if the countdown has expired
        if (timeRemaining < 0) {
            // If countdown is over, clear the interval and display an expiration message
            clearInterval(countdownInterval);
            document.getElementById("tiles").innerHTML = "Countdown expired";
        }
    }, 1000); // Repeat every 1 second (1000 milliseconds)
}
