//Initialize function
var init = function () {
	// TODO:: Do your initialization job
	console.log("init() called");

	// add eventListener for tizenhwkey
	document.addEventListener('tizenhwkey', function(e) {
		if(e.keyName == "back") {
			try {
				tizen.application.getCurrentApplication().exit();
			} catch (error) {
				console.error("getCurrentApplication(): " + error.message);
			}
		}
	});
};
// window.onload can work without <body onload="">
window.onload = init;


function showHideIcon() {
	var icon = document.getElementById('icon1');
	icon.style.visibility = (icon.style.visibility === "hidden") ? "visible" : "hidden";
}

function showScreenRes() {
	document.getElementById('resText').innerHTML = (document.getElementById('resText').innerHTML === "") ? screen.height + "x" + screen.width : "";
}