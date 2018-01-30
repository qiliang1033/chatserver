package com.chat.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chat.mapper.TMessageMapper;
import com.chat.model.TMessage;

@Service
public class MessageService {
	@Autowired
	private TMessageMapper messageMapper;
	public int save(TMessage message){
		messageMapper.setCharsetToUtf8mb4();
		return messageMapper.insertSelective(message);
		
	}

}
