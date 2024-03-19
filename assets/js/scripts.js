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



// Fetch data on page load

// Assuming data.json is located at the root of your site
const dataUrl = 'assets/data/data.json';

// Helper function to load data
async function loadData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Could not load JSON:', error);
  }
}

// Function to dynamically create HTML for each item
function createItemHtml(item) {
  return `
    <li>
      <bulk-actions><input type="checkbox" aria-label="Select for bulk actions"></bulk-actions>
      <search-id>${item['search-id']}</search-id>
      <start-date>${item['start-date']}</start-date>
      <stop-date>${item['stop-date']}</stop-date>
      <search-number>${item['search-number']}</search-number>
      <facets-changed>${item['facets-changed']}</facets-changed>
      <results-total>${item['results-total']}</results-total>
    </li>
  `;
}

// Function to render items to the DOM
function renderItems(items) {
  const container = document.querySelector('main panel-list ul');
  // Ensure the container exists before attempting to insert HTML
  if (container) {
    const html = items.map(createItemHtml).join('');
    container.innerHTML = html;
  } else {
    console.error('Container not found');
  }
}

// Load and display the data when the DOM is fully loaded
domReady(() => {
  loadData(dataUrl).then(data => {
    if (data) {
      renderItems(data);
    }
  });
});
