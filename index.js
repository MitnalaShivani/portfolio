window.addEventListener("scroll", () => {
  const fadeElements = document.querySelectorAll(".fade-up");
  fadeElements.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (position < windowHeight - 50) {
      el.classList.add("show");
    }
  });
});
const menuToggle = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", function () {
  navList.classList.toggle("active");
  menuToggle.classList.toggle("open");
});
