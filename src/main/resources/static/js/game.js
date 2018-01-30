(function(){
	 var g = new Game();
	 function initGame()
	 {
	   var scm = g.sceneManager; 
	   var sc = scm.createScene([{"name":"title","x":20,"y":200,"w":1100,"h":500}]);
	   sc.setBGImg("../image/process.png",1);
	   initRenderObj(sc);
	 }

	 function initRenderObj(sc)
	 {
		 /*var obj = sc.createRObj(Ball.ClassName);
		 obj.moveTo(translateNodex("[开始]"),translateNodey("[开始]"));
		 obj.dx = translateDxFromNodes("[开始]","[发起项目立项申请]",100);
		 obj.dy = translateDyFromNodes("[开始]","[发起项目立项申请]",100);	*/	
	 }
	 /*
	 function translateNodex(nodeName){
		 var x = 0;
		 if (nodeName=="[开始]"){
		 		x = 16 + 48/2;
		 	} else if (fromnnodeNameode=="[发起项目立项申请]"){
		 		x = 204 + 134/2 + 60;
		 	} else if (nodeName=="[综合办公室审批]"){
		 		x = 457 + 159/2 + 60;
		 	}  else if (nodeName=="[exclusive1]"){
		 		x = 675 + 48/2 ;
		 	} else if (nodeName=="[node1]"){
		 		x = 700 ;
		 	} else if (nodeName=="[node2]"){
		 		x = 204 + 134/2 + 60 ;
		 	} else if (node=="[结束]"){
		 		x = 833 + 48/2;
		 	} 
		 return x;
	 }
	 
	 function translateNodey(nodeName){
		 var y = 0;
		 if (nodeName=="[开始]"){
		 		y = 102 + 48/2;
		 	} else if (fromnnodeNameode=="[发起项目立项申请]"){
		 		y = 98 + 52/2;		
		 	} else if (nodeName=="[综合办公室审批]"){
		 		y = 99 + 52/2;
		 	}  else if (nodeName=="[exclusive1]"){
		 		y = 98 + 48/2;
		 	} else if (nodeName=="[node1]"){
		 		y = 219;
		 	} else if (nodeName=="[node2]"){
		 		y = 219;
		 	} else if (node=="[结束]"){
		 		y = 98 + 48/2;
		 	} 
		 return y;
	 }
	 
	 function translateDxFromNodes(nodeName1,nodeName2,totalFrames){
		 var xdistance = translateNodex(nodeName2)-translateNodex(nodeName1);
		 return xdistance/totalFrames;
	 }
	 
	 function translateDyFromNodes(nodeName1,nodeName2){
		 var ydistance = translateNodey(nodeName2)-translateNodey(nodeName1);
		 return ydistance/totalFrames;
	 }*/

	 initGame();
	 g.run(20);
}());