/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomgen(array) {
  return Math.floor(Math.random() * array.length);
}

window.onload = function() {
  let who = ["The Dog ", "My Grandma ", "His Turtle ", "My Bird "];
  let action = ["ate ", "peed ", " crushed ", "broke "];
  let what = ["my homework ", "the keys ", "the car "];
  let when = [
    "before class",
    "right on time",
    "when i finished",
    "during my lunch",
    "while i was praying"
  ];

  document.querySelector("#excuse").innerHTML =
    who[randomgen(who)] +
    action[randomgen(action)] +
    what[randomgen(what)] +
    when[randomgen(when)];
};
