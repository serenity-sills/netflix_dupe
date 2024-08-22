const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
    // Debugging
    console.log('Tab clicked:', this.id);

    // Remove all show and border classes
    removeBorder();
    removeShow();

    // Add border to current tab item
    this.classList.add('tab-border');

    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);

    // Debugging
    if (tabContentItem) {
        console.log('Showing content:', tabContentItem.id);
        // Add show class
        tabContentItem.classList.add('show');
    } else {
        console.log('Content not found for:', this.id);
    }
}

// Remove bottom borders from all tab items
function removeBorder() {
    tabItems.forEach(item => {
        item.classList.remove('tab-border');
    });
}

// Remove show class from all content items
function removeShow() {
    tabContentItems.forEach(item => {
        item.classList.remove('show');
    });
}

// Listen for tab item click
tabItems.forEach(item => {
    item.addEventListener('click', selectItem);
});
