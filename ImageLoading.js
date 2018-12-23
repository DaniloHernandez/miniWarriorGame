	var warriorPic = document.createElement("img");
	var worldPics = [];
	
	var picsToLoad = 0;

	function countLoadedImagesAndLaunchIfReady() {
		picsToLoad --;
		console.log(picsToLoad);
		if(picsToLoad == 0) {
			imageLoadingDoneSoStartGame();
		}
	}

	function beginLoadingImage(imgVar,fileName) {
		imgVar.onload = countLoadedImagesAndLaunchIfReady;
		imgVar.src = "images/"+fileName;
	}	

	function loadImageForWorldCode(worldCode, fileName) {
		worldPics[worldCode] = document.createElement("img");
		beginLoadingImage(worldPics[worldCode], fileName);
	}

	function loadImages() {

		var imageList = [
		{varName: warriorPic, theFile: "player1warrior.png"},
		

		{worldType: worldRoad, theFile: "world_road.png"},
		{worldType: worldWall, theFile: "world_wall.png"},
		{worldType: worldGoal, theFile: "world_goal.png"},
		{worldType: worldTree, theFile: "world_tree.png"}, 
		{worldType: worldFlag, theFile: "world_flag.png"},
		{worldType: worldObstacle, theFile: "world_obstacle.png"}];

		picsToLoad = imageList.length;

		for(var i=0; i<imageList.length; i++) {
			if(imageList[i].varName != undefined) {
				beginLoadingImage(imageList[i].varName , imageList[i].theFile);
			} else {
				loadImageForWorldCode(imageList[i].worldType, imageList[i].theFile);
			}
		}
	}