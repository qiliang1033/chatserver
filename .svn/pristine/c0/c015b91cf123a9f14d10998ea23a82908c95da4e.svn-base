 /*!
 * xengine
 * Copyright 2012 xiangfeng
 * Released under the MIT license
 * Please contact to xiangfenglf@163.com if you hava any question 
 */
(function(win){

   var _sceneEventListener = win.SceneEventListener = EventListener.extend({
	   init:function(param)
	   {
		   this.enabled = true;
		   this.onBeforeRender = param["beforeRender"]||this.onBeforeRender;
           this.onAfterRender = param["afterRender"]||this.onAfterRender;
	   },

       onBeforeRender:function(scene){return true;},

       onAfterRender:function(scene){return true;}
   });

   var _scene = win.Scene = Class.extend({
	   init:function(arg)
	   {
		  arg = arg||{};

          this.name = arg.name||("Unnamed_"+(++_scene.SID)); 

		  this.x = arg.x||0;
		  this.y = arg.y||0;
		  this.w = arg.w||320;
		  this.h = arg.h||200;
		  this.color = arg.color||"black";

		  this.holder = $("<div id='sc_"+this.name+"' style='position:absolute;overflow:hidden;left:0px;top:0px'></div>")

		  this.cvs = $("<canvas id='cv_"+this.name+"' style='z-index:-1;position:absolute;left:0px;top:0px'></canvas>");
		  this.ctx = this.cvs[0].getContext("2d");
		  this.setPos();
		  this.setSize();
		  this.setColor(this.color);
		  this.holder.append(this.cvs);
		  $(document.body).append(this.holder);

	      this.listeners = [],

		  this.rObjs = [];

		  this.namedRObjs = {};
	   },

	   createRObj:function(className,arg)
       {		
		  className = className||"RenderObj"; 
          var obj =  ClassFactory.newInstance(className,arg);
		  this.addRObj(obj);
		  return obj;
	   },

	   addRObj:function(renderObj)
       {
		  renderObj.owner = this;
		  this.rObjs.push(renderObj);
          this.namedRObjs[renderObj.name] = renderObj;
	   },

	   removeRObj:function(renderObj)
       {
		 this.removeRObjByName(renderObj.name);
	   },

	   removeRObjByName:function(name)
       {
          var obj = this.namedRObjs[name];
		  if(obj!=null)
		  {		  
		    delete this.namedRObjs[name];		  
		  }

		  ArrayUtil.removeFn(this.rObjs,function(rObj){return rObj.name===name;}); 
	   },

	   getRObjByName:function(name)
	   {
		   return this.namedRObjs[name];
	   },

       clearRObj:function()
       {
          this.rObjs = [];
		  this.namedRObjs = {};
	   },
	   addListener:function(ln)
       {
          this.listeners.push(ln);
	   },

       clearListener:function()
       {
	      this.listeners.length = 0;
       }, 

	   update:function()
       {
		   for(var i = 0;i<this.rObjs.length;i++)
		   {
			   this.rObjs[i].update();
		   }
	   },     

	   render:function()
       {
		   var ltns = this.listeners;

           this.clear(); 

           for(var i=0,len = ltns.length;i<len;i++)
			{
		       ltns[i].enabled&&ltns[i].onBeforeRender(this);
		    } 			
		   this.renderRObj();
 
		   for(var i=0;i<len;i++)
		    {
			  ltns[i].enabled&&ltns[i].onAfterRender(this);
		    }
	   },

	   renderRObj:function()
       {
		   for(var i = 0,len = this.rObjs.length;i<len;i++)
		   {

			   this.ctx.save();
			   this.rObjs[i].isVisible&&this.rObjs[i].render(this.ctx);
			   this.ctx.restore();
		   }
	   },

	   setPos:function(x,y)
	   {
		   this.x = x||this.x;
		   this.y = y||this.y;
		   this.holder.css("left",this.x).css("top",this.y);
	   },

       setSize:function(w,h)
	   {
		   this.w = w||this.w;
		   this.h = h||this.h;
		   this.holder.css("width",this.w).css("height",this.h);
		   this.cvs.attr("width",this.w).attr("height",this.h);
	   },       

	   setColor:function(color)
	   {		   
		   this.color = color||"black";
           this.holder.css("background-color",this.color);
	   },

	   clear:function()
       {
          this.ctx.clearRect(0,0,this.w,this.h);
	   },

	   show:function()
	   {
		   this.holder.show();
	   },

	   hide:function()
       {
		   this.holder.hide();
	   },
	   fadeOut:function(time,fn)
       {
		   this.holder.fadeOut(time,fn);
	   },
       fadeIn:function(time,fn)
       {
		   this.holder.fadeIn(time,fn);
	   },

	   setBGImg:function(imgURL,pattern)
       {
          this.holder.css("background-image","url("+imgURL+")");
		  switch(pattern)
		  {
			  case 0:
                  this.holder.css("background-repeat","no-repeat");
			      this.holder.css("background-position","center");
				  break;
			  case 1:
                  this.holder.css("background-size",this.w+"px "+this.h+"px ");
				  break;
		  }
	   },

	   clean:function()
       {
		  this.listeners = null;
		  this.cvs.remove();
		  this.holder.remove();
		  this.cvs = this.holder = this.ctx = null;
	   }
   });

   _scene.SID = 0;
   _scene.ClassName = "Scene";

   ClassFactory.regClass(_scene.ClassName,_scene);
}(window))