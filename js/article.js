let copyCodeBtn = document.querySelectorAll(".article .container pre .tool ");


copyCodeBtn.forEach((el=> {
  el.onclick =() => {
    let code = el.parentElement.querySelector("code");
    navigator.clipboard.writeText(code.innerText);
  }
}))

window.addEventListener("scroll", () => {
  // Start Show Scroll ToTop btn
  window.scrollY >= 300
    ? (toTop.style.cssText = " opacity: 1; visibility: visible ")
    : (toTop.style.cssText = "opacity: 0;  visibility: hidden");
  })

  