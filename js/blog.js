let blogContainer = document.querySelector(".blog_container");

function blogGenerator() {
  fetch("../json/blogs.json")
    .then((data) => {
      return data.json();
    })
    .then((blogs) => {
      for (let i = 0; i < blogs.length; i++) {

        let blog = document.createElement("div");
        blog.classList.add("blog");

        let imgContainer = document.createElement("div");
        imgContainer.classList.add("img");

				let blogImg = document.createElement("img");
				blogImg.setAttribute("src" , blogs[i].img_path);
				blogImg.setAttribute("alt" , blogs[i].blog_title);

				let hoverLink = document.createElement("div");
        hoverLink.classList.add("hover_link");
				hoverLink.setAttribute("title" , blogs[i].blog_title);

        let blogLinkImg = document.createElement("a");
				blogLinkImg.setAttribute('href',blogs[i].blog_link)
        blogLinkImg.appendChild(document.createTextNode("view Artical"));
				
				let blogLinkImgArrow = document.createElement("i");
				blogLinkImgArrow.classList.add("fa-solid","fa-arrow-right");

				blogLinkImg.appendChild(blogLinkImgArrow)

				hoverLink.appendChild(blogLinkImg)

				imgContainer.appendChild(blogImg)
				imgContainer.appendChild(hoverLink)

				let blogCategory = document.createElement("span");
        blogCategory.appendChild(document.createTextNode(blogs[i].category));

				let blogTitle = document.createElement("h3");
				let blogTitleLink = document.createElement("a");
				blogTitleLink.setAttribute('href',blogs[i].blog_link)

        blogTitleLink.appendChild(document.createTextNode(blogs[i].blog_title));
				blogTitle.appendChild(blogTitleLink)
				

				blog.appendChild(imgContainer)
				blog.appendChild(blogCategory)
				blog.appendChild(blogTitle);

				blogContainer.appendChild(blog)
      }
    });
}

blogGenerator();