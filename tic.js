var display = "X";
var boxColor = "blue";

function nextMove(box){	
	if (box.textContent == ''){
		box.textContent = display;
		box.style.backgroundColor = boxColor;
        switchTurn();	
	} else {
		alert("Please choose another square, this square is already taken!");
	}
}

function switchTurn(){
	var message = document.getElementById("message");
	if (display == "X"){
		display = "O";
		boxColor = "green";
	} else {
		display = "X";
		boxColor = "blue";
	}
	message.textContent = display + " Goes!";
}

function reset(){
	var gameBoxes = document.getElementsByClassName("box");
	for (var i = 0; i < gameBoxes.length; i++){
		gameBoxes[i].style.backgroundColor='beige';
		gameBoxes[i].textContent='';
	}
}


// function switchTurn(){
