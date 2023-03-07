// TODO: Include packages needed for this application
// ran npm init and npm i inquirer@8.2.4
const inquirer = require("inquirer");


// TODO: Create an array of questions for user input
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
        message: "Please include more information about your project, such as the 'what, why, and how' of the project",
        name: "about",

    },
    {
        type: "input", 
        message: "Please include any specific installation instructions for your project here",
        name: "installation",

    },
    {
        type: "input", 
        message: "Provide instructions and examples for use",
        name: "usage",

    },
    {
        type: "input", 
        message: "List your collaborators, if any, with links to their GitHub profiles.",
        name: "credits",

    },
    {
        type: "list", 
        message: "What type of license do you need? If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/)",
        name: "license",

    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
