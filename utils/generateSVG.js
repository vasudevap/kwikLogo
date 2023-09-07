function generateSVG(choices) {

    let shapeSVGTag = '';

    switch (choices[2]) {

        case "circle":
            shapeSVGTag = `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
<circle cx="50%" cy="50%" r="100" fill="${choices[3]}" /> </svg>`;
            break;

        case "triangle":
            let eachSide = 2*200*Math.tan(Math.PI/6);
            let startX = (300-eachSide)/2;
            let endX = 300-startX;
            shapeSVGTag = `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
<polygon 
points="${startX},200 ${eachSide/2},0 ${endX},0" 
    fill="${choices[3]}" />`;
            break;

        case "square":
            shapeSVGTag = `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="0" width="200" height="200" style="fill: ${choices[3]}"/>
            </svg>`;
            break;

    }

    return '';
}