const btn = document.getElementById('surpriseBtn');
const surprise = document.getElementById('surpriseMsg');

// Load the roar sound (make sure the file is in the same folder)
const roarSound = new Audio('tiger-roar-loudly-193229.mp3'); // Replace this with your MP3 file path
roarSound.volume = 1.0;

btn.addEventListener('click', () => {
  if (surprise.classList.contains('show')) {
    // Hide message and stop the roar
    surprise.classList.remove('show');
    btn.textContent = 'Dee gonna 🐯';
    roarSound.pause();
    roarSound.currentTime = 0; // rewind
  } else {
    // Show message and play roar ella
    surprise.classList.add('show');
    btn.textContent = 'like your 🕶️🙈';
    roarSound.play();
    createTigerParticles(); // Add tiger emojis on roar
  }
});

// Function to create floating tiger emojis
function createTigerParticles() {
  const maxParticles = 40;
  for (let i = 0; i < maxParticles; i++) {
    let p = document.createElement('div');
    p.classList.add('particle');
    p.style.fontSize = Math.floor(Math.random() * 20 + 20) + 'px'; // Random size
    p.style.position = 'absolute';
    p.style.top = Math.random() * 100 + 'vh';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.animationDuration = (Math.random() * 15 + 10) + 's';
    p.style.animationName = 'floatUp';
    p.style.opacity = Math.random() * 0.5 + 0.4;
    p.textContent = '🐯'; // Tiger emoji
    document.body.appendChild(p);
  }
}

// Optional CSS for floating effect
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`@keyframes floatUp {
  0% { transform: translateY(0); }
  100% { transform: translateY(-120vh); }
}`, styleSheet.cssRules.length);
