
(function(){
   RoundCornerRectangle = RenderObj.extend({
   init:function(name)
   {
	    this.x;
	    this.y;
	    this.width;
	    this.height;
	    this.radius;
	    this._super(name);
   },
   
   config:function(x,y,width,height,radius)
   {
	    this.x = x;
	    this.y = y;
	    this.width = width;
	    this.height = height;
	    this.radius = radius;
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
	    ctx.moveTo( this.getX()+this.radius,this.getY() );
	    ctx.lineTo( this.getRight()-this.radius,this.getY() );
	    ctx.arc( this.getRight()-this.radius,this.getY()+this.radius, this.radius, 3*Math.PI/2,2*Math.PI, false);
	    ctx.lineTo( this.getRight(),this.getBottom()-this.radius);
	    ctx.arc( this.getRight()-this.radius,this.getBottom()-this.radius, this.radius, 0, Math.PI/2, false);
	    ctx.lineTo( this.getX()+this.radius,this.getBottom() );
	    ctx.arc( this.getX()+this.radius,this.getBottom()-this.radius, this.radius, Math.PI/2, Math.PI, false);
	    ctx.lineTo( this.getX(),this.getY()+this.radius);
	    ctx.arc( this.getX()+this.radius,this.getY()+this.radius, this.radius,Math.PI, 3*Math.PI/2, false);
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
  RoundCornerRectangle.ClassName = "RoundCornerRectangle";

  ClassFactory.regClass(RoundCornerRectangle.ClassName,RoundCornerRectangle);
}())