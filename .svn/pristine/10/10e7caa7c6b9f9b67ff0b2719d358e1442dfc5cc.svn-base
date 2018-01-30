<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<html>
<head>
<title>登陆界面</title>
</head>
<body>
	<fieldset>
		<tr height="170">
			<td width="570px"> </td>
			<td> </td>
		</tr>
		<tr>
			<td> </td>
			<td><table>
					<form method="POST" action="login" name="frmLogin">
						<tr>
							<td>用户名：</td>
							<td><input type="text" name="username" value="" size="20"
								maxlength="20" /></td>
							<td> </td>
							<td> </td>
						</tr>
						<tr>
							<td>密  码：</td>
							<td><input type="password" name="password" value=""
								size="20" maxlength="20" /></td>
							<td> </td>
							<td> </td>
						</tr>
						<tr>
							<td><input type="checkbox" name="zlogin" value="1">自动登录</td>
						</tr>
				</table></td>
		<tr>
			<td> </td>
			<td><table>
					<tr>
						<td><input type="submit" name="login" value="登录"
							onClick="return validateLogin()" /></td>
						<td><input type="reset" name="rs" value="重置"></td>
					</tr>
					</tr>
				</table></td>
			</table>
	</fieldset>
	</form>
	<script language="javascript">
		function validateLogin() {
			var sUserName = document.frmLogin.username.value;
			var sPassword = document.frmLogin.password.value;

			if ((sUserName == "") || (sUserName == "Your name")) {
				alert("请输入用户名!");
				return false;
			}

			if ((sPassword == "") || (sPassword == "Your password")) {
				alert("请输入密码!");
				return false;
			}
		}
	</script>
</body>
</html>