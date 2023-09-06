const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
        type: 'input',
        message: 'Enter up to 3 characters for your logo',
        name: 'characters',
    },
    {
        type: 'input',
        message: 'What colour will the text be?',
        name: 'colour',
    },
    {
        type: 'checkbox',
        message: 'What shape will the logo be?',
        name: 'shape',
        choices: [],
    },
  ])
