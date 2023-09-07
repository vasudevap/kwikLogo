// Packages needed for this application
const fs = require('fs'); // for reading writing to files
const inquirer = require('inquirer'); // for prompting user
const shapes = require('./lib/shape'); // for shape classes
const generateSVG = require('./utils/generateSVG'); // for shape classes

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

    fs.writeFile('./examples/logo.svg', logoData, (err) => err ? console.error(err) : "");

}

// Function to initialize the app
function init() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "letters",
            // Regular expression that input must be valid against.

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

        // with the answers we get back
        // perform some validation:
        //
        // 1 - check to see if call function to create the file in the local folder
        //
        // if(answers.letters.length > 3)
        if(answers.letters.length>3){
            console.log("For best results, please use three letters at a maximum!");
        } else {
            createLogoSVG(generateSVG(answers));
        }
        init();
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment");
        } else {
            console.log(error);
        }
    });
}

// Function call to initialize app
init();