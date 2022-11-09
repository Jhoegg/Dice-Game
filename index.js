document.querySelector("button").addEventListener("click", refresh);
function refresh() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var imageName1 = "images/dice" + randomNumber1 + ".png";

  document.querySelectorAll("img")[0].setAttribute("src", imageName1);

  var randomNmber2 = Math.floor(Math.random() * 6) + 1;
  var imageName2 = "images/dice" + randomNmber2 + ".png";
  var imageSelector2 = document.querySelectorAll("img")[1];
  imageSelector2.setAttribute("src", imageName2);

  if (imageName1 === imageName2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else if (imageName1 > imageName2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
  } else if (imageName1 < imageName2) {
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
  }
}
