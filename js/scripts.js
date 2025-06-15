 function confettiAndGo(event, url) {
    event.preventDefault(); // stop link for now

    // Generate confetti
    for (let i = 0; i < 30; i++) {
      let span = document.createElement("span");
      span.className = "confetti";
      span.textContent = "🎊";
      span.style.left = Math.random() * window.innerWidth + "px";
      span.style.top = "-20px";
      document.body.appendChild(span);

      // Remove after animation
      setTimeout(() => span.remove(), 1000);
        }

     // Go to next page after 1 second
    setTimeout(() => {
      window.location.href = url;
    }, 1000);
    
    }