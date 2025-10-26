// header //

let MenuBtn = document.getElementById("MenuBtn");
let sideBar = document.querySelector(".sideBar");
let header = document.querySelector("header");

MenuBtn.addEventListener("click", function (e) {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  this.classList.toggle("fa-xmark");

  const opcion = document.querySelector(".sideBar");
  opcion.style.display = "none";

  const opcion1 = document.querySelector("header");
  opcion1.style.display = "none";

  sideBar.style.visibility = sideBar.style.visibility === "hidden" ? "visible" : "hidden";
  header.style.visibility = header.style.visibility === "hidden" ? "visible" : "hidden";
});

//effect //

let typed = new Typed(".input", {
  strings: ["sotfware developer.", "Front-end.", "Data analyst."],
  typeSpeed: 200,
  backSpeed: 200,
  backDelay: 2000,
  loop: true,
});

// get all links
let navLinks = document.querySelectorAll("nav ul li a");
//get all sectons
let sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY;
  sections.forEach((section) => {
    if (
      scrollPos > section.offsetTop &&
      scrollPos < section.offset + section.offsetHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (
          section.getAttribute("id") === link.getAttribute("href").substring(1)
        ) {
          link.classList.add("active");
        }
      });
    }
  });
});
