class Shape {
    constructor() {
        this.shapeColor = "";
        this.letters = "";
        this.letterColor = "";
    }
    setLetters(letters){
        this.letters = letters;
    }

    setLetterColor(letterColor){
        this.letterColor = letterColor;
    }

    setColor(shapeColor) {

        this.shapeColor = shapeColor;
    }

    render(wrapMeInSVG) {

        return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        `
            + "\n"
            + wrapMeInSVG
            + `
        <style>
        .logoTxt {
            font: italic 125px serif;
            fill: ${this.letterColor};
        }
    </style>
    <text x="75" y="150" class="logoTxt">${this.letters}</text>
    `
            + "\n"
            + ` </svg>`;
    }
}

class Circle extends Shape {
    
    render() {
        return super.render(`
        <circle cx="50%" cy="50%" r="100" fill="${this.shapeColor}" /> 
        `);
    }
}

class Square extends Shape {
    
    render() {
        return super.render(`<rect x="50" y="0" width="200" height="200" style="fill: ${this.shapeColor}"/>`);
    }
}

class Triangle extends Shape {
    
    render() {
        let eachSide = 2 * (200 / (Math.tan(Math.PI / 3)));
        let startX = (300 - eachSide) / 2;
        let endX = 300 - startX;
        return super.render(`<polygon 
        points="${startX},200 ${startX + (eachSide / 2)},0 ${endX},200" 
            fill="${this.shapeColor}" />
            `);
    }
}

module.exports = { Shape, Circle, Square, Triangle };