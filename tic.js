// function Box(id) {
// 	this.content = " ";
// 	this.color = " ";
// 	this.location = id;
// }
// var Box1 = new Box("a");
// var Box2 = new Box("b");
// var Box3 = new Box("c");
// var Box4 = new Box("d");
// var Box5 = new Box("e");
// var Box6 = new Box("f");
// var Box7 = new Box("g");
// var Box8 = new Box("h");
// var Box9 = new Box("i");

function Turn(){
	this.display = "X";
	this.boxColor = "Blue";
}
Turn.prototype = {
	nextMove: function(box) {
			if (this.box.textContent = " "){
			this.box.textContent = this.content;
			this.box.style.backgroundColor = this.color;
			// switch: function();
		} else {
			alert("Please choose another square, this square is already taken!");
		}
	},
	switch: function(){
		var message = document.getElementbyId("message");
		if ("Blue" === this.color){
			this.boxColor = "Green";
			this.display = "O";
		}
		else {
			this.boxColor = "Blue";
			this.display = "X";
		}
		message.textContent = this.display + "Goes!";
	},
	reset: function(){
		var gameBoxes = document.getElementsByClassName("box");
		for (var i = 0; i < gameBoxes.length; i++){
			gameBoxes[i].style.backgroundColor='beige';
			gameBoxes[i].textContent='';
		} 
	}
}



// Turn.prototype = {
// 	switch: function(){
// 		if ("Blue" === this.color){
// 			this.color = "Green";
// 			this.content = "O";
// 		}
// 		else {
// 			this.color = "Blue";
// 			this.content = "X";
// 		}
// 	}
// }


// var move = new Turn();
// this.content = "X";
// this.boxColor = "Blue";

// Function nextMove(box){
// 	if (box.textContent = " "){
// 		box.textContent = this.content;
// 		box.style.backgroundColor = this.color;
// 	switch: function();
// 	} else {
// 		alert("Please choose another square, this square is already taken!");
// 	}

// }

//useless commment here.