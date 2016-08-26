/**
 * 
 */

function Canvas  (canvas) {
	
	var canvas = document.getElementById('canvas');
	var cxt = canvas.getContext("2d");
	
	this.getCxt = function () {
		return cxt;
	}
}