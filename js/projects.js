let projectContainer = document.querySelector(".project_container");

function projectGenerator() {
  fetch("../json/project.json")
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
				projectTitle.appendChild(document.createTextNode(projects[0].title));

				let projectCategory = document.createElement("span");
				projectCategory.appendChild(
					document.createTextNode(projects[0].category)
				);

				projectInfo.appendChild(projectTitle);
				projectInfo.appendChild(projectCategory);

				let projectLink = document.createElement("a");
				projectLink.setAttribute("href", projects[0].project_path);

				let projectBg = document.createElement("img");
				projectBg.setAttribute("src", projects[0].img_path);
				projectBg.setAttribute("alt", projects[0].title);

				projectLink.appendChild(projectBg);

				project.appendChild(projectInfo);
				project.appendChild(projectLink);

				projectContainer.appendChild(project);
			}
    });
}

projectGenerator();
