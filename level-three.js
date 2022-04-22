/*
 * DOTS: Level Three
 *
 */
document.body.style.backgroundColor = "#0072B5";
let dots = document.getElementsByClassName("js-dot")


let dotsSize = dots.length

for (let i = 0; i < dotsSize; i++){
  let dot = dots[i]
  dot.dataset["score"] = 0
  dot.addEventListener("click", increaseScore)
  console.log(dot.dataset["score"]);
}

function increaseScore(ev) {
  let dot = ev.target;
  dot.dataset["score"] = Number(dot.dataset["score"]) + Number(dot.dataset["increment"]);
  console.log("my score: " + dot.dataset["score"]);
  if (dot.dataset["score"] >= 100) {
    location.assign("index.html")
    alert('You won! Now Start Over')
  }
}