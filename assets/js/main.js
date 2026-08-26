const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav__list a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });

        const activeLink = document.querySelector(
          `.nav__list a[href="#${entry.target.id}"]`,
        );

        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  },
  {
    threshold: 0.2,
  },
);

sections.forEach((section) => {
  observer.observe(section);
});

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("is-open");
});
