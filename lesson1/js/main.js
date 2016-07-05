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
	
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.font = "30px Arial";
	ctx.fillText("Tizen",10,30);
	ctx.font = "10px Courier new";
	ctx.fillStyle = "blue";
	ctx.fillText("Javascript",10,50);
	ctx.font = "50px Impact";
	ctx.fillStyle = "red";
	ctx.fillText("HTML5",50,60);
	ctx.font = "70px Verdana";
	ctx.fillStyle = "green";
	ctx.fillText("canvas",100,100);
	
	var c2 = document.getElementById("chessCanvas");
	var ctx2 = c2.getContext("2d");
	ctx2.fillStyle = "#000000";
	for(j=0; j<8; j++){
		for(i=0; i<8; i++){
			if(j%2==0)
				ctx2.fillRect(40+i*80,j*40,40,40);
			else
				ctx2.fillRect(i*80,j*40,40,40);
		}
	}
	

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