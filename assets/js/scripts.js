// Helper function to ensure script runs after DOM is fully loaded
let domReady = (cb) => {
  document.readyState === 'interactive' || document.readyState === 'complete'
    ? cb()
    : document.addEventListener('DOMContentLoaded', cb);
};

// Declare globalData at the top of the script to ensure it's accessible everywhere after
let globalData = [];

domReady(() => {
  // Display body when DOM is loaded
  document.body.style.opacity = '1.0';

  // Load data from JSON and render items in the UI
  loadData('assets/data/data.json').then(data => {
    if (data) {
      renderItems(data);
      // Now that the data is rendered, attach the onclick handler to the clear button
      attachClearButtonEvent();
    }
  });

  // Set up the MutationObserver to listen for changes and update list item count
  setupMutationObserver();

  // Set up global click listener for list items
  setupGlobalClickListener();
});

// Function to attach click event to clear button
function attachClearButtonEvent() {
  // Element that clears
  let clearButton = document.querySelector("main #tab01 section ul li");

  // Element that is cleared
  let clearMe = document.querySelector("aside section");

  // Clear the content of the element when the button is clicked
  if (clearButton && clearMe) {
    clearButton.onclick = function () {
      clearMe.innerHTML = "";
    };
  } else {
    console.error('Either clear button or element to be cleared is not found.');
  }
}

// Function to setup MutationObserver for list item counts
function setupMutationObserver() {
  const observer = new MutationObserver(updateListItemCounts);
  // Target the parent element that will contain the mutations
  const targetNode = document.querySelector('main > #tab01 > section > ul');

  if (targetNode) {
    observer.observe(targetNode, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ['style']
    });
    updateListItemCounts(); // Initial update to ensure counts are correct upon page load
  } else {
    console.error("The specific HTML structure was not found.");
  }
}

// Function to setup global click listener for list items
function setupGlobalClickListener() {
  document.addEventListener('click', function (e) {
    if (e.target.closest('li[data-count]')) {
      const li = e.target.closest('li[data-count]');
      const dataIndex = parseInt(li.getAttribute('data-count'), 10) - 1; // Adjusting for zero-based index
      const detailsContainer = document.querySelector('aside section');
      const currentItemData = globalData[dataIndex];
      displayItemDetails(currentItemData, dataIndex, detailsContainer);
    }
  });
}

// Fetch data from a given URL
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

// HTML for each item
function createItemHtml(item, index) {
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

// Render items to the DOM
function renderItems(items) {
  const container = document.querySelector('main #tab01 section ul');
  if (container) {
    const html = items.map((item, index) => createItemHtml(item, index)).join('');
    container.innerHTML = html;
  } else {
    console.error('Container not found');
  }
}

// Update list item counts
function updateListItemCounts() {
  const listItems = document.querySelectorAll('main > #tab01 > section > ul > li');
  let visibleCount = 0;
  listItems.forEach((item) => {
    if (getComputedStyle(item).display !== 'none') {
      visibleCount++;
      item.setAttribute('data-count', visibleCount);
    }
  });
}

// Display item details in the aside section
function displayItemDetails(itemData, dataIndex, detailsContainer) {
  // If detailsContainer already contains content for this item, clear it. Otherwise, display new content.
  // This logic assumes there's a way to identify that the current content belongs to the clicked item,
  // which might involve checking a data attribute or other identifiers.
  // For simplicity, this example will just toggle based on content presence.
  if (detailsContainer.getAttribute('data-current-index') == dataIndex) {
    detailsContainer.innerHTML = ''; // Clear content
    detailsContainer.removeAttribute('data-current-index'); // Remove the index attribute
  } else {
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
    detailsContainer.setAttribute('data-current-index', dataIndex); // Mark the currently displayed item
  }
}
