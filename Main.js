	var canvas, canvasContext;

	var blueWarrior = new warriorClass();

	window.onload = function() {
		canvas = document.getElementById("gc");
		canvasContext = canvas.getContext("2d");

		
		colorText("LOADING IMAGES", canvas.width/2, canvas.height/2, 'black');

		loadImages();
	}

	function imageLoadingDoneSoStartGame() {

		var framesPerSecond = 30;
		setInterval(updateAll,1000/framesPerSecond);

		setUpInput();

		loadLevel(levelOne);
	}

		function loadLevel(whichLevel) {
		worldGrid = whichLevel.slice();
		blueWarrior.reset(warriorPic, "Blue Storm");
	}

		function updateAll() {
			drawAll();
			moveAll();
		}

		function moveAll() {
			blueWarrior.move();
		}

		function drawAll() {
		drawWorlds();
		blueWarrior.draw();
		}
	