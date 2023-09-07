const Shape = require('./lib/shapes')

function generateLogo(data) {
    let shape = ''
    if (data.shape === 'Circle') {
        shape = new Circle(data.shape_colour, data.text, data.text_colour)
    } else if (data.shape === 'Triangle') {
        shape = new Triangle(data.shape_colour, data.text, data.text_colour)
    } else if (data.shape === 'Square') {
        shape = new Square(data.shape_colour, data.text, data.text_colour)
    }
    return shape.render();
}
    
module.exports = generateLogo;