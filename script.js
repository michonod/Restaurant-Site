const toggleBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-links");
const navContainer = document.querySelector(".nav-container");

for (let i = 0; i < navLinks.length; i++) {
  toggleBtn.addEventListener("click", () => {
    navLinks[i].classList.toggle("active");
  });
}

toggleBtn.addEventListener("click", () => {
  navContainer.classList.toggle("nav-container-nav");
});
