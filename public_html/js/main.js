// @see http://paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimFrame = (function() {
  return  window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function(/* function */callback, /* DOMElement */element) {
            window.setTimeout(callback, 1000 / 60);
          };
})();


$( window ).load(function() {
  //Create a stage by getting a reference to the canvas
    stage = new createjs.Stage("canvas1");
    //Create a Shape DisplayObject.
    circle = new createjs.Shape();
    
    g = new createjs.Graphics();
    
    circle.graphics.beginFill("red").drawCircle(0, 0, 40);
    
    //Set position of Shape instance.
    circle.x = circle.y = 50;
    //Add Shape instance to stage display list.
    stage.addChild(circle);
    //Update stage will render next frame
    stage.update();

    $(window).resize(function(){
      
    }).resize();

  //requestAnimFrame(update);

});