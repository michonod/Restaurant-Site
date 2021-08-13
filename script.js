const toggleBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-links");

for (let i = 0; i < navLinks.length; i++) {
  toggleBtn.addEventListener("click", () => {
    navLinks[i].classList.toggle("active");
  });
}
