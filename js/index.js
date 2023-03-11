// Start Animation For Landing Section
let landingP = document.querySelector(".landing .container .landing_content p");
let landingH1 = document.querySelector(
  ".landing .container .landing_content h1"
);
let landingSpan = document.querySelector(
  ".landing .container .landing_content > span"
);
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
let aboutSectionTitle = document.querySelector(
  ".about .container .section_title"
);
let aboutTitle = document.querySelector(".about .container .about_info h2");
let aboutContent = document.querySelector(".about .container .about_info p");
let aboutLink = document.querySelector(".about .container .about_info a");

// Start Animation for selected work (show case)
let showCase = document.querySelector(".show_case");
let selectedWorkItems = document.querySelectorAll(
  ".show_case .container .showcase_container .body > div"
);

// Start Animation for our services
let ourServices = document.querySelector(".our_services");
let ourServicesSectionTitle = document.querySelector(
  ".our_services .container .left .section_title"
);
let ourServicesTitle = document.querySelector(
  ".our_services .container .left h2"
);
let ourServicesBtn = document.querySelector(".our_services .container .left a");

// Start Animation for insights
let insights = document.querySelector(".insights");
let insightsCards = document.querySelectorAll(
  ".insights .container .insights_container .body > div"
);

window.addEventListener("scroll", () => {
  // Start Show Scroll ToTop btn
  window.scrollY >= aboutSection.offsetTop
    ? (toTop.style.cssText = " opacity: 1; visibility: visible ")
    : (toTop.style.cssText = "opacity: 0;  visibility: hidden");

  // Animation for about section
  if (window.scrollY >= aboutSection.offsetTop - 650) {
    setTimeout(
      () => (aboutSectionTitle.style.cssText = "transform: translateX(0%);"),
      800
    );
    setTimeout(
      () => (aboutTitle.style.cssText = "transform: translateX(0%);"),
      1400
    );
    setTimeout(
      () => (aboutContent.style.cssText = "transform: translateX(0%);"),
      2000
    );
    setTimeout(
      () => (aboutLink.style.cssText = "transform: translateX(0%);"),
      2600
    );
  }

  // Start Animation for selected work (show case)
  if (window.scrollY >= showCase.offsetTop - 200) {
    setTimeout(() => {
      selectedWorkItems[0].style.cssText = "transform: translateX(0%)";
      selectedWorkItems[1].style.cssText = "transform: translateX(0%)";
    }, 1000);
  }

  // Start Animation for our services
  if (window.scrollY >= ourServices.offsetTop - 400) {
    setTimeout(
      () =>
        (ourServicesSectionTitle.style.cssText = "transform: translateX(0%);"),
      800
    );
    setTimeout(
      () => (ourServicesTitle.style.cssText = "transform: translateX(0%);"),
      1400
    );
    setTimeout(
      () => (ourServicesBtn.style.cssText = "transform: translateX(0%);"),
      2000
    );
  }

  // Start Animation for insights
  if (window.scrollY >= insights.offsetTop - 400) {
    setTimeout(() => {
      insightsCards[0].style.cssText = "transform: translateY(0%);";
    }, 800);
    setTimeout(() => {
      insightsCards[1].style.cssText = "transform: translateY(0%);";
    }, 1400);
    setTimeout(() => {
      insightsCards[2].style.cssText = "transform: translateY(0%);";
    }, 2000);
  }
});
