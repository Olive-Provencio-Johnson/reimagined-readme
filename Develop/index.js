// Included packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
//connects the completed responses with the generateMarkdown to a new file.
var response = "";
var writeFile = "";

// Array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "Please include a brief description of your project",
    name: "description",
  },
  {
    type: "input",
    message:
      "Please include more information about your project, such as the 'what, why, and how' of the project",
    name: "about",
  },
  {
    type: "input",
    message:
      "Please include any specific installation instructions for your project here",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples for use",
    name: "usage",
  },
  {
    type: "input",
    message:
      "List your collaborators, if any, with links to their GitHub profiles.",
    name: "credits",
  },
  {
    type: "list",
    message:
      "What type of license do you need for this project? If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/)",
    name: "license",
    choices: [
      "Apache 2.0 License",
      "GNU GPLv3",
      "BSD 3-Clause License",
      "MIT",
      "Eclipse Public License 1.0",
    ],
  },
];

//function to initialize app and write README file
function init() {
  inquirer.prompt(questions).then((response) => {
    fs.writeFile("./README.md", generateMarkdown(response), (err) =>
  err ? console.error(err) : console.log("README.md generated!"))
  });
}

// Function call to initialize app
init();


