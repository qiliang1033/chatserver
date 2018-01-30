package com.chat.utils;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Map;

import com.chat.constant.MethodHelper;

public class DataHelper {
	 public static void putDataIntoEntity(Map<String, Object> map, Object entity) throws SecurityException, ClassNotFoundException, NoSuchMethodException, IllegalAccessException, IllegalArgumentException, InvocationTargetException{  
	        if (entity != null && map != null&& map.size()>0) {  
	            //获取传入实体类的属性Filed数组  
	            Field[] field_arr = Class.forName(entity.getClass().getCanonicalName()).getDeclaredFields();  
	            //遍历数组  
	            for (Field field : field_arr) {  
	                //获取属性名称  
	                String fieldName = field.getName();  
	                //判断map中是否存在对应的属性名称（注：这个方法要想使用就必须保证map中的key与实体类的属性名称一致）  
	                if (map.containsKey(fieldName)) {  
	                    //调用本类中的帮助方法来获取当前属性名对应的方法名（“set”为getMethodName方法的第二个参数）  
	                    String methodName = getMethodName(fieldName,MethodHelper.SET_METHOD);  
	                    //获取当前key对应的值  
	                    Object obj = map.get(fieldName);  
	                    //根据获取的方法名称及当前field的类型获取method对象  
	                    Method method = entity.getClass().getDeclaredMethod(methodName, field.getType());  
	                    //调用当前实体类的方法将数值set进去  
	                    method.invoke(entity, obj);  
	                }  
	            }  
	        }  
	    }  
	  
	    /** 
	     * @author Chunf 
	     * @param key 属性名 
	     * @param MethodType 获取方法类型（set or get） 
	     * @return 方法名称，反射使用 
	     */  
	    public static String getMethodName(String key, String MethodType) {  
	        String methodName = "";  
	        if (key != null && !"".equals(key)) {  
	            String[] arr = key.split("");  
	            for (int i = 0; i < arr.length; i++) {  
	                String temp = arr[i];  
	                if (i == 1) {  
	                    methodName += temp.toUpperCase();  
	                } else {  
	                    methodName += temp;  
	                }  
	            }  
	        }  
	        return MethodType+methodName;  
	    }  
	  
}
