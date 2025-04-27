  // Get the button
  const scrollBtn = document.getElementById("scrollBtn");

  // When the user scrolls down 100px from the top, show the button
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

// humburger menu
const menuToggle = document.getElementById('mobile_menu_btn');
const closeMenu = document.getElementById('close-menu');
const sideMenu = document.getElementById('side-menu');

menuToggle.addEventListener('click', function() {
  sideMenu.classList.add('active');
});

closeMenu.addEventListener('click', function() {
  sideMenu.classList.remove('active');
});
