const container = document.querySelector("#container");  // Create container variable for the grid

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.style.width = (100 / size) + "%";
        square.style.height = (100 / size) + "%";
        square.style.margin = 0 + "%";
        container.appendChild(square);
    };
}

container.addEventListener("mouseover", (event) => {  // Adds an event listener that paints the square when the cursor is over it
    if (event.target.parentNode === container) {
    event.target.style.backgroundColor = "#D999E3";
    }
});

const newButton = document.querySelector("button");  // Button for new game

// Add an event listener to the button that listens for the click event
newButton.addEventListener('click', function() {
    // Display the prompt when the button is clicked
    while (true) {
        const userInput = prompt('Enter the size of the grid (1-100): ');
        if (userInput < 1 || userInput > 100) {
            window.alert("That's out of range! (0-100) Please try again.");
            continue
        } else {
            container.innerHTML = "";  // Clears all the divs from the container before creating a new grid
            createGrid(userInput);
            return;
        }}
});


createGrid(16) // Default value for the grid
