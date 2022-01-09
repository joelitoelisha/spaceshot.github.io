console.clear();

let a = 4;

console.log(a);

let nameButton = document.getElementById("press-me");

nameButton.addEventListener("click", sayhi);

function sayhi() {
  let userNameElement = document.getElementById("user-name");
  let myGreetingSpot = (document.getElementById("greeting").innerText =
    "Hello, " + userNameElement.value);
}
