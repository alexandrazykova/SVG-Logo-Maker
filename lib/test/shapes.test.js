const { Circle, Triangle, Square } = require('../shapes');

describe('Circle', () => {
    test('should render circle with specific params', () => {
        const shape = new Circle('red', 'white', 'hi');
        const expectedShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="115" r="80" fill="red"/>
        <text fill="white" x="150" y="130" text-anchor="middle" font-size="40">hello</text></svg>`
        expectedShape(shape.render()).toEqual(expectedShape);
    });

});

    describe ('Triangle', () => {
        test('should render triangle with specific params', () => {
        const shape = new Triangle('blue','orange', 'sun');
        const expectedShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="blue"/>
        <text fill="orange" x="150" y="130" text-anchor="middle" font-size="40">sun</text></svg>`
        expectedShape(shape.render()).toEqual(expectedShape);
    });

});

describe('Square', () => {

        test('should render square with specific params', () => {
            const shape = new Square('green', 'black', 'new');
            const expectedShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="73" y="40" width="160" height="160" fill="green"/>
            <text fill="black" x="150" y="130" text-anchor="middle" font-size="40">new</text></svg>`
            expectedShape(shape.render()).toEqual(expectedShape);
    });

});