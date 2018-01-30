
(function(){
   Ball = RenderObj.extend({
   init:function(name,r)
   {

	   this.r = r||10;
	   this.color = "red";
	   this._timer;
	   this.fromnode = null;
	   this.node = null;
	   this.x;
	   this.y;
	   this.dx = 0;
	   this.dy = 0;
	   this.showRect=false;
	   this.rect;
	   this._super(name);
   },

   update:function()
   {
	   if (this.fromnode!=null && this.node !=null && this.fromnode == this.node){
		   this.x = this.translateNodex(this.fromnode);
		   this.y = this.translateNodey(this.fromnode);
		   this.dx = 0;
		   this.dy = 0;
		   this.showRect = true;
		   return;
	   }else if (this.fromnode == "综合办公室审批"&&this.node=="发起项目立项申请"){
		   	 var frameIndex =  (new Date().getTime() - this._timer)/20;
		   	 if (frameIndex < 5000/20){
		   		 this.dx = this.translateDxFromNodes("综合办公室审批","exclusive1",5000/20);
		   		 this.dy = this.translateDyFromNodes("综合办公室审批","exclusive1",5000/20);
		   	 }
		   	 else if (frameIndex < 2*5000/20){
		   		 this.dx = this.translateDxFromNodes("exclusive1","node1",5000/20);
		   		 this.dy = this.translateDyFromNodes("exclusive1","node1",5000/20);
		   	 }
		   	else if (frameIndex < 3*5000/20){
		   		 this.dx = this.translateDxFromNodes("node1","node2",5000/20);
		   		 this.dy = this.translateDyFromNodes("node1","node2",5000/20);
		   	 }
		   	else if (frameIndex < 4*5000/20){
		   		 this.dx = this.translateDxFromNodes("node2","发起项目立项申请",5000/20);
		   		 this.dy = this.translateDyFromNodes("node2","发起项目立项申请",5000/20);
		   	 } else{		   		
		   		this.dx = 0;
		   		this.dy = 0;
		   		this.showRect = true;
		   	 }			   	 
		 } else if (this.fromnode!=null && this.node !=null ){			 
			 var frameIndex =  (new Date().getTime() - this._timer)/20;
			 if (frameIndex < 5000/20){
		   		 this.dx = this.translateDxFromNodes(this.fromnode,this.node,5000/20);
		   		 this.dy = this.translateDyFromNodes(this.fromnode,this.node,5000/20);
		   	 } else{
		   		this.dx = 0;
		   		this.dy = 0;
		   		this.showRect = true;
		   	 }
		}
	    console.log("Jerry Debug::%d:%d:%d:%d",this.x,this.y,this.dx,this.dy);
	   	this._super();
   },

   render:function(ctx)
   {
	 ctx.beginPath();	 
	 ctx.fillStyle = "red";
	 ctx.arc(this.x,this.y,this.r-2,0,Math.PI*2);
	 ctx.fill();
     ctx.lineWidth = 2;

	 ctx.beginPath();
	 ctx.strokeStyle ="red";
	 ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
	 ctx.stroke();
	 if (this.showRect && this.rect != null){
		 this.rect.render(ctx);
	 }
   },
   
	
   translateNodex:function (nodeName){
	 if (nodeName == null) return;
  	 var x;
  	 if (nodeName=="开始"){
  	 		x = 50 + 35/2;
  	 	} else if (nodeName=="发起项目立项申请"){
  	 		x = 210 + 105/2 + 60;
  	 	} else if (nodeName=="综合办公室审批"){
  	 		x = 440 + 105/2 + 60;
  	 	}  else if (nodeName=="exclusive1"){
  	 		x = 660 + 40/2 ;
  	 	} else if (nodeName=="node1"){
  	 		x = 680 ;
  	 	} else if (nodeName=="node2"){
  	 		x = 210 + 105/2 + 60
  	 	} else if (nodeName=="结束"){
  	 		x = 820 + 35/2;
  	 	} 
  	 return x;
   },
      
   translateNodey:function (nodeName){
	 if (nodeName == null) return;
  	 var y;
  	 if (nodeName=="开始"){
  	 		y = 110 + 35/2;
  	 	} else if (nodeName=="发起项目立项申请"){
  	 		y = 100 + 55/2;	
  	 	} else if (nodeName=="综合办公室审批"){
  	 		y = 100 + 55/2;
  	 	}  else if (nodeName=="exclusive1"){
  	 		y = 107 + 40/2;
  	 	} else if (nodeName=="node1"){
  	 		y = 238;
  	 	} else if (nodeName=="node2"){
  	 		y = 238;;
  	 	} else if (nodeName=="结束"){
  	 		y = 110 + 35/2;
  	 	} 
  	 return y;
   },
   
   translateDxFromNodes:function (nodeName1,nodeName2,totalFrames){
  	 var xdistance = this.translateNodex(nodeName2)-this.translateNodex(nodeName1);
  	 return xdistance/totalFrames;
   },
   
   translateDyFromNodes: function (nodeName1,nodeName2,totalFrames){
  	 var ydistance = this.translateNodey(nodeName2)-this.translateNodey(nodeName1);
  	 console.log("JerryDebug::ydistance:%d:%s:%s:%d",ydistance,nodeName1,nodeName2,totalFrames);
  	 return ydistance/totalFrames;
   },
   
   setNodes:function(fromnode,node){
	   this.fromnode = fromnode;
	   this.node = node;  
	   this.x = this.translateNodex(this.fromnode);
	   this.y = this.translateNodey(this.fromnode);	
	   this.dx = this.translateDxFromNodes(this.fromnode, this.node, 50*5);
	   this.dy = this.translateDyFromNodes(this.fromnode, this.node, 50*5);
	   this._timer = new Date().getTime(); 
   },
   
   setRect:function(rect){
	   this.rect = rect;
   },
   
   setShowRect:function(showRect){
	   this.showRect = showRect;
   }

  });
  Ball.ClassName = "Ball";

  ClassFactory.regClass(Ball.ClassName,Ball);
}())