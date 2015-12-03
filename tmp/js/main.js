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
	if(((window.innerWidth / 16) * 9) < window.outerHeight){
		$("map").height(((window.innerWidth / 16 ) * 9));
		$("map").css("top", (window.outerHeight - ((window.innerWidth / 16) * 9)) / 3); 
	}
	if(((window.outerHeight / 9) * 16) < window.innerWidth){
		$("map").width(((window.outerHeight / 9 ) * 16));
		$("map").css("left", (window.innerWidth - ((window.outerHeight / 9) * 16)) / 2);
	}
}