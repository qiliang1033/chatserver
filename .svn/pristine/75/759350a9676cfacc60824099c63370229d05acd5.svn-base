package com.chat.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONException;
import com.alibaba.fastjson.JSONObject;
import com.chat.model.TUser;
import com.chat.pojo.ResultVO;
import com.chat.pojo.UserinfoVO;
import com.chat.service.UserService;
import com.chat.utils.CopyUtils;
import com.chat.utils.HttpsUtil;
import com.chat.utils.UserInfoUtil;

@RestController
public class LoginController {

	private Logger logger = LoggerFactory.getLogger(getClass());
	@Autowired
	private UserService userService;

	@RequestMapping("/url")
	public ResultVO wecahtLogin(@RequestParam(name = "code", required = true) String code) {
		ResultVO result = new ResultVO();
		// 1. 用户同意授权,获取code
		logger.info("收到微信重定向跳转.");
		logger.info("用户同意授权,获取code:{} , state:{}", code);
		// 2. 通过code换取网页授权access_token
		if (code != null || !("".equals(code))) {
			String APPID = "wxeeb7bc8943517fac";
			String SECRET = "a8e9bc8bcf6d350f3fa6425901994416";
			String CODE = code;
			String WebAccessToken = "";
			String openId = "";
			String REDIRECT_URI = "https://shopping.zhangfangyuan.com/chatserver/url";
			String SCOPE = "snsapi_userinfo";

			String getCodeUrl = UserInfoUtil.getCode(APPID, REDIRECT_URI, SCOPE);
			logger.info("第一步:用户授权, get Code URL:{}", getCodeUrl);

			// 替换字符串，获得请求access token URL
			String tokenUrl = UserInfoUtil.getWebAccess(APPID, SECRET, CODE);
			logger.info("第二步:get Access Token URL:{}", tokenUrl);

			// 通过https方式请求获得web_access_token
			String response = HttpsUtil.httpsRequestToString(tokenUrl, "GET", null);

			JSONObject jsonObject = JSON.parseObject(response);
			logger.info("请求到的Access Token:{}", jsonObject.toJSONString());

			// {
			// "access_token":"ACCESS_TOKEN",
			// "expires_in":7200,
			// "refresh_token":"REFRESH_TOKEN",
			// "openid":"OPENID",
			// "scope":"SCOPE",
			// "unionid": "o6_bmasdasdsad6_2sgVt7hMZOPfL"
			// }

			if (null != jsonObject) {
				try {
					WebAccessToken = jsonObject.getString("access_token");
					openId = jsonObject.getString("openid");
					logger.info("获取access_token成功!");
					logger.info("WebAccessToken:{} , openId:{}", WebAccessToken, openId);
					result.setCode(100);
					result.setMsg("获取openid成功");
					result.setData(openId);
				} catch (JSONException e) {
					logger.error("获取Web Access Token失败");
				}
				return result;
			}
		}
		return null;
	}

	@RequestMapping(value = "/saveuserinfo", method = RequestMethod.POST)
	public ResultVO saveUserInfo(String userinfo, String openid, HttpServletRequest request,
			HttpServletResponse response) {
		ResultVO result = new ResultVO();
		try {
			response.setContentType("text/json;charset=utf-8");
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.setHeader("Access-Control-Allow-Methods", "GET,POST");
			logger.info("获取用户信息成功:userinfo{} , openid:{}", userinfo, openid);
			JSONObject json = JSONObject.parseObject(userinfo);
			if (json != null) {
				UserinfoVO model = JSONObject.toJavaObject(json, UserinfoVO.class);
				System.out.println("头像:" + model.getAvatarUrl());
				TUser user = userService.getUserInfoByOpenid(openid);
				logger.info("查询用户信息成功:tuser为  : {} ", user);
				if (user != null) {
					CopyUtils.Copy(model, user);
					user.setOpenid(openid);
					int i = userService.update(user);
					if (i > 0) {
						result.setCode(100);
						result.setMsg("修改用户信息成功");
					}
				} else {
					user = new TUser();
					CopyUtils.Copy(model, user);
					user.setOpenid(openid);
					int i = userService.save(user);
					if (i > 0) {
						result.setCode(100);
						result.setMsg("保存用户信息成功");
					}
				}
				result.setData(model);
			}
		} catch (Exception e) {
			result.setCode(200);
			result.setMsg("保存用户信息失败");
			e.printStackTrace();
		}
		return result;
	}
}
