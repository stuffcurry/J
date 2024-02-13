document.addEventListener('DOMContentLoaded', function() {
    const sentences = document.querySelectorAll('.sentence');
    let delay = 500; // Initial delay before the first sentence appears

    sentences.forEach((sentence, index) => {
        setTimeout(() => {
            sentence.style.opacity = 1;
            sentence.style.transition = 'opacity 2s';
        }, delay * (index + 1));
    });

    const yesButton = document.getElementById('yesButton');
    yesButton.addEventListener('click', function() {
        // Replace or accompany the alert with heart animations
        for (let i = 0; i < 100; i++) { // Create 100 hearts
            createHeart();
        }
    });
});

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️'; // Using emoji, you can replace it with an image or SVG
  document.body.appendChild(heart);

  // Randomize heart position
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = Math.random() * 100 + 'vh';
  // Randomize heart size
  heart.style.fontSize = Math.random() * 24 + 10 + 'px';

  // Animate heart
  let plusMinus = Math.random() < 0.5 ? -1 : 1;
  heart.animate([
    { transform: 'translateY(0px)' },
    { transform: `translateY(${plusMinus * 200}px) translateX(${plusMinus * 100}px)` }
  ], {
    duration: 20000, // Random duration between 3 and 6 seconds
    easing: 'ease-out',
    fill: 'forwards'
  });

  // Remove heart after animation to clean up the DOM
  setTimeout(() => {
    heart.remove();
  }, 20000); // Adjust time according to longest possible animation duration
}
