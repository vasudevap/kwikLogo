const { Shape, Circle, Square, Triangle } = require('../lib/shape');

//
// test for Circle and 
describe('Shape', () => {

    describe('setColor', () => {

        const eachSide = 2 * (200 / (Math.tan(Math.PI / 3)));
        const startX = (300 - eachSide) / 2;
        const endX = 300 - startX;
        const shape = new Triangle();

        it('should take in color value and return it as part of a polygon tag', () => {

            shape.setColor("blue");
        });
        expect(shape.render()).toEqual(`<polygon points="${startX},200 ${startX + (eachSide / 2)},0 ${endX},200" fill="blue"/>`);
    })
});
//
// test for setColor
// test for setLetters
// test for setLetterColor
// test for render

//
// test for Triangle
//

// test for setColor
// test for setLetters
// test for setLetterColor
// test for render

//
// test for Square
//
// test for setColor
// test for setLetters
// test for setLetterColor
// test for render