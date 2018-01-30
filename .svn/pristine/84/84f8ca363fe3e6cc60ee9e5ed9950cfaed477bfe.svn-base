 /*!
 * xengine
 * Copyright 2012 xiangfeng
 * Released under the MIT license
 * Please contact to xiangfenglf@163.com if you hava any question 
 */
(function(win){
   var _sceneman = win.SceneManager = Class.extend({
	   init:function(param)
	   {
		  this.namedScenes = {};
		  this.scenes = [];		  
	   },

	   createScene:function(sceneClass,args){ 			 
         var sc = null;		 
		 if(arguments.length == 1)
		 {
             sc =  ClassFactory.newInstance("Scene",arguments[0]);  
		 }
		 else{
			 sceneClass = sceneClass||"Scene"; 
             sc =  ClassFactory.newInstance(sceneClass,args);
		 }
		 this.push(sc);
		 return sc;
	   }, 

	   sortSceneIdx:function()
	   {
		   for(var i=0,len=this.scenes.length;i<len;i++)
		   {
			   var sc = this.scenes[i];
			   sc.holder.css("z-index",i);
		   }
	   },

       push:function(scene)
	   {
		   if(!this.getScene(scene.name))
		   {
			   this.scenes.push(scene);
			   this.namedScenes[scene.name] = scene;
			   this.sortSceneIdx();
		   }		  
	   },

	   pop:function()
	   {
		  var sc = this.scenes.pop();
          if(sc!=null)
		  {
             sc.clean();
			 sc = null;
		  }
		  delete this.namedScenes[name]; 
		  this.sortSceneIdx();
	   },   

       swap:function(from,to)
	   {
		 if(from>=0&&from<=this.scenes.length-1
			&&to>=0&&to<=this.scenes.length-1)
		 {
             var sc = this.scenes[from];
			 this.scenes[from] = this.scenes[to];
			 this.scenes[to] = sc;
			 this.sortSceneIdx();
		 }         
	   },

	   getIdx:function(scene)
	   {		  
		   return scene.holder.css("z-index");		
	   },

	   bringToTop:function(scene)
	   {
         var idx = this.getIdx(scene);
		 if(idx!=this.scenes.length-1)
		 {
			 this.scenes.splice(idx,1);
			 this.scenes[this.scenes.length] = scene;	
			 this.sortSceneIdx();
		 }		 
	   },

	   bringToLast:function(scene)
	   {
		 var idx = this.getIdx(scene);
		 if(idx!=0)
		 {
			 this.scenes.splice(idx,1);
			 this.scenes.splice(0,0,scene);
			 this.sortSceneIdx();
		 }		 
	   },

       back:function(scene)
       {
		 var idx = this.getIdx(scene);
		 if(idx>0)
		 {
			 this.swap(idx,idx-1);
		 }		 
	   },

       forward:function(scene)
       {
         var idx = this.getIdx(scene);
		 if(idx<this.scenes.length)
		 {			 
			 this.swap(idx,idx+1);
		 }		 
	   },

	   getScene:function(name)
	   {
		 return this.namedScenes[name];
	   }, 

	   getCurrentScene:function()
       {
		  return this.scenes[this.scenes.length-1];
	   }, 

	   clearAll:function()
       {
         for(var i in this.scenes)
		 {
           this.scenes[i].clean(); 
		 }
		 this.namedScenes = {};
		 this.scenes = [];
	   }
   });
}(window))