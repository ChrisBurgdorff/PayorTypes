function openPopup(urlString, height) {
	var h = 480;
	if(typeof height !== 'undefined') {
		h = height;
	}
	var w = 640;
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2); 

    chrome.windows.create({'url': urlString, 'type': 'popup', 'width': w, 'height': h, 'left': left, 'top': top} , function(window) {
    });
}

$("#payorTypesButton").click(function(){
	openPopup("payortypes.html", 300);
});

		
	