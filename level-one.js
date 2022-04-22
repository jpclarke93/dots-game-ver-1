/* DOTS: Level One */

let score = document.getElementsByClassName("js-score")[0]

let updateScore = document.getElementsByClassName("js-score")[0]

document.body.style.backgroundColor = 'indigo';


//capture the html
let dot = document.getElementsByClassName("js-dot")[0]


//setting score to 0
dot.dataset["score"] = 0

//click event
dot.addEventListener("click", function () {
  
  dot.dataset["score"] = Number(dot.dataset["score"]) + 10
  updateScore.innerText = Number(updateScore.innerText) + 10;

  updateScore.innerText = updateScore.innerText.padStart(4, 0)
  console.log(dot.dataset["score"]);
  if (updateScore.innerText >= 100){
    location.assign("level-two.html")
    alert('You won! On to level 2')
}
})

