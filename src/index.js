import "./style.css";

let projects = [];


//add project cards

const githubAboutLink = document.querySelector("#about-links a:nth-child(2)");
const linkedInAboutLink = document.querySelector("#about-links a:nth-child(3)");
const githubFooterLink = document.querySelector(
  ".contact-links a:nth-child(1)",
);
const linkedInFooterLink = document.querySelector(
  ".contact-links a:nth-child(2)",
);

githubAboutLink.addEventListener("click", (event) => {
  window.open("https://www.github.com/tgustafson2");
});

linkedInAboutLink.addEventListener("click", (event) => {
  window.open("https://www.linkedin.com/in/thomas-gustafson-825a921ba//");
});

githubFooterLink.addEventListener("click", (event) => {
  window.open("https://www.github.com/tgustafson2");
});

linkedInFooterLink.addEventListener("click", (event) => {
  window.open("https://www.linkedin.com/in/thomas-gustafson-825a921ba//");
});
