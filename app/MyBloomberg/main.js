
/*
var MyBloomberg = (function($){
	// Call API for Volume OSD
	this.onShowEvent = function() {
		var nnaviPlugin = document.getElementById('pluginObjectNNavi');
		nnaviPlugin.SetBannerState(2);

		// For volume OSD
		pluginAPI.unregistKey(tvKey.KEY_VOL_UP);
		pluginAPI.unregistKey(tvKey.KEY_VOL_DOWN);
		pluginAPI.unregistKey(tvKey.KEY_MUTE);
	};
	
	this.keyDown = function(event) {            // Key handler
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
	};
	
}(jquery));
*/


var onShowHandler = function() {
	
	$('#message').html('on show handler called');
	
	var pluginAPI = new Common.API.Plugin();
	var nnaviPlugin = document.getElementById('pluginObjectNNavi');
	nnaviPlugin.SetBannerState(2);

	
	// For volume OSD
	pluginAPI.unregistKey(tvKey.KEY_VOL_UP);
	pluginAPI.unregistKey(tvKey.KEY_VOL_DOWN);
	pluginAPI.unregistKey(tvKey.KEY_MUTE);
	
}




$(window).load(function () {
	
	window.onShow = onShowHandler;
	
	document.getElementById("anchor").focus();
	var widgetAPI = new Common.API.Widget();
	widgetAPI.sendReadyEvent();
	//document.getElementById("anchor").focus();
	//$('#anchor').bind('keyDown', MyBloomberg.keyDown);
	
	$('#message').html('sending ready event');
	
});