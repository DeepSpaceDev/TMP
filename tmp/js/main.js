Polymer({
	is: 'tmp-game',

	ready: function(){
		generateMap();
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