 /*!
 * xengine
 * Copyright 2012 xiangfeng
 * Released under the MIT license
 * Please contact to xiangfenglf@163.com if you hava any question 
 */
 (function(win){
	  var _EListener = win.EventListener = Class.extend({
		  init:function()
		  {
			  throw Error("This class must be inherited");
		  }
	  })
 
	  var _event = win.Event = Class.extend({
		  init:function(src,obj,method)
		  {
			  this.src = src;
			  this.obj = obj;
			  this.method = method;
		  },
          exec:function()
		  {
			  this.method&&this.method.call(this.obj,this.src);
		  }
	  })
 }(window))