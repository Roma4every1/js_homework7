const buttonThrProperty = document.querySelector(".button_2");
buttonThrProperty.onclick = () => {
  alert("Clicked through property");
};
const buttonThrEvent = document.querySelector("button.button_3");
buttonThrEvent.addEventListener("click", function () {
  alert("Clicked through addEventListener");
});

let counter = 0;
function handleClick() {
  alert(counter);
  counter++;

  if (counter === 5) {
    button.removeEventListener("click", handleClick);
  }
}

const button = document.querySelector(".button_4");
button.addEventListener("click", handleClick);
