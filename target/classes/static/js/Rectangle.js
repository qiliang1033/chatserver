
(function(){
   Rectangle = RenderObj.extend({
   init:function(name)
   {
	    this.x;
	    this.y;
	    this.width;
	    this.height;
	    this._super(name);
   },
   
   config:function(x,y,width,height)
   {
	    this.x = x;
	    this.y = y;
	    this.width = width;
	    this.height= height;
   },

   update:function()
   {

	   	this._super();
   },

   render:function(ctx)
   {
	   	ctx.strokeStyle="red";
		ctx.lineWidth=3;		
	    ctx.beginPath();
	    ctx.moveTo( this.getX(),this.getY());
	    ctx.lineTo( this.getRight(),this.getY());	  
	    ctx.lineTo( this.getRight(),this.getBottom());
	    ctx.lineTo( this.getX(),this.getBottom());
	    ctx.lineTo( this.getX(),this.getY());
	    ctx.closePath();
	    ctx.stroke();
   },
   
   getX:function()
   {
       return this.x;
   },
   
   getY:function()
   {
       return this.y;
   },

   getWidth:function()
   {
       return this.width;
   },

   getHeight:function()
   {
       return this.height;
   },

   getLeft:function()
   {
       return this.x;
   },

   getTop:function()
   {
       return this.y;
   },

   getRight:function()
   {
       return (this.x + this.width);
   },

   getBottom:function()
   {
       return (this.y + this.height);
   }

  });
   Rectangle.ClassName = "Rectangle";

  ClassFactory.regClass(Rectangle.ClassName,Rectangle);
}());