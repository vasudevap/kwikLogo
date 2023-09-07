function generateSVG(choices) {

    const tagsBeforeSVG = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SVG Logo</title>
    </head>
    
    <body>`;

    const tagSVGStart = `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
            `;

    let shapeSVGTag = '';

    const tagsAfterSVG = `
    </body>
    
    </html>`;

    switch (choices.shape) {

        case "circle":
            shapeSVGTag = `
            <circle cx="50%" cy="50%" r="100" fill="${choices.shapeColor}" /> 
            `;
            break;

        case "triangle":
            let eachSide = 2 * 200 * Math.tan(Math.PI / 6);
            let startX = (300 - eachSide) / 2;
            let endX = 300 - startX;
            shapeSVGTag = `<polygon 
points="${startX},200 ${eachSide / 2},0 ${endX},0" 
    fill="${choices.shapeColor}" />
    `;
            break;

        case "square":
            shapeSVGTag = `<rect x="50" y="0" width="200" height="200" style="fill: ${choices.shapeColor}"/>
            
            `;
            break;

    }

    let tagForLetters = `
    <style>
    .logoTxt {
        font: italic 125px serif;
        fill: ${choices.letterColor};
    }
</style>
<text x="75" y="150" class="logoTxt">${choices.letters}</text>
`

    // font: "italic 13px sans-serif"}
    return tagsBeforeSVG + tagSVGStart + shapeSVGTag + tagForLetters + ` </svg>` + tagsAfterSVG;
}

module.exports = generateSVG;