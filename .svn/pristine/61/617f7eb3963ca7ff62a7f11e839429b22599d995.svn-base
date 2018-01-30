package com.chat.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chat.mapper.TUserMapper;
import com.chat.model.TUser;

@Service
public class UserService {
	@Autowired
	private TUserMapper userMapper;
	
	public int save(TUser user){
		userMapper.setCharsetToUtf8mb4();
		return userMapper.insertSelective(user);
		
	}
	
	public int update(TUser user){
		userMapper.setCharsetToUtf8mb4();
		return userMapper.updateByPrimaryKeySelective(user);
		
	}
	public int delete(Integer userid){
		return userMapper.deleteByPrimaryKey(userid);
		
	}
	
	public List<TUser> list(){
		return userMapper.selectAll();
	}
	
	public TUser getUserInfoByOpenid(String openid){
		System.out.println("openid = "+openid);
		return userMapper.getUserInfoByOpenid(openid);
	}

}
