const reassuranceButton = document.querySelector(".welcome__button");
const reassuranceMessage = document.querySelector("#reassurance");

reassuranceButton.addEventListener("click", () => {
  reassuranceMessage.hidden = false;
  reassuranceMessage.classList.remove("is-visible");
  requestAnimationFrame(() => reassuranceMessage.classList.add("is-visible"));
  reassuranceButton.setAttribute("aria-expanded", "true");
});
