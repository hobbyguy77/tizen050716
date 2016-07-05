//Initialize function
var init = function () {
	// TODO:: Do your initialization job
	console.log("init() called");
	
	$("#str1").css("color", "red").css("font-size", "40");
	
	$("#str2").css("color", "orange").css("text-decoration", "underline");
	
	$("#str3").css("color", "yellow").css("font-weight", "bold");
	
	$("#str4").css("color", "green").css("font-style", "italic");
	
	$("#str5").css("color", "blue").css("text-decoration", "line-through");
	
	$("#str6").css("color", "violet");

	// add eventListener for tizenhwkey
	document.addEventListener('tizenhwkey', function(e) {
		if( e.keyName === "back" ) {
            var activePopup = document.querySelector( '.ui-popup-active' ),
                page = document.getElementsByClassName( 'ui-page-active' )[0],
                pageid = page ? page.id : "";

            if( pageid === "one" && !activePopup ) {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {
                }
            } else {
                window.history.back();
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