// Helper function
let domReady = (cb) => {
  document.readyState === 'interactive' || document.readyState === 'complete'
    ? cb()
    : document.addEventListener('DOMContentLoaded', cb);
};

domReady(() => {
  // Display body when DOM is loaded
  document.body.style.opacity = '1.0';
  loadData('assets/data/data.json').then(data => {
    if (data) {
      renderItems(data);
      // Add functionality here if needed immediately after rendering
    }
  });
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
  const listItems = document.querySelectorAll('main > #tab01 > panel-list > ul > li');
  let visibleCount = 0;

  listItems.forEach((item) => {
    if (getComputedStyle(item).display !== 'none') {
      visibleCount++;
      item.setAttribute('data-count', visibleCount);
    }
  });
}

const observer = new MutationObserver(() => {
  updateListItemCounts();
});

// Target the parent element that will contain the mutations
const targetNode = document.querySelector('main > #tab01 > panel-list > ul');

if (targetNode) {
  observer.observe(targetNode, {
    attributes: true,
    childList: true,
    subtree: true,
    attributeFilter: ['style']
  });
  updateListItemCounts(); // Initial update
} else {
  console.error("The specific HTML structure was not found.");
}

// Fetch data on page load
const dataUrl = 'assets/data/data.json';
let globalData = []; // Store fetched data globally for easy access

async function loadData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    globalData = await response.json(); // Assign fetched data to globalData
    return globalData;
  } catch (error) {
    console.error('Could not load JSON:', error);
  }
}

// Function to dynamically create HTML for each item
function createItemHtml(item, index) {
  // Include the index in the data-count attribute for later retrieval
  return `
    <li data-count="${index}">
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
  if (container) {
    const html = items.map((item, index) => createItemHtml(item, index)).join('');
    container.innerHTML = html;
  } else {
    console.error('Container not found');
  }
}




document.addEventListener('click', function(e) {
  if (e.target.closest('li[data-count]')) {
    const li = e.target.closest('li[data-count]');
    const dataIndex = parseInt(li.getAttribute('data-count'), 10) - 1; // Adjusting for zero-based index
    const detailsContainer = document.querySelector('aside panel-list');
    const currentItemData = globalData[dataIndex];

    // If detailsContainer already contains content for this item, clear it. Otherwise, display new content.
    // This logic assumes there's a way to identify that the current content belongs to the clicked item,
    // which might involve checking a data attribute or other identifiers.
    // For simplicity, this example will just toggle based on content presence.
    if (detailsContainer.getAttribute('data-current-index') == dataIndex) {
      detailsContainer.innerHTML = ''; // Clear content
      detailsContainer.removeAttribute('data-current-index'); // Remove the index attribute
    } else {
      displayItemDetailsInAside(currentItemData);
      detailsContainer.setAttribute('data-current-index', dataIndex); // Mark the currently displayed item
    }
  }
});


function displayItemDetailsInAside(itemData) {
  const detailsContainer = document.querySelector('aside panel-list');
  const detailsHtml = `
    <img src="${itemData['item-image']}" alt="Item Image">
    <p>Search ID: ${itemData['search-id']}</p>
    <p>Start Date: ${itemData['start-date']}</p>
    <p>Stop Date: ${itemData['stop-date']}</p>
    <p>Search Number: ${itemData['search-number']}</p>
    <p>Facets Changed: ${itemData['facets-changed']}</p>
    <p>Results Total: ${itemData['results-total']}</p>
    <p>Description: ${itemData['description']}</p>
  `;
  detailsContainer.innerHTML = detailsHtml;
}
