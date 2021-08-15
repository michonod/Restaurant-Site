const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const numberOfGuest = document.querySelector(".numberOfGuest");
const reservationType = document.querySelector(".reservation-type");
const date = document.querySelector(".date");
const time = document.querySelector(".time");
const specialRequest = document.querySelector(".specialRequest");
const submit = document.querySelector(".submit-btn");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  alert(
    `You book a table for ${numberOfGuest.value} persons, on ${date.value} at ${time.value}. If there are changes we will contact you on ${phone.value}. Thank you for the reservation :)`
  );

  firstName.value = "";
  lastName.value = "";
  email.value = "";
  phone.value;
  numberOfGuest.value = "";
  reservationType.value = "";
  date.value = "";
  time.value = "";
  specialRequest.value = "";
});
