const fetchBtn = document.querySelector(".fetch");
const divEl = document.querySelector(".meal-box");
const reload = document.querySelector(".reload");

const fetchData = async () => {
  const foodObj = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const data = await foodObj.json();

  let mealsEl = `
 <div class="meal-box-container">
        <img src="${data.meals[0].strMealThumb}" alt="" />
        <h3 class="meal-box-name">${data.meals[0].strMeal}</h3>
        <hr class="hr-line width-line" />
        <p class="meal-box-text">
          ${data.meals[0].strInstructions}
        </p>
      </div>
`;

  const newEl = document.createElement("div");
  divEl.append(newEl);
  newEl.innerHTML = mealsEl;
  //   const newDiv = document.createElement("div");
  //   newDiv.innerHTML = mealsEl;
  //   newDiv.append(divEl);
};
let clickFunction = () => {
  fetchBtn.removeEventListener("click", clickFunction, false);
};

fetchBtn.addEventListener("click", fetchData, { once: true });

reload.addEventListener("click", () => {
  window.location.reload();
  fetchData();
});
