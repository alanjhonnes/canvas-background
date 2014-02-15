// @see http://paulirish.com/2011/requestanimationframe-for-smart-animating/

window.requestAnimFrame = (function() {
    return  window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {
                window.setInterval(callback, 1000 / 60);
            };
})();




$(window).load(function() {

    var stageWidth, stageHeight;
	var $canvas = $("#canvas1");
	
	//Create a stage by getting a reference to the canvas
    
    var stage = new createjs.Stage("canvas1");
    
    var lines = new createjs.Shape();
	stage.addChild(lines);
	
	var redrawLines = function(){
		//Create a Shape DisplayObject.
	
	    var g = lines.graphics;
	    
	    g.clear();
	
	    var numLines = 10;
	
	    var xOffset = 150;
		g.setStrokeStyle(1);
	    g.beginStroke("#ffffff");
	 	var xPosition = 0;
	    for (var i = 0; i < numLines; i++) {
	        g.lineTo(xPosition, stageHeight);
	        xPosition += xOffset;
	        g.moveTo(xPosition, 0);
	    }
	};
    
    $(window).resize(function() {
        stageWidth = $(window).width();
        stageHeight = $(window).height();
        $canvas.attr('width', stageWidth);
        $canvas.attr('height', stageHeight);
        $canvas.css('width', stageWidth + "px");
        $canvas.css('height', stageHeight + "px");
    	//stage.canvas.width = window.innerWidth;
        //stage.canvas.height = window.innerHeight; 
        redrawLines();
        stage.update();
    }).resize();
    
    //redrawLines();
    
	$("body").mousemove(function( event ) {
	  var mouseRatioX = event.pageX / stageWidth;
	  
	  TweenMax.to(lines, 1, { x: -mouseRatioX * 150} );
	  
	  //stage.update();
	});
	
    
    



    

	var update = function(){
		stage.update();
		console.log('updating');
	};
	
	window.setInterval(update, 1000 / 60);
	
	//requestAnimFrame(update);
	
	

    //requestAnimFrame(update);

});