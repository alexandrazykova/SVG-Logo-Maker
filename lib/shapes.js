class Shape {
    constructor() {
    this.colour=''
}
setColour(colour){
    this.colour=(colour);
}
}

class Circle extends Shape {
    render(){

        }
}

class Triangle extends Shape {
    render(){

        }
}

class Square extends Shape { 
    render(){

        }
};



module.exports = {Circle, Triangle, Square}