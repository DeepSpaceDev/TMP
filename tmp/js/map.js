function runLabAlgor(x, y){
	/** Algorithm Copyright 2015 Sebstian Schneider (sese7.de) **/

	//pick random start at border
	var curBl = "";
	if(getRandomBoolean()){ //random vertical or horizontal
		//horizontal
		var topbot = ((getRandomBoolean()) ? 0 : y - 1);
		var rightleft = getRandomInt(0, x - 1);
	}
	else{
		var topbot = getRandomInt(0, y - 1);
		var rightleft = ((getRandomBoolean()) ? 0 : x - 1);;
	}
	l(x + " " + y);
	l(rightleft + " " + topbot);
	$("#" + blocks[rightleft][topbot]).addClass("red");
}
function generateMap(bh){
	var blockHori = ((bh == undefined) ? getRandomInt(8, 25) : bh);
	var blockVerti = parseInt((blockHori / 16) * 9); //16 : 9
	var borderStr = 4;

	var posx = 0;
	var posy = 0;
	var hx = 100 / blockHori
	var hy = 100 / blockVerti;
	var mgtop = 0;
	var mgleft = 0;

	var mapc = "";
	
		for(var i = 0; i < blockHori; i++){
		    blocks[i] = [];
		    for(var j = 0; j < blockVerti; j++){
		    	mapc += "" 
		    	+ "<div id='border" + i + "" + j +"' style='height: " + hy 
		    	+ "%; width: " + hx
		    	+ "%; top: calc(" + posy 
		    	+ "% + " + ((blockVerti * borderStr) / 2 - 5) + "px); left: calc(" + posx 
		    	+ "% + " + ((blockHori * borderStr) / 2) + "px); margin-top: -" + mgtop
		    	+ "px; margin-left: -" + mgleft
		    	+ "px;' class='tmp-map border ";
		        /*blocks[i][j] = [Math.random() >= 0.8, Math.random() >= 0.8, Math.random() >= 0.8, Math.random() >= 0.8];
		        /*if(blocks[i][j][0] || j == 0){
		        	mapc += "btop ";
		        } 
		        if(blocks[i][j][1] || i == blockHori - 1){
		        	mapc += "bright ";
		        }
		        if(blocks[i][j][2] || j == blockVerti - 1){
		        	mapc += "bbottom ";
		        }
		        if(blocks[i][j][3] || i == 0){
		        	mapc += "bleft ";
		        }*/
		        mapc += "'></div>"
		        posy = posy + 100 / blockVerti;
		        mgtop = mgtop + borderStr;

		        blocks[i][j] = "border" + i + "" + j;
		    }
		    posy = 0;
		    mgtop = 0;
		    mgleft = mgleft + borderStr;
		    posx = posx + 100 / blockHori;
		}

		$("map").html(mapc);
		runLabAlgor(blockHori, blockVerti);
}