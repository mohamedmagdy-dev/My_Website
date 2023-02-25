// Start ToTOp btn
let toTop = document.querySelector(".to_top");

toTop.onclick = _=> window.scrollTo(0,0)

// Start Header 
let header = document.querySelector('header');

// Start Animation For Landing Section
let landingP = document.querySelector(".landing .container .landing_content p");
let landingH1 = document.querySelector(".landing .container .landing_content h1");
let landingSpan = document.querySelector(".landing .container .landing_content > span");
let landingImg = document.querySelector(".landing .container .landing_img img");

function landingAnimation(elements) {
  elements.forEach((el) => {
    el.style.cssText = "transform: translateX(0%) rotate(0deg)";
  });
}

setTimeout(() => {
  landingAnimation([landingH1, landingP, landingSpan]);
  landingImg.style.cssText = "transform: scale(1);";
}, 500);


// Start Animation Form cards_info
let cardsInfo = document.querySelectorAll(".cards_info .card");

setTimeout(() => {
  cardsInfo.forEach((el) => {
    el.style.cssText = "  transform: rotate3d(1, 1, 0, 30deg); scale(1)";
  });
}, 2000);

// Start Animation For About Section 
let aboutSection = document.querySelector(".about");
let aboutSectionTitle = document.querySelector(".about .container .section_title");
let aboutTitle = document.querySelector(".about .container .about_info h2");
let aboutContent = document.querySelector(".about .container .about_info p");
let aboutLink = document.querySelector(".about .container .about_info a");

// Start Animation for selected work (show case)
let showCase = document.querySelector(".show_case")
let selectedWorkItems = document.querySelectorAll(".show_case .container .showcase_container .body > div")

window.onscroll = _ => {
  if (window.scrollY >= ((aboutSection.offsetTop) - 650)) {
    // Animation for about section 
    setTimeout(() => aboutSectionTitle.style.cssText = "transform: translateX(0%);",800);
    setTimeout(() => aboutTitle.style.cssText = "transform: translateX(0%);",1400);
    setTimeout(() => aboutContent.style.cssText = "transform: translateX(0%);",2000);
    setTimeout(() => aboutLink.style.cssText = "transform: translateX(0%);",2600);
  }

  if (window.scrollY >= showCase.offsetTop - 200 )  {
  // Start Animation for selected work (show case)
    setTimeout(()=>{
      selectedWorkItems[0].style.cssText = 'transform: translateX(0%)'
    },2000)

    setTimeout(()=>{
      selectedWorkItems[1].style.cssText = 'transform: translateX(0%)'
    },1000)

    setTimeout(()=>{
      selectedWorkItems[2].style.cssText = 'transform: translateX(0%)'
    },1000)

    setTimeout(()=>{
      selectedWorkItems[3].style.cssText = 'transform: translateX(0%)'
    },2000)
  }

  // Start Show Scroll ToTop btn
  window.scrollY >= aboutSection.offsetTop 
  ? toTop.style.cssText = " opacity: 1; visibility: visible " 
  : toTop.style.cssText = "opacity: 0;  visibility: hidden"

  // Edit Header Background 
    window.scrollY >= 100 ? header.style.cssText = "background-color: white; border-bottom: 1px solid black;" 
                          : header.style.cssText = "background-color: inherit ; border-bottom: none;";
                  
}
