var Main = {};

var widgetAPI = new Common.API.Widget();        // Creates Common module
var tvKey = new Common.API.TVKeyValue();

Main.onShowHandler = function() {
	
	//$('#message').html('on show handler called');
	
	var pluginAPI = new Common.API.Plugin();
	var nnaviPlugin = document.getElementById('pluginObjectNNavi');
	nnaviPlugin.SetBannerState(2);
	
	// For volume OSD
	pluginAPI.unregistKey(tvKey.KEY_VOL_UP);
	pluginAPI.unregistKey(tvKey.KEY_VOL_DOWN);
	pluginAPI.unregistKey(tvKey.KEY_MUTE);
	
}

Main.onLoad = function () {
	
	window.onShow = Main.onShowHandler;
	
	//document.getElementById("anchor").focus();
	widgetAPI.sendReadyEvent();	
	//$('#message').html('sending ready event');
	
}

Main.keyDown = function(event) {
/*
		var keyCode = event.keyCode;
		alert("Main Key code : " + keyCode);
		switch (keyCode) {
			case tvKey.KEY_LEFT:
				alert("left");
				break;
			case tvKey.KEY_RIGHT:
				alert("right");
				break;
			case tvKey.KEY_UP:
				alert("up");
				break;
			case tvKey.KEY_DOWN:
				alert("down");
				break;
			case tvKey.KEY_ENTER:
				alert("enter");
				break;
			case tvKey.KEY_RETURN:
				break;
		}
*/
}