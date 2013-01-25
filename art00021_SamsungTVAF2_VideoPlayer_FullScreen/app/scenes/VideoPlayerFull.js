function SceneVideoPlayerFull(options){
	this.playList = [{
		url: 'http://10.88.76.195/heonie/testcontents/t-ara-rolypoly.mp4',
		title: 'T-ara - rolypoly (360p)',
	},{
		url: 'http://10.88.76.195/heonie/testcontents/SNSD-Gee_480p.flv',
		title: 'SNSD - Gee (480p)'
	},{
		url: 'http://10.88.76.195/heonie/testcontents/SNSD_THEBOYS_720p.flv',
		title: 'SNSD - The Boys (720p)',
	},{
		url: 'http://10.88.76.195/heonie/testcontents/IU_YOU&I_1080p.flv',
		title: 'IU - You & I (1080p)'
	}];
}

SceneVideoPlayerFull.prototype.initialize = function(){
    alert("SceneVideoPlayerFull.initialize()");
    // this function will be called only once when the scene manager show this scene first time
    // initialize the scene controls and styles, and initialize your variables here
    // scene HTML and CSS will be loaded before this function is called

	var items = [];
	for(var i=0; i<this.playList.length; i++) {
		items.push(this.playList[i].title);
	}
	$("#lstVideoPlayer").sfList({
		data: items,
		index: 0,
		itemsPerPage: 8
	}).sfList('blur');
}

SceneVideoPlayerFull.prototype.handleShow = function(){
    alert("SceneVideoPlayerFull.handleShow()");
	
	var opt = {};
	var _THIS_ = this;
	opt.onerror = function(error, info){
		//sf.service.VideoPlayer.ERR_NOERROR	= 0;
		//sf.service.VideoPlayer.ERR_NETWORK	= 1;
		//sf.service.VideoPlayer.ERR_NOT_SUPPORTED	= 2;
		var err = {};
		err[sf.service.VideoPlayer.ERR_NOERROR] = 'NoError';
		err[sf.service.VideoPlayer.ERR_NETWORK] = 'Network';
		err[sf.service.VideoPlayer.ERR_NOT_SUPPORTED] = 'Not Supported';
		_THIS_.printEvent('ERROR : ' + (err[error]||error) + (info ? ' (' + info + ')' : ''));
	};
	opt.onend = function(){
		_THIS_.printEvent('END');
	};
	opt.onstatechange = function(state, info){
		//sf.service.VideoPlayer.STATE_PLAYING	= 1;
		//sf.service.VideoPlayer.STATE_STOPPED	= 2;
		//sf.service.VideoPlayer.STATE_PAUSED	= 3;
		//sf.service.VideoPlayer.STATE_BUFFERING	= 4;
		//sf.service.VideoPlayer.STATE_SCANNING	= 5;
		var stat = {};
		stat[sf.service.VideoPlayer.STATE_PLAYING] = 'Playing';
		stat[sf.service.VideoPlayer.STATE_STOPPED] = 'Stoped';
		stat[sf.service.VideoPlayer.STATE_PAUSED] = 'Paused';
		stat[sf.service.VideoPlayer.STATE_BUFFERING] = 'Buffering';
		stat[sf.service.VideoPlayer.STATE_SCANNING] = 'Scanning';
		
		_THIS_.printEvent('StateChange : ' + (stat[state]||state) + (info ? ' (' + info + ')' : ''));
	};
	sf.service.VideoPlayer.init(opt);
}

SceneVideoPlayerFull.prototype.handleHide = function(){
    alert("SceneVideoPlayerFull.handleHide()");
    // this function will be called when the scene manager hide this scene
}

SceneVideoPlayerFull.prototype.handleFocus = function(){
    alert("SceneVideoPlayerFull.handleFocus()");
    // this function will be called when the scene manager focus this scene
	$("#keyhelp").sfKeyHelp({
		UPDOWN: 'Move Item',
		ENTER: 'Play',
		RETURN: 'Return'
	});
	$("#lstVideoPlayer").sfList('focus');
}

SceneVideoPlayerFull.prototype.handleBlur = function(){
    alert("SceneVideoPlayerFull.handleBlur()");
    // this function will be called when the scene manager move focus to another scene from this scene
	$("#lstVideoPlayer").sfList('blur');
}

SceneVideoPlayerFull.prototype.handleKeyDown = function(keyCode){
    alert("SceneVideoPlayerFull.handleKeyDown(" + keyCode + ")");
    // TODO : write an key event handler when this scene get focued
    switch (keyCode) {
        case sf.key.UP:
			$("#lstVideoPlayer").sfList('prev');
            break;
        case sf.key.DOWN:
			$("#lstVideoPlayer").sfList('next');
            break;
        case sf.key.ENTER:
			var item = this.playList[$("#lstVideoPlayer").sfList('getIndex')];
			item.fullScreen = true;
			
			sf.service.VideoPlayer.setKeyHandler(sf.key.RETURN, function () {
			    sf.service.VideoPlayer.stop();
			});
			sf.service.VideoPlayer.play(item);
            break;
    }
}

SceneVideoPlayerFull.prototype.printEvent = function(msg){
	alert("SceneVideoPlayerFull.prototype.printEvent("+msg+")");
	document.getElementById("VideoPlayerEvent").innerHTML = msg + '<br>' + document.getElementById("VideoPlayerEvent").innerHTML;
}