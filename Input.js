	var leftArrow = 37;
	var upArrow = 38;
	var rightArrow = 39;
	var downArrow = 40;

	var w = 87;
	var a = 65;
	var s = 83;
	var d = 68;

	var mouseX =0;
	var mouseY =0;

	function setUpInput() {
		canvas.addEventListener("mousemove",updateMousePos);

		document.addEventListener("keydown",keyPressed);
		document.addEventListener("keyup",keyReleased);

		blueWarrior.setInput(upArrow,downArrow,leftArrow,rightArrow);
	}

	function updateMousePos(evt) {
		var rect = canvas.getBoundingClientRect();
		var root = document.documentElement;

		mouseX = evt.clientX - rect.left - root.scrollLeft;
		mouseY = evt.clientY - rect.top - root.scrollTop;

	}

	function keySet(keyEvent, setTo) {
		if(keyEvent.keyCode == blueWarrior.controlKeyLeft) {
			blueWarrior.keyHeldWest = setTo;
		}

			if(keyEvent.keyCode == blueWarrior.controlKeyRight) {
			blueWarrior.keyHeldEast = setTo;
		}

			if(keyEvent.keyCode == blueWarrior.controlKeyUp) {
			blueWarrior.keyHeldNorth = setTo;
		}

			if(keyEvent.keyCode == blueWarrior.controlKeyDown) {
			blueWarrior.keyHeldSouth = setTo;
		}

	}

	function keyPressed(evt) {
		keySet(evt,true);

		evt.preventDefault();
	}

	function keyReleased(evt) {
		keySet(evt,false);
	}