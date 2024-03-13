// https://medium.com/@fbnlsr/how-to-get-rid-of-the-flash-of-unstyled-content-d6b79bf5d75f

// Helper function
let domReady = (cb) => {
  document.readyState === 'interactive' || document.readyState === 'complete'
    ? cb()
    : document.addEventListener('DOMContentLoaded', cb);
};

domReady(() => {
  // Display body when DOM is loaded
  document.body.style.opacity = '1.0';
});



// Element that clears
let clearButton = document.querySelector("main panel-list ul li");

// Element that is cleared
let clearMe = document.querySelector("aside panel-list");

// Clear the content of the element when the button is clicked
clearButton.onclick = function() {
  clearMe.innerHTML = "";
};
