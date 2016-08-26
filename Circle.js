/**
 * 
 */

function Circle(x, y, color) {
	
	var x = x;
	var y = y;
	var color = color;
	var radius = 50;
	
	this.getX = function () {
		return x;
	}
	
	this.setX = function (newX) {
		x = newX;
	}
	
	this.getY = function () {
		return y;
	}
	
	this.setY = function (newY) {
		y = newY;
	}
	
	this.getColor = function () {
		return color;
	}
	
	this.setColor = function (newColor) {
		color = newColor;
	}
	
	this.getRadius = function () {
		return radius;
	}
	
	this.setRadius = function (newRadius) {
		radius = newRadius;
	}
	
}

Circle.prototype.drawCircle = function (context) {
	
	context.lineWidth=3;
	context.beginPath();
	context.arc(this.getX(), this.getY(), this.getRadius(), 0, Math.PI*2, true);
	context.stroke();

}

Circle.prototype.changeColor = function (context) {
	context.restore();
	context.strokeStyle = this.getColor();
	
}