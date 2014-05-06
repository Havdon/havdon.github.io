window.onload = function() {
	var t = new Trianglify({
		x_gradiant: ["#ece7f2","#a6bddb","#2b8cbe"],
		y_gradient: ["#ece7f2","#a6bddb","#2b8cbe"],
		noiseIntensity: 0.2, 
	    cellpadding: 1, 
	    cellsize: 20
	});
	var headerDiv = document.getElementById('logoLink');
	var pattern = t.generate(headerDiv.offsetWidth, headerDiv.offsetHeight);
	headerDiv.setAttribute('style', 'background-image: '+pattern.dataUrl);
}