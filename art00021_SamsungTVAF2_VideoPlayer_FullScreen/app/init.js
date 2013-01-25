function onStart() {
	alert('onStart()');
	// TODO : Add your Initilize code here
	sf.scene.show('VideoPlayerFull');
	sf.scene.focus('VideoPlayerFull');
}

function onDestroy () {
	alert('onDestroy()');
	// stop your XHR or Ajax operation and put codes to distroy your application here

}
alert("init.js loaded.");
