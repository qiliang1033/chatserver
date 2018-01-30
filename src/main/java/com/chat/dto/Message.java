package com.chat.dto;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import com.chat.model.TUser;
import com.google.gson.Gson;

public class Message {
	private List<TUser> users;
	private String content;
	private String username;
	private String welcome;
	private String exit;
	private Gson gson = new Gson();

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getWelcome() {
		return welcome;
	}

	public void setWelcome(String welcome) {
		this.welcome = welcome;
	}

	public String getExit() {
		return exit;
	}

	public void setExit(String exit) {
		this.exit = exit;
	}


	public List<TUser> getUsers() {
		return users;
	}

	public void setUsers(List<TUser> users) {
		this.users = users;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public void setContent(String msg, String username) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date date = new Date();
		date.getTime();
		String dateStr = sdf.format(date);
		String content = dateStr + " " + username + "说：" + msg;
		this.content = content;
	}

	public void setContent(String msg, String username, String toUsername) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date date = new Date();
		date.getTime();
		String dateStr = sdf.format(date);
		String content = dateStr + " " + username + "对" + toUsername + "说：" + msg;
		this.content = content;
	}

	public String toJson() {
		return gson.toJson(this);
	}
}
