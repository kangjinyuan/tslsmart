$(function() {
	param.accountName = "管理员";
	param.defaultUrl = "";
	loadVue(param);
	resetSize();
	getLanguage(setData.accountName, function(res) {
		setData.accountName = res[res.length - 1].dst;
		setTimeout(function() {
			var timestamp = new Date().getTime()
			setData.defaultUrl = "index.html?timestamp=" + timestamp
		}, 1000);
	});
})

window.onresize = function() {
	resetSize();
}

function resetSize() {
	var windowHeight = $(document).height();
	$(".main-box").height(windowHeight - 78);
}