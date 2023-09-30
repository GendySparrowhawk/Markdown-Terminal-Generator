// Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer')
  
const fs = require('fs');

//Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project',

    },
    {
        type: 'input',
        name: 'description',
        message: 'descripe your project',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What do users need to do to install this project?',
    },
    {
        type: 'input',
        name: 'useage',
        message: 'Who wrote this project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'enter your license',
        choices: ['MIT', 'ISC', 'Apachev2', 'OBSD', 'CC', 'GPLv3', 'IBM', 'Zlib','Unlicense', ''],
    },
    {
        type: 'checkbox',
        name: 'tools',
        message: 'select all that apply',
        choices: [
            'HTML',
            'CSharp',
            'Python',
            'CSS',
            'javaScript',
            'nodeJS',
            'REACT',
            'Angular',
            'Bootstrap',
            'Tailwind',
            'jquerry',
            'MySQL',
        ]
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests have you run?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github url',
    },
    {
        type: 'input',
        name: 'email',
        message: 'enter an email address where people can contact you',
    }
];



// TODO: Create a function to initialize app
function init() { 
    // TODO: Create a function to write README file
    return inquirer.prompt(questions)
    .then((data) => { 
       const markDown =  generateMarkdown(data);
        fs.writeFile('./README.md', markDown, (err) => {
            if (err) throw err;
    
            console.log('sucsess! You now have a shiny new README');
        });
    })
    .catch ((error) => {
        console.log(error);
    })
}

// Function call to initialize app
init();
