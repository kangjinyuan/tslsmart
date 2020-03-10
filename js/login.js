var code;
$(function() {
	var queryText = "";
	var placeholderArray = ["用户名", "登录密码", "验证码"];
	param.checkCode = "";
	param.placeholderArray = placeholderArray;
	loadVue(param);
	createCode();
	for(var i = 0; i < placeholderArray.length; i++) {
		queryText += placeholderArray[i] + "\n";
	}
	getLanguage(queryText, function(res) {
		judeLineFeed(res, function(res) {
			setData.placeholderArray = res;
		});
	})
})

//验证码登录
function createCode() {
	code = new Array();
	var codeLength = 4; //验证码的长度
	var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
	for(var i = 0; i < codeLength; i++) {
		var charIndex = Math.floor(Math.random() * 32);
		code += selectChar[charIndex];
	}
	if(code.length != codeLength) {
		createCode();
	}
	setData.checkCode = code;
}

window.onkeydown = function(ev) {
	var ev = ev || window.event;
	if(ev.keyCode == 13) {
		login();
	};
}

//登录方法
function login() {
	var timestamp = new Date().getTime();
	var inputCode = $("#inputCode").val().toUpperCase();
	if($('#account').val() == "") {
		layer.msg("请输入用户名！");
		return false;
	}
	if($('#password').val() == "") {
		layer.msg("请输入登录密码！");
		return false;
	}
	if(inputCode == "") {
		layer.msg("请输入验证码！");
		return false;
	}
	if(inputCode != code) {
		layer.msg("验证码输入错误！");
		return false;
	}
	//	var param = {
	//		account: $('#account').val(),
	//		password: $("#password").val()
	//	}
	//	request('POST', '/api/internal/login', param, true, function(res) {
	//		window.localStorage.setItem("accessToken", res.accessToken);
	//		window.localStorage.setItem("localHost", host);
	//		window.location.href = "main.html?timestamp=" + timestamp;
	//	}, function(res) {
	//		layer.msg("登录失败，请检查网络或重试");
	//	})
	window.location.href = "main.html?timestamp=" + timestamp;
}