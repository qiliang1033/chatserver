package com.chat.constant;

public class CodeStatus {/*

	private static final int success=200;   //这个最容易理解，就是正确的请求返回正确的结果，如果不想细分正确的请求结果都可以直接返回200。
	private static final int successcreated=201;   //表示资源被正确的创建。比如说， 我们 POST 用户名、密码正确创建了一个用户就可以返回 201。
	private static final int successcreated=202   //请求是正确的，但是结果正在处理中，没法返回对应的结果。比如说，我们请求一个需要大量计算的结果，但是并没有计算结束时，可以返回这个，这时候客户端可以通过轮询等机制继续请求。
	private static final int successcreated=203;  //请求的代理服务器修改了源服务器返回的 200 中的内容，一般用不到。比如说，我们通过代理服务器向服务器 A 请求用户信息,服务器 A 正常响应，但代理服务器命中了缓存并返回了自己的缓存内容，这时候它返回 203 告诉我们这部分信息不一定是最新的，我们可以自行判断并处理。204 请求正确，但是没有需要返回的内容。比如说，我们请求删除某个用户，删除成功可以返回 204。205 类似 204，但是要求请求者重置视图，一般也用不到。比如说，我们请求删除某个用户，服务器返回 205 的话，我们就刷新现在的用户列表。206 请求成功，但根据请求头只返回了部分内容。比如说，我们下载一部片，共有 10 部分，我们把请求也分成了 10 次（防止一次请求过大），这时候服务器就可以返回 206 并在其头部告诉我们这是哪一部分，然后再根据这个信息进行拼装。// 分割线
	private static final int successcreated=300;  //请求成功，但结果有多种选择。比如说，我们下载一部片，服务器有 avi、mp4 等格式，这时候可以返回 300，并在 body 里告知有哪些格式，然后用户可以根据这些格式再次请求。
	private static final int successcreated=301;  //请求成功，但是资源被永久转移。比如说，我们要下载葫芦娃，但是由于旧的存储服务商涨价了，现在要使用新的存储服务了，要去新地址下载，这时候可以返回 301，并在 header的 Location 中告知新的地址，以后也应当到这个地址下载。
	private static final int successcreated=302; //请求成功，但是资源被临时转移了。和 301 不同的是，除非是 HEAD 请求，否则新地址的信息应当在 body 中返回，并且资源只是临时转移，以后不应当通过新地址来下载。
	private static final int successcreated=303; //类似 302，但要求使用 GET 来访问新的地址来获取资源。
	private static final int successcreated=304; //请求的资源并没有被修改过。比如说，我们发送请求想看看 5.20 后的情侣信息，服务器查询没有新的情侣信息产生，这时候可以返回 304，然后客户端可以继续用旧的数据。
	private static final int successcreated=305; //请求的资源必须通过代理访问。比如说，我们想请求服务器 A上新的 iPhone 的信息，但是需要通过代理服务器才能访问，如果直接请求了服务器 A，没有经过代理服务器，这时候服务器 A 就可以返回 305 从而告诉我们应当访问代理服务器。
	private static final int successcreated=306 ; //不用了。
	private static final int successcreated=307; // 类似 302，但要求使用原有的请求方式来通过新地址获取资源。
	private static final int successcreated=308; //类似 301，但要求使用原有的请求方式来通过新地址获取资源。
	
	*//******************************************************************************************//*
	private static final int requesterror=400 ;//请求出现错误，比如请求头不对等，所有不想明确区分的客户端请求出错都可以返回 400。
	private static final int error=401 ;//没有提供认证信息。比如说， 请求的时候没有带上 Token 等。
	private static final int error=402;// 为将来的需要所保留的状态码。
	private static final int error=403;// 请求的资源不允许访问。比如说， 你使用普通用户的 Token 去请求管理员才能访问的资源。
	private static final int error=404 ;//请求的内容不存在。
	private static final int error=405 ;//请求的方法不允许使用。比如说， 服务器只实现了 PATCH 了局部更新资源， 并没有实现 PUT 来替换资源， 而我们使用了 PUT，这时候服务器可以返回 405 来告知并没有实现对 PUT 的相关处理。
	private static final int error=406 ;//请求的资源并不符合要求。比如说， 我们 header 里请求 JSON 格式的数据， 但是服务器只有 XML 格式的数据，这时候可以返回 406 告知。
	private static final int error=407;// 类似 401，但是要求必须去同代理服务器进行认证。
	private static final int error=408;// 客户端请求超时。 我们想 POST 创建一个用户，虽然建立了连接，但是网络不好，服务器在规定时间内没有得到我们的请求信息，这时候服务器可以返回 408 告诉我们超时了。然后我们可以重新发送请求。
	private static final int error=409 ;//请求冲突。比如说，服务器要求不同用户不能重名，服务器已经有了一个名叫小伟的用户，这时候我们又想创建一个名叫小伟的用户，服务器可以返回 409，告诉我们冲突了， 也可以在 body 中明确告知是什么冲突了。
	private static final int error=410;// 请求资源曾经存在，但现在不存在了。比如说，我们下载葫芦娃，但是因为版权被删了，下载不了了，这时候服务器返回 410，告诉我们洗洗早点睡。
	private static final int error=411;// 没有提供请求资源的长度。比如说，我们下载葫芦娃，服务器只允许我们分部分下载，我们如果不告诉服务器我们要下载哪部分，服务器就返回 411 警告我们。
	private static final int error=412;// 请求的资源不符合请求头中的 IF-*的某些条件。比如说，我们下载葫芦娃，然后在请求头告知服务器要 5.20 后更新过的，服务器没有，于是返回了 412。
	private static final int error=413 ;//请求体过大。比如说，服务器要求上传文件不能超过 5 M， 但是我们 POST 了 10 M，这时候就返回 413。
	private static final int error=414; //请求的 URI 太长了。比如说， 我们提供了太多的 Query 参数，以至于超过了服务器的限制，这时候可以返回 414。
	private static final int error=415;// 不支持的媒体类型。比如说， 我们上传了一张七娃的 GIF 动图， 而服务器只允许你上传 PNG 图片，这时候就返回 415。
	private static final int error=416 ;//请求的区间无效。比如说，我们分部分下载时请求葫芦娃的 10 分钟到 12 分钟的内容，但是这部葫芦娃只有 1 分钟的内容，这时候就返回 416。
	private static final int error=417;// 预期错误。 指服务器没法满足我们在请求头里的 Expect 相关的信息。
	private static final int error=418 ;//我是个茶壶。这是一个愚人节的玩笑，这个状态码就是用来搞笑的。
	
	*//*********************************************************************************************//*
	
	private static final int error=500 ;//服务器错误。没法明确定义的服务器错误都可以返回这个。
	private static final int error=501 ;//请求还没有被实现。比如说，我们请求一个接口来自动拒绝项目经理的要求，但是这个接口只是美好的想象，并没有被实现，这时候可以返回 501。
	private static final int error=502 ;//网关错误。比如说， 我们向服务器 A 请求下载葫芦娃， 但是 A 其实只是一个代理服务器， 他得向 B 请求葫芦娃， 但是不知道为啥 B 不理他或者给他错误， 这时候哦可以 A 返回 502 用来表示 B 这家伙傲娇了。
	private static final int error=503;// 服务暂时不可用。比如说，服务器正好在更新代码重启。
	private static final int error=504 ;//类似 502， 但是这时候是 B 不理 A，超时了。
	private static final int error=505;// 请求的 HTTP 版本不支持。比如说， 现在强行根据 HTTP 1000 来请求。
*/}
