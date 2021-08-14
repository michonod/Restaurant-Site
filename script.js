const toggleBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-links");
const navContainer = document.querySelector(".nav-container");
const sectionAnswers = document.querySelector(".questions");

const questionsAndAnswers = [
  {
    question: "Where you can find us?",
    answer:
      "You can find us in the Demir Hisar Minicipality in the village Babino which is about 16km far away from the town",
  },
  {
    question: "Do you have gluten free dishes?",
    answer: "Yes we have!",
  },
  {
    question: "Where do these vegetables come from?",
    answer: "They come from 100% natural sources",
  },
  {
    question: "What type of meal do you prepare?",
    answer: "We prepare all type of meals and some Vegan and Vegetarian Meals",
  },
];

for (let i = 0; i < navLinks.length; i++) {
  toggleBtn.addEventListener("click", () => {
    navLinks[i].classList.toggle("active");
  });
}
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    navLinks.forEach((nav) => {
      nav.classList.toggle("active");
      navContainer.classList.toggle("nav-container-nav");
    });
  });
}

toggleBtn.addEventListener("click", () => {
  navContainer.classList.toggle("nav-container-nav");
});

for (let i = 0; i < questionsAndAnswers.length; i++) {
  const questionElement = `
    <div class="question-box">
    <h3 class="question">${questionsAndAnswers[i].question}</h3>
    <hr class="question-hr">
<i class="fas fa-arrow-circle-down"></i>
    <p class="answer">${questionsAndAnswers[i].answer}</p>
    </div>
    `;
  const newEl = document.createElement("div");
  newEl.innerHTML = questionElement;
  sectionAnswers.append(newEl);
}
