const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./generateLogo');


const prompts = [
    {
        type: 'input',
        message: 'Enter up to 3 characters for your logo',
        name: 'characters',
    },
    {
        type: 'input',
        message: 'What colour will the text be?',
        name: 'text_colour',

    },
    {
        type: 'list',
        message: 'What shape will the logo be?',
        name: 'shape',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        message: 'What colour will the shape be?',
        name: 'shape_colour',
    }
];

function writeToFile(fileName, data) {
    var content = generateLogo(data);
    fs.writeFile(fileName, content, function (err) {
        if (err) {
            return console.log(error);
        }
        console.log('Generated logo.svg');
    });
}

// function to initialize app
function init() {
    inquirer.prompt(prompts).then(function (data) {
        var fileName = 'logo.svg';
        writeToFile(fileName, data);
    });
}

// Function call to initialize app
init();
