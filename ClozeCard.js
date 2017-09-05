//Create a Shape constructor. It should have a property called type.
function Shape(type){
	this.type = type;
}

//Attach a function, called get_type, such that any Shape will be able to call it.
Shape.prototype.get_type = function(){
	console.log(this.type);
	
}; 

//Create Triangle and Square constructors. The triangles should set the properties side1, side2, and side3 for its side lengths. Do the same for Square.

function Triangle(side1,side2,side3){
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
}

function Square(side){
	this.side1 = side;
	this.side2 = side;
	this.side3 = side;
	this.side4 = side;
}

//Set the prototype of both of these objects equal to a new Shape(). 

Triangle.prototype = new Shape("triangle");
Square.prototype = new Shape("square");
Pentagon.prototype = new Shape("pentagon");

var shape = new Shape("shape1");
// console.log(Object.getPrototypeOf(shape))
// console.log(shape);
shape.get_type();

var tri1 = new Triangle(3,6,9);
tri1.constructor=Triangle;
console.log(tri1.constructor);
console.log(tri1);
tri1.get_type();

var square1 = new Square(4);
square1.constructor=Square;
console.log(square1.constructor);
console.log(square1);
square1.get_type();

//Create a Pentagon object, analogous to your other shapes. Your getType method should work without any additional work.
function Pentagon(side1, side2, side3, side4, side5){
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
	this.side5 = side5;
}
Pentagon.prototype = new Shape("pentagon");
var pent1 = new Pentagon(3,3,3,4,4);
pent1.constructor=Pentagon;
console.log(pent1.constructor);
console.log(pent1);
pent1.get_type();