 /*!
 * xengine
 * Copyright 2012 xiangfeng
 * Released under the MIT license
 * Please contact to xiangfenglf@163.com if you hava any question 
 */
(function(win){
   var _renderObj = win.RenderObj = Class.extend({
	   init:function(name)
	   {	
	     this.name = name||("Unnamed_"+(_renderObj.SID++));

		 this.owner = null;

		 this.x = 0;
		 this.y = 0;

		 this.w = 0;
		 this.h = 0;	

		 this.dx = 0;
		 this.dy = 0;

		 this.vx = 0;
		 this.vy = 0;

		 this.deg = 0;

		 this.zIdx = 0;

		 this.isVisible = true;
	   },	        	   

	   moveTo:function(x,y)
       {
		   this.x = x||this.x;
		   this.y = y||this.y;
	   },    

	   move:function(xOff,yOff)
	   {
		   this.x += xOff;
		   this.y +=yOff;
	   },

	   moveStep:function()
       {
          this.dx += this.vx;
		  this.dy += this.vy;
		  this.x += this.dx;
		  this.y += this.dy;
	   },

       rot:function(deg)
       {
		  this.deg = deg;
	   }, 
   
	   update:function()
       {
          this.moveStep();
	   },
	   
	   render:function(ctx)
       {
          return;
	   }
   });
   _renderObj.SID = 0;
   _renderObj.ClassName = "RenderObj";
   ClassFactory.regClass(_renderObj.ClassName,_renderObj);
}(window))