function scrollNavbar() {
  let lastScrollTop = 0;
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    if (window.innerWidth >= 800) {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Scroll down
        navbar.classList.add("hidden");
      } else {
        // Scroll up
        navbar.classList.remove("hidden");
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling)
    }
  });
}

function toggleModeSwitch() {
  document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");
    const modeToggle = document.getElementById("mode-toggle");
    const body = document.body;

    burger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
    modeToggle.addEventListener("click", () => {
      if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        modeToggle.textContent = "🌙";
      } else {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        modeToggle.textContent = "☀️";
      }
    });
  });
}

scrollNavbar();
toggleModeSwitch();
