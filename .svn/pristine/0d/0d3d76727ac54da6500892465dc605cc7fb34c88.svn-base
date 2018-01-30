package com.chat.controller;

import java.io.UnsupportedEncodingException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {

	@RequestMapping("/")
	public String tologin() {
		return "index";
	}

	@RequestMapping("/login")
	public String login(String username, String password, HttpServletRequest request, HttpServletResponse response) {
		try {
			response.setContentType("text/html");
			request.setCharacterEncoding("UTF-8");
			request.getSession().setAttribute("textusername", username);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return "chat/chat";
	}
}
