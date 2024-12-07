// JavaScript File: script.js
const container = document.getElementById('container');
const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', () => {
    container.classList.toggle('right-panel-active');
    const overlayText = document.getElementById('overlay-text');
    const overlayDescription = document.getElementById('overlay-description');

    if (container.classList.contains('right-panel-active')) {
        overlayText.textContent = 'Welcome Back!';
        overlayDescription.textContent = 'To keep connected with us please login with your personal info';
        toggleButton.textContent = 'Sign In';
    } else {
        overlayText.textContent = 'Hello, Friend!';
        overlayDescription.textContent = 'Enter your personal details and start your journey with us';
        toggleButton.textContent = 'Sign Up';
    }
});
