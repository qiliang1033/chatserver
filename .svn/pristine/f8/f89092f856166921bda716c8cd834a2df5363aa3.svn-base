/*!
 * xengine
 * Copyright 2012 xiangfeng
 * Released under the MIT license
 * Please contact to xiangfenglf@163.com if you hava any question 
 */
(function(win){
   var _frames = win.Frames = Class.extend({
      init:function(name,img,duration)
	  {
         this.name = name;
		 this.duration = duration|50;
		 this.frames = [];
		 this.img = img;		
	  },
      add:function(x,y,w,h,img,dur)
		{
		   var dur = dur||this.duration,
               img = img||this.img;			   
		   this.frames.push([img,x,y,w,h,dur]);
		},       

      insert:function(idx,x,y,w,h,img,dur)
		{
           var dur = dur||this.duration,
			   img = img||this.img;
		   ArrayUtil.insert(this.frames,idx,[img,x,y,w,h,dur]);
		},	 

	  remove:function(idx)
		{
		   this.frames.removeIdx(idx);
		},
	  clear:function()
	    {
           this.frames = [];
	    },
	  get:function(idx)
		{
		   return this.frames[idx];
		},
	  getCount:function()
		{
			return this.frames.length;
		}
   });

   var _animations = win.Animations = Class.extend({
     init:function()
	  {
		 this.anims = {};
	  },
     add:function(name,frames)
	 {
		 this.anims[name] = frames;
	 },

     remove:function(name)
	 {
		 this.anims[name] = null;
	 },

	 clear:function()
	 {  
		 this.anims = {};
	 },

	 get:function(name)
	 {
		 return this.anims[name];
	 }
   })

  var _frameCtrl = win.FrameCtrl = Class.extend({
   	    init:function(processFrameFN)
		{

          function defProcessFrame()
		  {

			  this.fDur += FrameState.elapseTime*this.speed;

			  if(this.fDur>=this.currFrames.frames[this.currFIdx][5])
				{
				   this.fDur = 0;
				   if(this.currFIdx<this.feIdx-1)
					{		
						  ++this.currFIdx;				  		
					}
				   else
					{
					   if(this.isCycle)
						{
						  this.currFIdx = this.fsIdx;
						}	
					}         
			    }         
		  }		  

		  this.processFrame = processFrameFN||defProcessFrame;		 
		},	

		reset:function()
		{          

		  this.fsIdx = 0;
		  this.feIdx = this.currFrames.getCount();
		  this.currFIdx = 0;
		  this.isCycle = true;
		  this.fDur = 0;
		  this.speed = 1;
		},		
	    setCurrent:function(name)
	    {
		  var cFrames  = this.anims.get(name);
		  if(this.currFrames!=cFrames)
			{			 
			 var oSpeed = this.speed||1;
			 this.currFrames = cFrames;
			 this.reset();
			 this.speed = oSpeed;
			}
	    },

		setAnims:function(animations,currAnimName)
		{
          this.anims = animations; 
          currAnimName = currAnimName||"def";
		  this.setCurrent(currAnimName);
		},
		getCurrFrameIdx:function()
		{
		   return this.currFIdx;
		},

		getCurrFrame:function()
		{
		   return this.currFrames.get(this.currFIdx);
		},

		getNextFrame:function()
		{
		   this.processFrame();
		   return this.currFrames.get(this.currFIdx);
		}
	})

_frames.ClassName = "Frames";
_frameCtrl.ClassName ="FrameCtrl";
_animations.ClassName = "Animations"

ClassFactory.regClass(_frames.ClassName,_frames);
ClassFactory.regClass(_frameCtrl.ClassName,_frameCtrl);
ClassFactory.regClass(_animations.ClassName,_animations);
}(window))