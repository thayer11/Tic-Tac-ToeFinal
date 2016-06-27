 function box(id) {
	this.content = " ";
 	this.color = " ";
	this.location = id;
 }
 var box1 = new box("a");
 var box2 = new box("b");
 var box3 = new box("c");
 var box4 = new box("d");
 var box5 = new box("e");
 var box6 = new box("f");
 var box7 = new box("g");
 var box8 = new box("h");
 var box9 = new box("i");

function turn(){
	this.content = "X";
	this.color = "Blue";
}
turn.prototype = {
	turn: function(){
		var message = document.getElementbyId("message");
		if ("Blue" === this.color){
			this.color = "Green";
			this.content = "O";
		}
		else {
			this.color = "Blue";
			this.content = "X";
		}
		message.textContent = this.display + "Goes!";
		}
	},
	nextMove: function(box) {
			if (this.box.textContent = " "){
			this.box.textContent = this.content;
			this.box.style.backgroundColor = this.color;
			// switch: function();
		} else {
			alert("Please choose another square, this square is already taken!");
		}
	},
	reset: function(){
		var gameBoxes = document.getElementsByClassName("box");
		for (var i = 0; i < gameBoxes.length; i++){
			this.gameBoxes[i].style.backgroundColor='beige';
			this.gameBoxes[i].textContent='';
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