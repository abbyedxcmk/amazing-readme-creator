const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Write a brief description of your project',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information',
    },


    {
        type: 'input',
        name: 'title',
        message: 'What is your project title',
    },

    {

        type: 'list',
        name: 'license',
        message: 'Choose a license for your application',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },

    {
        type: 'input',
        name: 'title',
        message: 'What is your project title',
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines:',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions',
    },

    {

        type: 'input',
        name: 'github',
        message: 'Enter your github username',
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter your email:',
    },

];

// function to write README file
function writeToFile(fileName, data) {
    console.log(`This is a dummy test for a dummy saving:\n${data}`);
    console.log(`File "${fileName}" has been generated.`);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            // call the function to generate a markdown string from answers
            const markdown = generateMarkdown(answers);
            // write the generated string to a file
            writeToFile('README.md', markdown);
        });
}

// function call to initialize program
init();
