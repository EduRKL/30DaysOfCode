function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  const key = document.querySelector(`div[data-key="${e.key}"]`);
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName != "transform") return;
  e.target.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
Array.from(keys).forEach((key) =>
  key.addEventListener("transitionend", removeTransition)
);

window.addEventListener("keydown", playSound);
