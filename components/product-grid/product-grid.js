/* Product Grid Functions */
var clearFiltersButton = document.querySelector('#showingNumberProducts__clear');
var numberOfProductsInGridAriaLiveRegion = document.querySelector('#showingNumberProducts__description');
var numberOfProductsHeading = document.querySelector('#showingNumberProducts__heading');
var numberOfFiltersAppliedAriaLiveRegion = document.querySelector('#showingNumberFilters__description');
var filterInputs = document.querySelectorAll('.productGrid__filter');
var productGrid = document.querySelector('#product-grid');

// Add click event to clear filters button
clearFiltersButton.addEventListener('click', function() {
  setTimeout(updateNumberOfAppliedFiltersAndProductsShowing, 1);
});

filterInputs.forEach(function(filterInput) {
  filterInput.addEventListener('change', updateNumberOfAppliedFiltersAndProductsShowing);
});

function updateNumberOfAppliedFiltersAndProductsShowing() {
  updateNumberOfAppliedFilters();
  updateNumberOfProductsShowing();
}

function updateNumberOfAppliedFilters() {
  var numberOfAppliedFilters = 0;
  filterInputs.forEach(function(filterInput) {
    if (filterInput.checked) {
      numberOfAppliedFilters++;
    }
  });
  // if the number of filters is 1 then we need to use singlular filter
  var filterOrFilters = numberOfAppliedFilters === 1 ? 'filter' : 'filters';

  showingNumberFilters__description.innerHTML = numberOfAppliedFilters + ' ' + filterOrFilters + ' applied';
  if (numberOfAppliedFilters > 0) {
    clearFiltersButton.setAttribute('aria-label', 'Clear ' + numberOfAppliedFilters + ' applied product ' + filterOrFilters + '.');
  } else {
    clearFiltersButton.setAttribute('aria-label', 'Clear product filters. There are no filters currently applied.');
  }
}

function updateNumberOfProductsShowing() {
  // for the demo we will generate a random number of products available between 0 and 100
  var randomNumberOfProducts = Math.floor(Math.random() * Math.floor(100));
  numberOfProductsInGridAriaLiveRegion.innerHTML = 'Showing ' + randomNumberOfProducts + ' products';
}

var pagination = document.querySelectorAll('[data-go-to-page]');

pagination.forEach((paginationBtn) => {
  paginationBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    location.hash = "!/" + paginationBtn.dataset.goToPage;
    // refresh product list...
    productGrid.style.opacity = 0.1
    setTimeout(function(){
      productGrid.style.opacity = 1

      // set focus state
      numberOfProductsHeading.focus();
    }, 500);
  });
});