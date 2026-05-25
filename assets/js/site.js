document.documentElement.classList.add("js");

(function () {
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const siteMenu = document.querySelector("[data-site-menu]");

  if (!menuToggle || !siteMenu) {
    return;
  }

  function openMenu() {
    siteMenu.classList.add("is-open");
    menuToggle.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    siteMenu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  menuToggle.addEventListener("click", toggleMenu);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  const desktopQuery = window.matchMedia("(min-width: 48rem)");

  function handleViewportChange(event) {
    if (event.matches) {
      closeMenu();
    }
  }

  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener("change", handleViewportChange);
  } else if (desktopQuery.addListener) {
    desktopQuery.addListener(handleViewportChange);
  }
})();
