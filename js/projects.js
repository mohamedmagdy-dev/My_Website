let projectContainer = document.querySelector(".project_container");

function projectGenerator() {
  fetch("json/project.json")
    .then((data) => {
      return data.json();
    })
    .then((projects) => {
      for (let i = 0; i < projects.length; i++) {
        let project = document.createElement("div");
        project.classList.add("project");
        let projectInfo = document.createElement("div");
        projectInfo.classList.add("info");

        let projectTitle = document.createElement("h3");
        projectTitle.appendChild(document.createTextNode(projects[i].title));

        let projectCategory = document.createElement("span");
        projectCategory.appendChild(
          document.createTextNode(projects[i].category)
        );

        projectInfo.appendChild(projectTitle);
        projectInfo.appendChild(projectCategory);

        let projectLink = document.createElement("a");
        projectLink.setAttribute("href", projects[i].project_path);

        let projectBg = document.createElement("img");
        projectBg.setAttribute("src", projects[i].img_path);
        projectBg.setAttribute("alt", projects[i].title);

        projectLink.appendChild(projectBg);

        project.appendChild(projectInfo);
        project.appendChild(projectLink);

        projectContainer.appendChild(project);
      }
    });
}

projectGenerator();


window.addEventListener("scroll", () => {
  // Start Show Scroll ToTop btn
  window.scrollY >= 100
    ? (toTop.style.cssText = " opacity: 1; visibility: visible ")
    : (toTop.style.cssText = "opacity: 0;  visibility: hidden");
});
