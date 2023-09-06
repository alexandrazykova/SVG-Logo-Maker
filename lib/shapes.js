class Shape {
    constructor(colour, text, textColour) {
        this.colour = colour;
        this.text = text;
        this.textColour = textColour;
    }

    setColour(colour) {
        this.colour = (colour);
    }

    setColour(text) {
        this.text = (text);
    }

    setColour(colour) {
        this.textColour = (textColour);
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.colour}"/>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.colour}"/>`
    }
}
class Square extends Shape {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.colour}"/>`
    }

}

module.exports = Shape;