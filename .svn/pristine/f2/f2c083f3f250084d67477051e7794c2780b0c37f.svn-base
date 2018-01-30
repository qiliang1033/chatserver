 /*!
 * xengine
 * Copyright 2012 xiangfeng
 * Released under the MIT license
 * Please contact to xiangfenglf@163.com if you hava any question 
 */
(function(win){
   var _appEventListener = win.AppEventListener = EventListener.extend({
	   init:function(param)
	   {
		   this.enabled = true;
		   this.onBeforeRender = param["beforeRender"]||this.onBeforeRender;		   
           this.onAfterRender = param["afterRender"]||this.onAfterRender;
	   },
       onBeforeRender:function(){return true;},
       onAfterRender:function(){return true;}
   });

   var _game = win.Game = Class.extend({
	 listeners:[],
	 sceneManager:null,
	 init:function()
	 {	   
	   this.sceneManager = new SceneManager();
	   this.paused = false;
	 },
	 addListener:function(ln)
     {
       this.listeners.push(ln);
	 },
     clearListener:function()
     {
	   this.listeners.length = 0;
     },
     mainloop:function()
	 {
      var ltns = this.listeners;
	  for(var i=0,len = ltns.length;i<len;i++)
		{
		  ltns[i].enabled&&ltns[i].onBeforeRender();
		} 
      var scene = this.sceneManager.getCurrentScene();
	  if(scene)
	  {
	    scene.update();
	    scene.render();
	  }
  
	  for(var i=0;i<len;i++)
	   {
		  ltns[i].enabled&&ltns[i].onAfterRender();
	   }
	 },

	 run:function(fps)
	 {     

	   fps = fps||60;
       var self = this,
	       spf = (1000/fps)|0;

	   FrameState.start();
       self.tHand = setInterval(function(){
    	  FrameState.update();	
		  if(!self.paused)
		   {
			  self.mainloop();
		   }
	   },spf); 
	 },
	 pause:function()
	 {
		 this.paused = true;
	 },

	 stop:function()
	 {
	   clearInterval(this.tHand);
	 }
   });
}(window))