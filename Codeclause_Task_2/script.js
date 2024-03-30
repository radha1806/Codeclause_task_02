var timer = 60;
var score = 0;
var hitrn = 0;
var timerint;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function getnewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function makebubble() {
  var clutter = "";

  for (var i = 1; i <= 133; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector(".pbtm").innerHTML = clutter;
}

function stopTimer() {
  clearInterval(timerint);
}

function gameover() {
  stopTimer();
  document.querySelector(".pbtm").classList.add("dis");
  document.querySelector(".gvr").classList.remove("dis");
  document.querySelector("#scr").innerHTML = `<h4>Your Score</h4>${score}`;
}

function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      gameover();
    }
  }, 1000);
}

document.querySelector(".pbtm").addEventListener("click", function (dets) {
  var clickedNum = Number(dets.target.textContent);
  if (clickedNum === hitrn) {
    increaseScore();
    makebubble();
    getnewHit();
  }
});

document.querySelector("#btn").addEventListener("click", () => {
  stopTimer();
  timer = 60;
  document.querySelector("#timerval").textContent = timer;
  score = 0;
  document.querySelector("#scoreval").textContent = score;
  getnewHit();
  document.querySelector(".pbtm").classList.remove("dis");
  document.querySelector(".gvr").classList.add("dis");
  makebubble();
});
// increaseScore();
getnewHit();
runTimer();
makebubble();
