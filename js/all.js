// Make click sound on click

let soundElement = document.createElement("audio");
soundElement.setAttribute("src", "sounds/click_sound.mp3");
clickSoundPlay();

function clickSoundMute() {
  document.onclick = () => soundElement.muted;
}

function clickSoundPlay() {
  document.onclick = () => soundElement.play();
}

// // Start setting box
// let settingBox = document.getElementsByClassName("setting_box")[0];
// let settingBoxBtn = document.querySelector(".setting_box .open");
// settingBoxBtn.onclick = () => settingBox.classList.toggle("open");

// Start ToTOp btn
let toTop = document.querySelector(".to_top");
toTop.onclick = (_) => window.scrollTo(0, 0);

// Start Header
let header = document.querySelector("header");

// Start set year text in copy_right in footer
let yearFooter = document.getElementsByClassName("year")[0];
yearFooter.innerHTML = new Date().getFullYear();

window.addEventListener("scroll", () => {
  // Edit Header Background

  if (window.scrollY >= 50) {

    header.style.cssText = "background-color: white; border-bottom: 1px solid black;";
  } else {
    header.style.cssText = "background-color: inherit ; border-bottom: none;color: inherit";
  }
});
