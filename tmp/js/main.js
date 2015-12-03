Polymer({
	is: 'tmp-map',

	ready: function(){
		generateMap();
		mapTo_16_9();
	}
});

var blocks = [];

function l(s){
	console.log(s);
}
function getRandomBoolean(){
	return Math.random() >= 0.5;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function mapTo_16_9(){
	$("map").height(((window.innerWidth / 16 ) * 9));
}