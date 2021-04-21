const play = document.querySelector(".option_play");
const pause = document.querySelector(".option_pause");
const video = document.getElementById("myVideo");

play.addEventListener("click", () => {
  pause.classList.remove("active");
  play.classList.add("active");
  video.play();
});
pause.addEventListener("click", () => {
  play.classList.remove("active");
  pause.classList.add("active");
  video.pause();
});
