window.onload=function() {
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


function Turn(content, color){
	this.content= content;
	this.color = color;
}

Turn.prototype = {
	turn: function(){
		var message = document.getElementById("message");
		if ("Blue" === this.color){
			this.color = "Green";
			this.content = "O";
		}
		else {
			this.color = "Blue";
			this.content = "X";
		}
		message.textContent = this.display + "Goes!";
		},
	nextMove: function(box) {
		console.log('in here');
			console.log(box);
			if (box.content = " "){
			box.textContent = this.content;
			box.color = this.color;
			this.turn();
			for (var i = 0; i < 9; i++);
			document.querySelector("#a").innerHTML = this.content; 		
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

var move = new Turn("X","Blue");


document.querySelector("#a").addEventListener("click",function(){move.nextMove(box1)});
document.querySelector("#b").addEventListener("click",function(){move.nextMove(box2)});
document.querySelector("#c").addEventListener("click",function(){move.nextMove(box3)});
document.querySelector("#d").addEventListener("click",function(){move.nextMove(box4)});
document.querySelector("#e").addEventListener("click",function(){move.nextMove(box5)});
document.querySelector("#f").addEventListener("click",function(){move.nextMove(box6)});
document.querySelector("#g").addEventListener("click",function(){move.nextMove(box7)});
document.querySelector("#h").addEventListener("click",function(){move.nextMove(box8)});
document.querySelector("#i").addEventListener("click",function(){move.nextMove(box9)});
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