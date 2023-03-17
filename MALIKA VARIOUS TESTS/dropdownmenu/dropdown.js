function createDropdown(button, list) {
    // Hide the dropdown by default
    list.classList.add('dropdown-menu');
    list.classList.add('menu-hidden');
  
    // Show/hide the dropdown on click
    button.addEventListener('click', function() {
      list.classList.toggle('menu-hidden');
      list.classList.toggle('visible');
    });
  
    // Show/hide the dropdown on hover
    button.addEventListener('mouseenter', function() {
      list.classList.remove('menu-hidden');
      list.classList.add('visible');
    });
  
    button.addEventListener('mouseleave', function() {
      list.classList.add('menu-hidden');
      list.classList.remove('visible');
    });
  }
  
  // Create the dropdowns
  const dropdownButtons = document.querySelectorAll('.dropdown-button');
  dropdownButtons.forEach(function(button) {
    const target = button.dataset.target;
    const list = document.getElementById(target);
    createDropdown(button, list);
  });
  