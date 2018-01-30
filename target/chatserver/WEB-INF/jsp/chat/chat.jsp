<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	String socketurl="ws://" + request.getServerName() + ":" + request.getServerPort()+ path + "/";
%>
<!DOCTYPE HTML>
<html>
<meta charset="UTF-8" />
<head>
<base href="<%=basePath%>">

<title><%=session.getAttribute("textusername")%>的聊天界面</title>

<script src="<%=basePath%>/js/jquery-1.11.1.min.js"></script>
<script>
	var ws = null;
	var content="";
	var target ="<%=socketurl%>websocket?username=${textusername}";
	function connect() {
		//websocket服务链接
		if ('WebSocket' in window) {
			console.info(target);
			ws = new WebSocket(target);
		} else if ('MozWebSocket' in window) {
			ws = new MozWebSocket(target);
		} else {
			alert('WebSocket is not supported by this browser.');
			return;
		}
		ws.onopen = function(message) {
			console.info("连接打开");
		};
		ws.onclose = function(message) {
			console.info("连接关闭");
		};


		//此方法是用来接收后台传来的数据，前台页面和后台的数据都是json格式进行传值
		ws.onmessage = function(event) {
			console.info("信息回调成功");
			eval("var result=" + event.data);
			/* var result = event.data */
			if (result.usernames != undefined) {
				var html = "";
				$(result.usernames)
						.each(
								function() {
									html += "<li><input type='radio' value='"+this+"'name='username'>"
											+ this + "</li>";
									$("#userList").html(html);
								});
			}

			if (result.welcome != undefined) {
				$("#content").append(result.welcome + "</br>");
			}

			if (result.exit != undefined) {
				$("#content").append(result.exit + "</br>");
			}
			if (result.content != undefined) {
				$("#content").append(result.content + "</br>");
			}

		};
	}
	function send() {
		var msg = $("#sendMsg").val();
		var ss = $("#userList :checked");
		console.info(ss.val());
		var obj = null;
		//单聊
		if (ss.val() != undefined) {
			obj = {
				//type是用来区分是单聊和群聊
				type : 1,//1为单聊，2为群聊
				touser : ss.val(),
				fromuser :'${textusername}',
				message : msg
			};
		} else {
			//群聊
			obj = {
				type : 2,//1为单聊，2为群聊
				message : msg
			};
		}
		obj = JSON.stringify(obj);
		console.info(obj);
		ws.send(obj);
		$("#sendMsg").val("");
	}
</script>
</head>
<body onload="connect()">

	<div id="msg" style="width: 400px; height: 450px; border: solid 1px;">
		<p id="content"></p>
	</div>
	<div id="users"
		style="width: 150px; height: 530px; border: solid 1px; position: absolute; left: 412px; top: 8px;">
		<p>
		<ul id="userList">
		</ul>
		</p>
	</div>
	<div id="send" style="width: 400px; height: 80px; border: solid 1px;"
		align="right">
		<textarea style="width: 400px; height: 50px;" id="sendMsg"></textarea>
		<input type="button" value="发送消息" onclick="send()">
	</div>
</body>
</html>
