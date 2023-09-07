// Packages needed for this application
const fs = require('fs'); // for reading writing to files
const inquirer = require('inquirer'); // for prompting user
const shapes = require('./lib/shape'); // for shape classes

// questions for user input
const userPrompts = [
    'Enter the letter/letters that would go on the logo (at most 3 letters)',
    'Enter a color for the text (keyword or a hexadecimal number)',
    'Enter a shape (select one below):',
    'Enter a color for the shape (color keyword or a hexadecimal number)'
];

const shapeChoices = [
    'circle',
    'triangle',
    'square'
];

// Function to write SVG file
function createLogoSVG(logoData) {

    fs.appendFile('./Logo.svg', logoData+"\n", (err) => err ? console.error(err) : "");

}

// Function to initialize the app
function init() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "letters",
            //'1. Enter the letter/letters that would go on the logo (at most 3 letters)', 
            message: userPrompts[0],
        },
        {
            type: "input",
            name: "letterColor",
            //'2. Enter a color for the text (keyword or a hexadecimal number)'
            message: userPrompts[1],
        },
        {
            type: "list",
            name: "shape",
            //'3. Enter a shape (select one below):'
            message: userPrompts[2],
            choices: shapeChoices
        },
        {
            type: "input",
            name: "shapeColor",
            //'4. Enter a color for the shape (color keyword or a hexadecimal number)'
 
            message: userPrompts[3],
        },
    ])
    .then((answers) => {

        //use generateMarkdown to populate the template using answers
        //use writeReadme to write the populated template to the local file
        createLogoSVG(generateSVG(answers));
        
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment");
        } else {
            console.log("Something else went wrong");
        }
    });
}

// Function call to initialize app
init();