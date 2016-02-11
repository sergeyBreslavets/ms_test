function init(){

	var toy = new initTriangleToy(complete, "canvas");
	var MOUSE_UP = "mouseup";
	if  ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) {
		MOUSE_UP = "touchend";
	}
//	toy.play();
	$("#canvas").on(MOUSE_UP, function(){
		toy.play();
        changeTrianglesData();
        closeAll();
        showList();
	});
	
	function complete(){
		console.log('onComplete');
	}
}
function initTriangleToy(onCompleteEvent, canvasid){ 
	var canvas, context, requestAnimationFrame;
	var triangles; 
	var triangle1, triangle2, triangle3, triangle4, triangle5;
	var bgObj = {alpha:0.35};
	var animating = false;
	var renderRequired = true;
	requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
	window.requestAnimationFrame = requestAnimationFrame;
	canvas = document.getElementById(canvasid);
	context  = canvas.getContext('2d');
	triangle1 = [new Point(1,1), new Point(191,1), new Point(138, 234)];
	triangle2 = [new Point(159,105), new Point(266,105), new Point(123,278)];
	triangle3 = [new Point(360,149), new Point(360,382), new Point(32,247)];
	triangle4 = [new Point(146,157), new Point(167,432), new Point(84,432)];
	triangle5 = [new Point(360,149), new Point(360,382), new Point(32,247)]; 
	triangles = [triangle1, triangle2, triangle3, triangle4];	

		this.play = function(){		 
			if ( animating ) {
				return;
			}
			renderRequired = true;
			animating = true;		 
			$(bgObj).animate({alpha:0}, 80, function(){
				interpolate(triangle1, triangle2, 750);
				interpolate(triangle2, triangle3, 750);
				interpolate(triangle3, triangle4, 750);
				interpolate(triangle4, triangle1, 750, resume);
			}); 
		}
		render();
	 
	function interpolate(target, destination, duration, callback){
			for ( var i = 0; i < target.length; i++){ 
				$(target[i]).animate({x:destination[i].x,y:destination[i].y},duration, i==target.length-1?callback:undefined);
			}
	}  
	function resume(){
		animating = false;
		$(bgObj).animate({alpha:0.35},80, updateMessage);
	}
	function updateMessage(){	 
		renderRequired = false; 
		onCompleteEvent();
	}
	function render(){
		if ( renderRequired ) {
		context.clearRect(0,0,canvas.width,canvas.height);
		for ( var i = 0; i < triangles.length; i++){			 
			context.beginPath();
			context.moveTo(triangles[i][0].x,triangles[i][0].y);
			context.lineTo(triangles[i][1].x,triangles[i][1].y);
			context.lineTo(triangles[i][2].x,triangles[i][2].y);		 		 
			context.closePath();
			context.lineWidth = 2;
			context.stroke();		 
			context.strokeStyle = '#ffffff';
		}		
		context.beginPath();
		context.moveTo(triangle5[0].x,triangle5[0].y);
		context.lineTo(triangle5[1].x,triangle5[1].y);
		context.lineTo(triangle5[2].x,triangle5[2].y);		 		 
		context.closePath();
		context.fillStyle = "rgba(255, 255, 255, " + bgObj.alpha + ")";		 
		context.fill();		 
		} 
		requestAnimationFrame(render);	 
	}	 
	function Point(x,y, alpha){
		this.x = x;
		this.y = y;
		this.alpha = alpha;
	}
}


