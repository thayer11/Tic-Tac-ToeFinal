function Box(id) {
	this.content = " ";
	this.color = " ";
	this.location = id;
}
var Box1 = new Box("a");
var Box2 = new Box("b");
var Box3 = new Box("c");
var Box4 = new Box("d");
var Box5 = new Box("e");
var Box6 = new Box("f");
var Box7 = new Box("g");
var Box8 = new Box("h");
var Box9 = new Box("i");

function Turn(){
	this.content = "X";
	this.color = "Blue";
}

Turn.prototype = {
	switch: function(){
if ("Blue" === this.color){
	this.color = "Green";
	this.content = "O";
}
else {
	this.color = "Blue";
	this.content = "X";
}
}
}
var move = new Turn();
this.content = "X";
this.boxColor = "Blue";

Function nextMove(box){}
document.getElementById("message").addEventListener("click", Turn());

Reset.prototype = {
	new: function(){

	}
}
//useless commment here.