package com.chat.mapper;

import org.apache.ibatis.annotations.Param;

import com.chat.model.TUser;
import com.chat.utils.MyMapper;

public interface TUserMapper extends MyMapper<TUser> {
	
	 TUser getUserInfoByOpenid(@Param("openid")String openid);
	 
	  void setCharsetToUtf8mb4();
}