const { Shape, Square, Triangle, Circle } = require("../lib/shape");

function generateSVG(choices) {

    const tagsBeforeSVG = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SVG Logo</title>
    </head>
    
    <body>`;

    let shapeSVGTag = '';

    const tagsAfterSVG = `
    </body>
    
    </html>`;


    switch (choices.shape) {

        case "circle":

            let myCircle = new Circle();
            myCircle.setColor(choices.shapeColor);
            myCircle.setLetters(choices.letters);
            myCircle.setLetterColor(choices.letterColor);
            shapeSVGTag = myCircle.render();
            break;

        case "triangle":

            let myTriangle = new Triangle();
            myTriangle.setColor(choices.shapeColor);
            myTriangle.setLetters(choices.letters);
            myTriangle.setLetterColor(choices.letterColor);
            shapeSVGTag = myTriangle.render();
            break;

        case "square":

            let mySquare = new Square();
            mySquare.setColor(choices.shapeColor);
            mySquare.setLetters(choices.letters);
            mySquare.setLetterColor(choices.letterColor);
            shapeSVGTag = mySquare.render();
            break;

    }

    return tagsBeforeSVG + shapeSVGTag + tagsAfterSVG;
}

module.exports = generateSVG;