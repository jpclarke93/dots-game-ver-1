/*
 * DOTS: Level Two
 *
 */
document.body.style.backgroundColor = 'red';

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
  dot.dataset["score"] = Number(dot.dataset["score"]) + 10;
  console.log("my score: " + dot.dataset["score"]);
  if (dot.dataset["score"] >= 100) {
    location.assign("level-three.html")
    alert('You won! On to level 3')
  }
}