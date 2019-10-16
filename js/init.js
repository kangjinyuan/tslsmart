$(function() {
	param.timestamp = "";
	param.currentTime = "";
	param.accountName = accountInfo.name;
	loadVue(param);
	loadData();
	loadTime();
	resetSize();
})

window.onresize = function() {
	resetSize();
}

function resetSize() {
	var windowHeight = $(document).height();
	$(".main-box").height(windowHeight - 78);
}

//加载菜单数据
function loadData() {
	var timestamp = new Date().getTime();
	setData.communityName = communityInfo.name;
	setData.timestamp = timestamp;
}

//加载当前时间
function loadTime() {
	var loadTime = setInterval(function() {
		var checkI = judeToken();
		if(checkI == true) {
			var date = new Date();
			setData.currentTime = resetTime(date, 0);
		}
	}, 1000);
}