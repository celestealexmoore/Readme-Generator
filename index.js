// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

inquirer.prompt([
    {
        name: 'Title',
        message: 'What is the Title of your project?',
        type: 'input',
    },

    {
        name: 'Description',
        message: 'Describe your project:',
        type: 'input',
    },

    {
        name: 'Media',
        message: 'Please paste file paths to images/videos in the order that they should appear:',
        type: 'input',
    },

    {
        name: 'Installation',
        message: 'Installation Instructions:',
        type: 'input',
    },

    {        name: 'Contributors',
        message: 'List the names of all contributors separated by a comma:',
        type: 'input',
    },

    {
        name: 'Contact',
        message: 'What is your Github username?',
        type: 'input',
    },

    {
        name: 'Future Development',
        message: 'What are your ideas for future development of this project?',
        type: 'input',
    },

    {
        name: 'Licensure',
        message: 'How is this project licensed?',
        type: 'input',
    },

    {
        name: 'Project Status',
        message: 'What is your project status? (Completed, Slowed Down, Stopped)',
        type: 'input',
    }])

.then(function(answer){
 console.log(answer);
});



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

console.log("Hello From The Other Side")

console.log("User initiates application");
console.log("User is asked about README sections");
console.log("User responses are logged");
console.log("README.md file with user responses produced");