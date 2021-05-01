// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

const questions = [

    {
        name: 'title',
        message: 'What is the Title of your project?',
        type: 'input',
    },

    {
        name: 'description',
        message: 'Describe your project:',
        type: 'input',
    },

    {
        name: 'media',
        message: 'Please paste file paths to images/videos in the order that they should appear:',
        type: 'input',
    },

    {
        name: 'installation',
        message: 'Installation Instructions:',
        type: 'input',
    },

    {
        name: 'contributors',
        message: 'List the names of all contributors separated by a comma:',
        type: 'input',
    },

    {
        name: 'contact',
        message: 'What is your Github username?',
        type: 'input',
    },

    {
        name: 'futureDevelopment',
        message: 'What are your ideas for future development of this project?',
        type: 'input',
    },

    {
        name: 'licensure',
        message: 'How is this project licensed?',
        type: 'input',
    },

    {
        name: 'projectStatus',
        message: 'What is your project status? (Completed, Slowed Down, Stopped)',
        type: 'input',
    }
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log('Generating README.md file');
        writeToFile('README.md', generateMarkdown({... response}))
    })
}

//the '...' is called the "Spread method." If you don't use it, the response would all be jumbled onto one line.


// Function call to initialize app
init();