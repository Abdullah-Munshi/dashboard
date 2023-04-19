document.addEventListener("DOMContentLoaded", function () {

  // Script for Sidebar hide show under 1200px
  if (document.getElementById("menu_bar") !== null) {
    const menuBar = document.getElementById("menu_bar");
    const sideBar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    menuBar.addEventListener("click", function (e) {
      e.preventDefault();
      sideBar.classList.add("show");
      overlay.classList.add("show");
    });

    overlay.addEventListener("click", function (e) {
      e.preventDefault();
      sideBar.classList.remove("show");
      overlay.classList.remove("show");
    });
  }

});
