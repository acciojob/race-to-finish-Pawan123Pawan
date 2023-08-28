window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
// Array to store the promises
const promises = [];

// Function to generate a random delay between 1 and 5 seconds
function getRandomDelay() {
    return Math.floor(Math.random() * 5000) + 1000; // Random delay between 1 and 5 seconds in milliseconds
}

// Create an array of five promises
for (let i = 0; i < 5; i++) {
    promises.push(new Promise((resolve, reject) => {
        const delay = getRandomDelay();
        setTimeout(() => {
            resolve(`Promise ${i + 1} resolved after ${delay / 1000} seconds`);
        }, delay);
    }));
}

// Use Promise.any() to wait for the first promise to resolve
Promise.any(promises)
    .then((result) => {
        // Print the result to the output div
        document.getElementById('output').textContent = result;
    })
    .catch((error) => {
        console.error(error);
    });
