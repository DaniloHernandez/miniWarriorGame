	var worldW = 50;
	var worldH = 50;
	var worldCols = 16;
	var worldRows = 12;

	var levelOne =[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				   1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				   1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				   1, 0, 0, 4, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				   1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				   1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				   1, 1, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				   1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				   1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				   1, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				   1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

	var worldGrid = [];

	var worldRoad = 0;
	var worldWall = 1;
	var worldPlayerStart = 2;
	var worldGoal = 3;
	var worldTree = 4;
	var worldFlag = 5;
	var worldObstacle = 6;

	var worldGap = 2;

	function returnTileTypeAtColRow(col,row) {
			if(col >= 0 && col < worldCols && row >= 0 && row < worldRows) {
				var worldIndexUnderCoord = rowColToArrayIndex(col,row);
				return (worldGrid[worldIndexUnderCoord]);
			} else {
				return worldWall;
			}

		}

		function getTileTypeAtPixelCoord(atX,atY) {
			var warriorWorldX = Math.floor(atX/worldW);
			var warriorWorldY = Math.floor(atY/worldH);
			var worldIndexUnderWarrior = rowColToArrayIndex(warriorWorldX,warriorWorldY);

			if(warriorWorldX >= 0 && warriorWorldX < worldCols && warriorWorldY >= 0 && warriorWorldY < worldRows) {
			
				return worldIndexUnderWarrior;
			}
			return undefined;
		}

		function rowColToArrayIndex(col,row) {
			return col + worldCols * row;
		}

		function drawWorlds() {

			var arrayIndex = 0;
			var drawTileX = 0;
			var drawTileY = 0;

			for(var eachRow=0;eachRow<worldRows;eachRow++) {
				for(var eachCol=0;eachCol<worldCols;eachCol++) {
					
					var tileKindHere = worldGrid[arrayIndex];
					if(tileTypeHasTransparency(tileKindHere)) {
						canvasContext.drawImage(worldPics[worldRoad],drawTileX,drawTileY);
					}
					var useImg = worldPics[tileKindHere];
					canvasContext.drawImage(useImg,drawTileX,drawTileY);

					drawTileX += worldW;
					arrayIndex++;
				}
				drawTileY += worldH;
				drawTileX = 0;
			}
		}

		function tileTypeHasTransparency(tileType) {
			if(tileType == worldFlag || worldTree || worldGoal){
				return true
			}
		}