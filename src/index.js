import "./style.css";
import  dashboard from "./adminDashboardScreenshot.png";
import tinycart from "./TinyCartScreenshot.png";
import mealPlanning from "./mealPlanningScreenshot.png";
import pastebinScreenshot from "./pasteBinScreenshot.png";
import todolist from "./ToDoListScreenshot.png";
import typefight from "./typefightScreenshot.png";
import astar from "./AStarSearchScreenshot.png";
let projects = [
  {
    project_name: "Tiny Cart",
    github_link: "https://github.com/tgustafson2/PennyPenchersFrontend",
    website: "",
    description:
      "Led the conceptualization and execution of a startup idea, securing 3rd place at TechStars Startup Weekend",
    screenshot: tinycart,
  },
  {
    project_name: "MealPlanning Backend",
    github_link: "https://github.com/tgustafson2/MealPlanningBackend",
    website: "",
    description:
      "Built a RESTful API to facilitate user authentication, recipe creation, and meal planning functionality. Optimized database interactions by leveraging Dapper and stored procedures for efficient CRUD operations on MS SQL server",
    screenshot: mealPlanning,
  },
  {
    project_name: "PasteBin Backend",
    github_link: "https://github.com/tgustafson2/pasteBinBackend",
    website: "",
    description:
      "Developed and deployed a RESTful API using Node.js, Express.js, and MySQL to save and retrieve user-entered text, resulting in efficient data management and retrieval.Utilized AWS EC2 to host the service, storing user-generated text data as binary streams on AWS S3, ensuring scalability and reliability of the storage solution.",
    screenshot: pastebinScreenshot,
  },
  {
    project_name: "ToDoList",
    github_link: "https://github.com/tgustafson2/ToDoList",
    website: "https://tgustafson2.github.io/ToDoList/",
    description:
      "Developed a sample web application to manage tasks and to-do lists. Utilized Webpack for module bundling and optimized JavaScript development.",
    screenshot: todolist,
  },
  {
    project_name: "Admin Dashboard",
    github_link: "https://github.com/tgustafson2/admin-dashboard",
    website: "https://tgustafson2.github.io/admin-dashboard/",
    description:
      "Designed an admin dashboard page using HTML/CSS Grid for layout and sizing. Utilized CSS functions such as repeat, auto-fit, and minmax to achieve a responsive and adaptable space layout in the admin dashboard.",
    screenshot: dashboard,
  },
  {
    project_name: "TypeFight",
    github_link: "https://github.com/UCR-CS110/final-project-typefight",
    website: "",
    description:
      "Implemented secure login functionality using BCryptJS and stored user information in MongoDB, ensuring data privacy and security.",
    screenshot: typefight,
  },
  {
    project_name: "A* Search",
    github_link: "https://github.com/tgustafson2/CS170Project1",
    website: "",
    description:
      "Implemented A* search as a method to solve a given state of 8 puzzle which is a 3 x 3 grid with 8 numbered tiles, with a goal state of arranging the numbers in order. Improved algorithm speed by preventing branching into previously checked states",
    screenshot: astar,
  },
];

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

projects.forEach((project) => {
  const card = document.createElement("div");
  card.classList.add("project-card");
  const screenshot = document.createElement("div");
  screenshot.classList.add("screenshot");
  screenshot.style.backgroundImage = `url(${project.screenshot})`;
  card.appendChild(screenshot);
  const info = document.createElement("div");
  info.classList.add("card-info");
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("card-header");
  const heading = document.createElement("h6");
  heading.innerText = project.project_name;
  headerDiv.appendChild(heading);
  if (project.github_link !== "") {
    const githubLink = document.createElement("a");
    githubLink.innerHTML = `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />`;
    githubLink.addEventListener("click", (event) => {
      window.open(project.github_link);
    });
    headerDiv.appendChild(githubLink);
  }
  if (project.website !== "") {
    const websiteLink = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg",
    );
    websiteLink.classList.add("open-new");
    websiteLink.setAttribute("viewbox", "0 0 24 24")
    websiteLink.innerHTML = `<title>open-in-new</title>
    <path
      d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
    />`;
    headerDiv.appendChild(websiteLink);
  }
  info.appendChild(headerDiv);
  card.appendChild(info);
  const description = document.createElement("p");
  description.classList.add("card-info");
  description.innerText = project.description;
  card.appendChild(description);
  document.querySelector(".project-card-container").appendChild(card);
});
