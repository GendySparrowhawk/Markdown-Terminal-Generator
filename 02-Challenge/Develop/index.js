// TODO: Include packages needed for this application
const markdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer')
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./README.md', md, (err) => {
        if (err) throw err;
    } )
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
