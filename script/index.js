const btnSwitch = document.querySelectorAll("#content-switcher");
const testinomialOne = document.querySelector(".testinomial-one");
const testinomialSecond = document.querySelector(".testinomial-second");

function fn(event) {
  if (event.target.matches("img")) {
    testinomialOne.classList.toggle("display-none");
    testinomialSecond.classList.toggle("display-none");
  }
  if (event.keyCode === 37 || event.keyCode === 39) {
    testinomialOne.classList.toggle("display-none");
    testinomialSecond.classList.toggle("display-none");
  }
}

btnSwitch.forEach((btn) => {
  btn.addEventListener("click", fn);
});

window.addEventListener("keydown", fn);
