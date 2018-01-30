 /*!
 * xengine
 * Copyright 2012 xiangfeng
 * Released under the MIT license
 * Please contact to xiangfenglf@163.com if you hava any question 
 */
(function(win){ 
   var _resMan = win.ResManager =
	  {
	     defTypes:{},
         res:{},
         regResType:function(type,clz)
		 {
		   if(this.defTypes[type]==null)
		   {
		     this.defTypes[type]={"type":type,"class":clz};
		   }
		 },
		 getClass:function(type)
		 {
		    return this.defTypes[type]["class"];
		 },

		 load:function(type,name,src,loadedFN)
		 {
            var res = this.getClass(type).load(name,src,loadedFN);            
            this.addRes(res);
			return res;
		 },		

		 addRes:function(resObj)
         {
			this.res[resObj.type]=this.res[resObj.type]||{};
			this.res[resObj.type][resObj.name]=resObj;			
		 },

		 removeRes:function(resObj)
		 {
            var t = resObj.type,
				n = resObj.name;
		    delete this.res[t][n];
			if(JSONUtil.isEmpty(this.res[t]))
			 {
				delete this.res[t];
			 }
		 },

		 clearRes:function()
		 {
            this.res = {};
		 },
 
		 getResByName:function(type,name)
		 {
		    return this.res[type][name];
		 },

         getAnimationsByName:function(fResName,fName)
	     {
		   var obj = this.res[_frameRes.ClassName][fResName];
		   var fm = obj.frames[fName];	
		   return fm;	
	     },

		 loadRes:function(url,loadedFN,perLoadedFN)
		 {
			var self = this;
			ResUtil.loadFile(url,null,
		    function(data){
 			  self.parseRes(data,loadedFN,perLoadedFN);
			})
		 },

         parseRes:function(res,loadedFN,perLoadedFN)
         {	     
			 var resCount = 0;
			 var totalCount = 0;
			 var resType=[];
			 this.res=[];
			 for(i in res){ 
				 if(res.hasOwnProperty(i))
			     {
				   resType.push(i);totalCount+=res[i].length;
				 }
			 }	
			 var cResTIdx=0;
			 var cRes=resType[cResTIdx];
			 var cResCount=0; 
			 var loadObj = null;
			 var self = this;
			 var loadHand=window.setInterval(function(){
			   if(loadObj==null)
			   {
			     loadObj = self.load(cRes,res[cRes][cResCount].name,res[cRes][cResCount].src);
			   }
			   else
			   {
			     if(loadObj.isLoaded)
				 {
                     resCount++;
					 cResCount++;
					 perLoadedFN&&perLoadedFN(totalCount,resCount);
                     if(resCount==totalCount)
					 {
                       window.clearInterval(loadHand);
                       loadedFN&&loadedFN(loadedFN);
					   return ;
					 }
                     if(cResCount>=res[cRes].length)
					 {
					    cResTIdx++;
					    cRes=resType[cResTIdx];
                        cResCount=0; 
					 }
                     loadObj = self.load(cRes,res[cRes][cResCount].name,res[cRes][cResCount].src);
				 }
			   }			
		     });
	     }
	  }    

   var _imgRes = win.ImageRes = {

	   load:function(name,url,loadedFN)
	   {
           var img = new Image();
		   img.src=url;	
		   var obj = {"type":"image","name":name,"hEle":img,"src":url,"isLoaded":false};
           img.onload=function()
		   {
		      obj.isLoaded = true;
			  loadedFN&&loadedFN();
 		   }
           return  obj;
	   }
   };

   var _frameRes = win.FrameRes = {	   
	   load:function(name,url,loadedFN)
	   {
	      function parse(animations,data)
	      {
			  switch(data.type)
			   {
				  case 0:
					  var res = _resMan.getResByName(_imgRes.ClassName,data.img);
					  var fs = new Frames("def",res.hEle);
					  fs.add(0,0,res.hEle.width,res.hEle.height);
					  animations.add("def",fs);
					  break;
				  case 1:
					  var res = _resMan.getResByName(_imgRes.ClassName,data.img);
					  if(res===null)
					   {
						  console.log("Load image for frames:"+data.img+" error !")
						  return;
					   }
					  var r = data.rc[0];
					  var c = data.rc[1];
					  var w = data.rc[2];
					  var h = data.rc[3];
					  var fs = data.animations;
					  if(fs==null)
					  {		
						  var fs = new Frames("def",res.hEle);
						  for(var i = 0;i<r;i++)
						  {
							 for(var j = 0;j<c;j++)
							  {
								fs.add(j*w,i*h,w,h);		
							  }
						  }    
						  animations.add("def",fs);
					  }
					  else
					  {
						  for(var fname in fs)
						   {
							  if(fs.hasOwnProperty(fname))
							   {
								   var fss = fs[fname];
								   var fm = new Frames(fname,res.hEle);
								   for(var j = fss[0];j<=fss[fss.length-1];j++)
									{							
										var fx = j%c;
										fx|=fx;
										var fy = j/c;
										fy|=fy;
										fm.add(w*fx,h*fy,w,h);							
									}
								   animations.add(fname,fm);
							   }
						   }		
					  }				 	
					  break;			 
			   }
	      }
		   var obj = {"type":"frame","name":name,"src":url,"frames":{},"isLoaded":false};
		   ResUtil.loadFile(url,null,function(data){
			   obj.isLoaded = true;
               for(var i in data)
			   {
				   if(data.hasOwnProperty(i))
				   {					  
					   var f = data[i];					
					   obj.frames[i] = new Animations();
                       parse(obj.frames[i],f);
				   }
			   }
			   loadedFN&&loadedFN();
           });
           return  obj;
	   }
   }
   _imgRes.ClassName = "image";
   _frameRes.ClassName = "frame";
   _resMan.regResType(_imgRes.ClassName,_imgRes);
   _resMan.regResType(_frameRes.ClassName,_frameRes);
}(window))