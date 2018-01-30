 /*!
 * xengine
 * Copyright 2012 xiangfeng
 * Released under the MIT license
 * Please contact to xiangfenglf@163.com if you hava any question 
 */
(function(win){
   var _sprite= win.Sprite = RenderObj.extend({
	   init:function(name)
	   {	       
		  this._super(name);

		  this.anims = null;
		  this.animsCtrl = new FrameCtrl();

          this.isXFlip = false;

		  this.isYFlip = false;
		  this.scaleX = 1;
		  this.scaleY = 1;
	   },

	   setAnims:function(animations,currAnimName)
	   {
		   currAnimName = currAnimName||"def";
		   this.anims = animations;
		   this.animsCtrl.setAnims(animations,currAnimName);
	   },

       addAnim:function(name,frames,isCurrent)
	   {
		   this.anims.add(name,frames);
		   isCurrent&&this.animsCtrl.setCurrent(name);
	   },

	   removeAnim:function(name)
	   {
		  this.anims.remove(name);
	   },

       setCAnim:function(name)
	    {
           this.animsCtrl.setCurrent(name);
		},  

	   setAnimSpeed:function(sp)
	   {
		   this.animsCtrl.speed = sp;
	   },

       getAnim:function(name)
	   {
		   return this.anims.get(name);
	   },       

	   getCurrFrame:function()
	   {
         return this.animsCtrl.getCurrFrame();
	   },

	   getNextFrame:function()
	   {
		   return this.animsCtrl.getNextFrame();
	   },

	   render:function(ctx)
       {	   	
		   ctx.translate(this.x,this.y);
		   var sw = this.scaleX*this.w;
		   var sh = this.scaleY*this.h;
		   var hw = 0.5*this.w;
		   var hh = 0.5*this.h;		
		   var scaleX = (this.isXFlip)?-this.scaleX:this.scaleX;
           var scaleY = (this.isYFlip)?-this.scaleY:this.scaleY;
		   if(this.deg!==0)
			 {
				ctx.rotate(MathUtil.deg2rad(this.deg));
			 }	
		   ctx.scale(scaleX,scaleY);
		   var f = this.getNextFrame();
		   ctx.drawImage(f[0],f[1],f[2],f[3],f[4],-hw,-hh,this.w,this.h);
	   }
   });
   _sprite.ClassName = "Sprite";
   ClassFactory.regClass(_sprite.ClassName,_sprite);
}(window))