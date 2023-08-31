document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    // Send login data to the server for verification
    // Assuming you have a server-side endpoint to handle login
    // Once authenticated, redirect to the profile page
    window.location.href = '/profile.html';
});

// Determine and display dynamic greeting based on time
const greetingElement = document.getElementById('greeting');
const currentTime = new Date().getHours();
let greeting;
if (currentTime < 12) {
    greeting = 'Good morning';
} else if (currentTime < 18) {
    greeting = 'Good afternoon';
} else {
    greeting = 'Good evening';
}
greetingElement.textContent = `${greeting}, User!`;
