class Shape {
    constructor(colour, text, textColour) {
        this.colour = colour;
        this.text = text;
        this.textColour = textColour;
    }

    setColour(colour) {
        this.colour = colour;
    }

    setText(text) {
        this.text = text;
    }

    setTextColour(text_colour) {
        this.textColour = textColour;
    }
}

class Circle extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="115" r="80" fill="${this.colour}"/>
        <text fill="${this.textColour}" x="150" y="130" text-anchor="middle" font-size="40">${this.text}</text></svg>`
    }
}

class Triangle extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.colour}"/>
        <text fill="${this.textColour}" x="150" y="130" text-anchor="middle" font-size="40">${this.text}</text></svg>`
    }
}
class Square extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="73" y="40" width="160" height="160" fill="${this.colour}"/>
        <text fill="${this.textColour}" x="150" y="130" text-anchor="middle" font-size="40">${this.text}</text></svg>`
    }

}

module.exports = {Circle, Triangle, Square};