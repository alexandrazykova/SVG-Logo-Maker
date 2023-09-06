const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('svg.js');
const generateLogo = require('../index');

const colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i;

const prompts = [
    {
        type: 'input',
        message: 'Enter up to 3 characters for your logo',
        name: 'characters',
    },
    {
        type: 'input',
        message: 'What colour will the text be?',
        name: 'textCol',
        
    },
    {
        type: 'checkbox',
        message: 'What shape will the logo be?',
        name: 'shape',
        choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      message: 'What colour will the shape be?',
      name: 'shapeCol',
  }
];

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log(data)
    );
}

// function to initialize app
function init() { 
    inquirer.prompt(prompts).then((response) => {
        console.log(response)

        // function to write README file
        writeToFile("index.js", generateLogo(response))
    })
}

// Function call to initialize app
init();
