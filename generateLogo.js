const { Circle, Triangle, Square } = require('./lib/shapes')

function generateLogo({ shape, shape_colour, text, text_colour }) {
    let finalShape

    switch (shape) {
        case 'Circle':
            finalShape = new Circle(shape_colour, text, text_colour);
            break;
        case 'Triangle':
            finalShape = new Triangle(shape_colour, text, text_colour);
            break;
        case 'Square':
            finalShape = new Square(shape_colour, text, text_colour)
    }
    
    return finalShape.render();
}

module.exports = generateLogo;