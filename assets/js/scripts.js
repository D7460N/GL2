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


// Observe and add data-count to visible LIs.
function updateListItemCounts() {
  // Targeting the specific structure: main > #tab01 > panel-list > ul > li
  const listItems = document.querySelectorAll('main > #tab01 > panel-list > ul > li');
  let visibleCount = 0;

  listItems.forEach((item) => {
    if (getComputedStyle(item).display !== 'none') {
      visibleCount++;
      item.setAttribute('data-count', visibleCount);
    }
  });
}

const observer = new MutationObserver((mutations) => {
  // Since mutations could include changes to the list or its items,
  // call updateListItemCounts to ensure counts are accurate
  updateListItemCounts();
});

// Target the parent element that will contain the mutations
const targetNode = document.querySelector('main > #tab01 > panel-list > ul');

if (targetNode) {
  // Start observing the target node for configured mutations
  observer.observe(targetNode, {
    attributes: true, // Observe attribute changes that could affect visibility
    childList: true, // Observe when children are added or removed
    subtree: true, // Observe all descendants
    attributeFilter: ['style'] // Only monitor style changes for performance
  });

  // Initial update
  updateListItemCounts();
} else {
  console.error("The specific HTML structure was not found.");
}



// Ftch data
