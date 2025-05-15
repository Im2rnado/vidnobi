var x = setInterval(function() {
	// var start = new Date(2022, 3, 11, 21, 07);
	// var t = new Date() - start;
	var start = new Date(2025, 6, 1, 00, 01);
	var t = start - new Date();
	var d = Math.floor(t / 1000 / 60 / 60 / 24);
	var h = Math.floor(t / 1000 / 60 / 60 % 24);
	if(h < 10){
		h = "0" + h;
	}
	var m = Math.floor(t / 1000 / 60 % 60);
	if(m < 10){
		m = "0" + m;
	}
	var s = Math.floor(t / 1000 % 60);
	if(s < 10){
		s = "0" + s;
	}
	
	document.getElementById("d").innerHTML = d + " : " + h + " : "
  + m + " : " + s;
}, 1000);
