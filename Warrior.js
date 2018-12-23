	var drivePower = 3.0;

	function warriorClass() {

		this.x = 75;
		this.y = 75;
		this.myWarriorPic;
		this.name = "untitled warrior";
		this.keys = 0;

		this.keyHeldNorth = false;
		this.keyHeldSouth = false;
		this.keyHeldWest = false;
		this.keyHeldEast = false;

		this.controlKeyUp;
		this.controlKeyDown;
		this.controlKeyLeft;
		this.controlKeyRight;

		this.setInput = function(upKey, downKey, leftKey, rightKey) {
			this.controlKeyUp = upKey;
			this.controlKeyDown = downKey;
			this.controlKeyLeft = leftKey;
			this.controlKeyRight = rightKey;
		}
	

	
	this.reset = function(whichImage, warriorName) {
		this.name = warriorName;
		this.myWarriorPic = whichImage;
		this.speed = 0;

			for(var eachRow=0;eachRow<worldRows;eachRow++) {
				for(var eachCol=0;eachCol<worldCols;eachCol++) {

					var arrayIndex = rowColToArrayIndex(eachCol,eachRow);

					if(worldGrid[arrayIndex] == worldPlayerStart) {
						worldGrid[arrayIndex] = worldRoad;
						this.x = eachCol * worldW + worldW/2;
						this.y = eachRow * worldH + worldH/2;
						return;
					}
				}
			}
			console.log("No Player Start Found");
		}

		this.move = function() {
			var nextX = this.x;
			var nextY = this.y;

			if(this.keyHeldNorth) {
				nextY -= drivePower;
			}
			if(this.keyHeldSouth) {
				nextY += drivePower;
			}
			if(this.keyHeldEast) {
				nextX += drivePower;
			}
			if(this.keyHeldWest) {
				nextX -= drivePower;
			}

			var walkIntoTileIndex = getTileTypeAtPixelCoord(nextX, nextY);
			var walkIntoTileType = worldWall;

			if(walkIntoTileIndex != undefined) {
				walkIntoTileType = worldGrid[walkIntoTileIndex];
			}

		if(walkIntoTileType == worldGoal) {
			console.log(this.name + " WINS!");
			this.keys = 0;
			loadLevel(levelOne);
		} else if(walkIntoTileType == worldRoad) {
			this.x = nextX;
			this.y = nextY;
		} else if(walkIntoTileType == worldTree) {
			this.keys++;

			worldGrid[walkIntoTileIndex] = worldRoad;
		} else if(walkIntoTileType == worldFlag) {
			if(this.keys > 0) {
			this.keys--;
			worldGrid[walkIntoTileIndex] = worldRoad;
			}
		} else if(walkIntoTileType == worldObstacle) {
			this.keys = 0;
			loadLevel(levelOne);
		}
		}

		this.draw = function() {
		drawBitmapCenteredWithRotation(this.myWarriorPic,this.x,this.y,0);
		}
	}