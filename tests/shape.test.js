const { Shape, Circle, Square, Triangle } = require('../lib/shape');

//
// test for Circle  
describe('Circle', () => {

    // test for render function
    describe('render', () => {

        it('should take in color value and return it as part of a Circle tag', () => {

            const shape = new Circle();

            shape.setColor("blue");

            expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" fill="blue"/>`);

        });
    });

    // test for setLetterColor function
    describe('setLetterColor', () => {

        it('should take in color value for the letter and assign it to shape.letterColor', () => {

            const shape = new Circle();

            shape.setLetterColor("green");

            expect(shape.letterColor).toEqual("green");

        });
    });

    // test for setLetters function
    describe('setLetters', () => {

        it('should take in letters and assign it to shape.letters', () => {

            const shape = new Circle();

            shape.setLetters("AbC");

            expect(shape.letters).toEqual("AbC");

        });
    });   
    
    // test for setColor function
    describe('setColor', () => {

        it('should take in the color of the shape and assign it to shape.shapeColor', () => {

            const shape = new Circle();

            shape.setColor("red");

            expect(shape.shapeColor).toEqual("red");

        });
    });    
});


//
// test for Triangle
//
describe('Triangle', () => {

    describe('setColor', () => {

        it('should take in color value and return it as part of a polygon tag', () => {

            const eachSide = 2 * (200 / (Math.tan(Math.PI / 3)));
            const startX = (300 - eachSide) / 2;
            const endX = 300 - startX;
            const shape = new Triangle();

            shape.setColor("blue");

            expect(shape.render()).toEqual(`<polygon points="${startX},200 ${startX + (eachSide / 2)},0 ${endX},200" fill="blue"/>`);
        });

    });
    // test for setLetterColor function
    describe('setLetterColor', () => {

        it('should take in color value for the letter and assign it to shape.letterColor', () => {

            const shape = new Triangle();

            shape.setLetterColor("green");

            expect(shape.letterColor).toEqual("green");

        });
    });

    // test for setLetters function
    describe('setLetters', () => {

        it('should take in letters and assign it to shape.letters', () => {

            const shape = new Triangle();

            shape.setLetters("AbC");

            expect(shape.letters).toEqual("AbC");

        });
    });   
    
    // test for setColor function
    describe('setColor', () => {

        it('should take in the color of the shape and assign it to shape.shapeColor', () => {

            const shape = new Triangle();

            shape.setColor("red");

            expect(shape.shapeColor).toEqual("red");

        });
    });    
});

describe('Square', () => {

    describe('setColor', () => {

        it('should take in color value and return it as part of a polygon tag', () => {

            const shape = new Square();

            shape.setColor("blue");

            expect(shape.render()).toEqual(`<rect x="50" y="0" width="200" height="200" style="fill: blue"/>`);

        });
    });
    // test for setLetterColor function
    describe('setLetterColor', () => {

        it('should take in color value for the letter and assign it to shape.letterColor', () => {

            const shape = new Square();

            shape.setLetterColor("green");

            expect(shape.letterColor).toEqual("green");

        });
    });

    // test for setLetters function
    describe('setLetters', () => {

        it('should take in letters and assign it to shape.letters', () => {

            const shape = new Square();

            shape.setLetters("AbC");

            expect(shape.letters).toEqual("AbC");

        });
    });   
    
    // test for setColor function
    describe('setColor', () => {

        it('should take in the color of the shape and assign it to shape.shapeColor', () => {

            const shape = new Square();

            shape.setColor("red");

            expect(shape.shapeColor).toEqual("red");

        });
    });    
});
//
// test for Square
//
// test for setColor
// test for setLetters
// test for setLetterColor
// test for render