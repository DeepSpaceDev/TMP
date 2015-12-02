Polymer({
	is: 'tmp-game',

	ready: function(){
		generateMap();
	}
});

function l(s){
	console.log(s);
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}