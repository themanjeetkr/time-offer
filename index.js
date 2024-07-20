// Function to create and display the banner
function showLimitedTimeOffer(durationInSeconds) {
    // Calculate end time
    const endTime = Date.now() + durationInSeconds * 1000;
  
    // Create banner elements
    const banner = document.createElement('div');
    banner.id = 'offer-banner';
    banner.innerHTML = `
      <p>⏳ Hurry! Limited Time Offer ends in:</p>
      <div id="countdown"></div>
    `;
    
    // Append banner to the document
    document.body.appendChild(banner);
  
    // Function to update countdown
    function updateCountdown() {
      const currentTime = Date.now();
      const timeLeft = Math.max(0, endTime - currentTime);
  
      const seconds = Math.floor((timeLeft / 1000) % 60);
      const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  
      const countdownElement = document.getElementById('countdown');
      countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
      if (timeLeft === 0) {
        clearInterval(interval);
        document.body.removeChild(banner); // Remove banner when timer ends (optional)
        // You can add code here to reset or reload the banner
      }
    }
  
    // Initial call to update countdown
    updateCountdown();
  
    // Update countdown every second
    const interval = setInterval(updateCountdown, 1000);
  }
  
  // Example usage: showLimitedTimeOffer(durationInSeconds);
  // Replace durationInSeconds with your desired duration for the offer
  showLimitedTimeOffer(3600); // Example: Offer lasts for 1 hour (3600 seconds)
  
