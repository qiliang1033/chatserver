package com.chat.websocket;


import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.chat.dto.Message;
import com.chat.model.TMessage;
import com.chat.model.TUser;
import com.chat.service.MessageService;
import com.chat.service.UserService;
import com.chat.utils.SpringUtil;
import com.google.gson.Gson;

/**
 * @ServerEndpoint 注解是一个类层次的注解，它的功能主要是将目前的类定义成一个websocket服务器端,
 * 注解的值将被用于监听用户连接的终端访问URL地址,客户端可以通过这个URL来连接到WebSocket服务器端
 */
@ServerEndpoint(value = "/websocket")
//@Component
public class WebSocketTest {
	private Logger logger = LoggerFactory.getLogger(getClass());
	//是用来记录有多少websocket有多少session在运行  
    private static List<Session> sessions = new ArrayList<Session>();  
    //用来记录有多少个用户使用该websocket通道  
    private static List<TUser> users = new ArrayList<TUser>();  
    //用来记录用户名和该session进行绑定  
    private static Map<String,Session> map = new HashMap<String, Session>();  
    private String openid;  
    private Gson gson = new Gson();  
    

	@Autowired
    private MessageService messageService;
	@Autowired
    private UserService userService;
	private TUser user= null;
    //打开链接  
    @OnOpen  
    public void open(Session session){  
    	userService= SpringUtil.getBean(UserService.class);
    	messageService=SpringUtil.getBean(MessageService.class);
        sessions.add(session);  
        String str = session.getQueryString();//可以得到ws：//路径？后面的所有字符串  
        openid = str.split("=")[1];  
        user = userService.getUserInfoByOpenid(openid);
        try {  
        	openid = URLDecoder.decode(openid, "utf-8"); 
        	 logger.info("用户信息 :{}","openid:{}",user,openid);
        } catch (UnsupportedEncodingException e) {  
            e.printStackTrace();  
        }
       
        if(user!=null){
        	  logger.info("用户信息, 昵称:  {}",user.getNickName());
        	  users.add(user);  
              map.put(openid, session);  
              Message msg = new Message();  
             
              msg.setWelcome("欢迎"+user.getNickName()+":进入聊天室");  
              msg.setUsers(users);
              broadSend(sessions, msg.toJson()); 
        }
       
    }  
      
    //关闭连接  
    @OnClose  
    public void close(Session session){
        System.out.println(session.getId()+":已经关闭");  
        String str = session.getQueryString();  
        openid = str.split("=")[1];  
        try {  
        	openid = URLDecoder.decode(openid, "utf-8");  
        } catch (UnsupportedEncodingException e) {  
            e.printStackTrace();  
        }  
        if(user!=null){
        users.remove(user);  
        sessions.remove(session);  
        Message msg = new Message();  
        msg.setExit(user.getNickName()+":离开聊天室");  
        msg.setUsers(users);  
        broadSend(sessions, msg.toJson());  
        }
    }  
      
    //客户端和服务器之间信息处理  
    @OnMessage  
    public void sendMessage(Session session,String msg){  
        TMessage v = gson.fromJson(msg,TMessage.class);  
        System.out.println(v.toString());
        if (v.getType()==2) {  
            Message message = new Message();  
            message.setUsers(users);  
            message.setContent(v.getMessage(),user.getNickName());  
            broadSend(sessions,message.toJson());  
        }else {  
            //单聊  
        	Message message = new Message();  
            String toUsername = v.getTouser();  
            Session to_Session = map.get(toUsername);  
            Session from_Session = map.get(openid);  
            message.setContent(v.getMessage(),v.getFromuser(),toUsername);  
            System.out.println(message.toJson());  
            try {  
                to_Session.getBasicRemote().sendText(message.toJson());  
                from_Session.getBasicRemote().sendText(message.toJson());  
            } catch (IOException e) {  
                e.printStackTrace();  
            }  
        }  
        messageService.save(v);
    }  
      
    //实现群聊  
    public void broadSend(List<Session> ss,String msg){  
        for (Session session : ss) {  
            try {  
                session.getBasicRemote().sendText(msg);  
            } catch (IOException e) {  
                e.printStackTrace();  
            }  
        }  
    }  }