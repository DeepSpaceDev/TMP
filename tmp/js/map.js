function generateMap(bh, bv){
	var blockHori = ((bh == undefined) ? getRandomInt(8, 25) : bh);
	var blockVerti = ((bv == undefined) ? getRandomInt(5, 20) : bv);
	var borderStr = 4;

	var blocks = [];
	var posx = 0;
	var posy = 0;
	var hx = 100 / blockVerti;
	var hy = 100 / blockHori;
	var mgtop = 0;
	var mgleft = 0;

	var mapc = "";
	
		for(var i = 0; i < blockHori; i++){
		    blocks[i] = [];
		    for(var j = 0; j < blockVerti; j++){
		    	mapc += "" 
		    	+ "<div style='height: " + hx 
		    	+ "%; width: " + hy 
		    	+ "%; top: calc(" + posy 
		    	+ "% + " + ((blockVerti * borderStr) / 2 - 5) + "px); left: calc(" + posx 
		    	+ "% + " + ((blockHori * borderStr) / 2) + "px); margin-top: -" + mgtop
		    	+ "px; margin-left: -" + mgleft
		    	+ "px;' class='tmp-game border ";
		        blocks[i][j] = [Math.random() >= 0.8, Math.random() >= 0.8, Math.random() >= 0.8, Math.random() >= 0.8];
		        if(blocks[i][j][0] || j == 0){
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
		        }
		        mapc += "'></div>"
		        posy = posy + 100 / blockVerti;
		        mgtop = mgtop + borderStr;
		    }
		    posy = 0;
		    mgtop = 0;
		    mgleft = mgleft + borderStr;
		    posx = posx + 100 / blockHori;
		}

		$("map").html(mapc);

}