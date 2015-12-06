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
function getRotation(obj) {
  var matrix = obj.css("-webkit-transform") ||
  obj.css("-moz-transform")    ||
  obj.css("-ms-transform")     ||
  obj.css("-o-transform")      ||
  obj.css("transform");
  if(matrix !== 'none') {
    var values = matrix.split('(')[1].split(')')[0].split(',');
    var a = values[0];
    var b = values[1];
    var angle = Math.atan2(b, a) * (180/Math.PI);
  } else { var angle = 0; }
  return (angle < 0) ? angle +=360 : angle;
}
function intersects(obj1, obj2) {
  var rect1 = obj1.getBoundingClientRect();
  var rect2 = obj2.getBoundingClientRect();

  return !(rect1.right < rect2.left || 
           rect1.left > rect2.right ||
           rect1.bottom < rect2.top ||
           rect1.top > rect2.bottom);
}