class Shape {
    constructor(colour, text, textColour) {
        this.colour = colour;
        this.text = text;
        this.textColour = textColour;
    }

    setColour(colour) {
        this.colour = colour;
    }

    setColour(text) {
        this.text = text;
    }

    setColour(colour) {
        this.textColour = textColour;
    }
}

class Circle extends Shape {
    render() {
        return `<svg height="500" width="500">
        <circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.colour}"/>
        <text fill="${this.textColour}" font-size="75" x="172" y ="250">${this.text}</text></svg>`
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