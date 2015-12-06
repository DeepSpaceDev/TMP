function l(s){
	console.log(s);
}
function getRandomBoolean(){
	return Math.random() >= 0.5;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomString(length) {
	var text = '';
	var pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (var i = 0; i < length; i++) {
		text += pool.charAt(Math.floor(Math.random() * pool.length));
	}
	return text;
}
function getRotation(id){
	var st = window.getComputedStyle(document.getElementById(id), null);
	var tr = st.getPropertyValue("-webkit-transform") ||
	         st.getPropertyValue("-moz-transform") ||
	         st.getPropertyValue("-ms-transform") ||
	         st.getPropertyValue("-o-transform") ||
	         st.getPropertyValue("transform");
	if(tr == "none"){
		return 0;
	}
	// rotation matrix - http://en.wikipedia.org/wiki/Rotation_matrix
	var values = tr.split('(')[1];
	    values = values.split(')')[0];
	    values = values.split(',');
	var a = values[0];
	var b = values[1];
	var c = values[2];
	var d = values[3];
	var scale = Math.sqrt(a*a + b*b);
	// arc sin, convert from radians to degrees, round
	var sin = b/scale;
	var angle = Math.round(Math.asin(sin) * (180/Math.PI));
	return angle;
}