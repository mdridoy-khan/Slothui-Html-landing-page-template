  // scroll to top button
  const scrollBtn = document.getElementById("scrollBtn");
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
