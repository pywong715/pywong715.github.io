function closeMenu() {
    // Close the menu by setting its display property to 'none'
    document.querySelector('.menu-wrapper').style.display = 'none';
}

// Main slideshow
let slide = document.querySelectorAll('.slide'); // Select all slide elements
var current = 0; // Initialize the current slide index as 0

function cls() {
    // Hide all slides by setting their display property to 'none'
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }
}

function next() {
    // Move to the next slide
    cls(); // Hide the current slide
    if (current === slide.length - 1) current = -1; // Reset current index if at the end
    current++; // Increment current index

    // Show the next slide and set its opacity to 0.4
    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;

    // Gradually increase the opacity of the next slide to 1 for a fade-in effect
    var x = 0.4;
    var intX = setInterval(function () {
        x += 0.1;
        slide[current].style.opacity = x;
        if (x >= 1) {
            clearInterval(intX);
            x = 0.4;
        }
    }, 100);
}

function prev() {
    // Move to the previous slide
    cls(); // Hide the current slide
    if (current === 0) current = slide.length; // Reset current index if at the beginning
    current--; // Decrement current index

    // Show the previous slide and set its opacity to 0.4
    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;

    // Gradually increase the opacity of the previous slide to 1 for a fade-in effect
    var x = 0.4;
    var intX = setInterval(function () {
        x += 0.1;
        slide[current].style.opacity = x;
        if (x >= 1) {
            clearInterval(intX);
            x = 0.4;
        }
    }, 100);
}

function start() {
    // Initialize the slideshow
    cls(); // Hide all slides
    slide[current].style.display = 'block'; // Show the current slide
}

start(); // Call the start function to initialize the slideshow when the page loads

