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
}

class Circle extends Shape {
    
    render() {
        return `<circle cx="50%" cy="50%" r="100" fill="${this.shapeColor}"/>`;
    }
}

class Square extends Shape {
    
    render() {
        return `<rect x="50" y="0" width="200" height="200" style="fill: ${this.shapeColor}"/>`;
    }
}

class Triangle extends Shape {
    
    render() {
        let eachSide = 2 * (200 / (Math.tan(Math.PI / 3)));
        let startX = (300 - eachSide) / 2;
        let endX = 300 - startX;
        return `<polygon points="${startX},200 ${startX + (eachSide / 2)},0 ${endX},200" fill="${this.shapeColor}"/>`;
    }
}

module.exports = { Shape, Circle, Square, Triangle };