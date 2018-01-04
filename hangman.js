var wordlist = ["astronaut", "space", "moon", "planet","antimatter","asteroid","meteor","mars","constellation","star","interstellar","supernova","galaxy","neptune","andromeda","nebula","jupiter","astronomical","telescope"];
var letters = "abcdefghijklmnopqrstuvwxyz";
var wins = 0;
function gameStart(){
	this.guesses=12;
	this.attempts=[];
	this.secretword=wordlist[Math.floor(Math.random()*wordlist.length)];
		var blankDiv = document.getElementById("blanksList");
		blankDiv.innerHTML = "";
		document.getElementById("guessed").innerHTML="";
		document.getElementById("guesses").innerHTML="12";
		document.getElementById("status-text").innerText="Press any key to start!"
	for (var i=0;i<this.secretword.length;i++){
		var newBlank=document.createElement("li");
		newBlank.innerHTML="_";
		newBlank.setAttribute("value",this.secretword[i]);
		newBlank.setAttribute("revealed","false");
		newBlank.setAttribute("class","blank");
		blankDiv.appendChild(newBlank);
	}
};
var game = new gameStart();
var blanks = document.getElementsByClassName("blank");
document.addEventListener("keydown",function(){
	var win=true;
	console.log(event.key)
	var inword=false;
	for(var i=0;i<blanks.length;i++){
		if(blanks[i].getAttribute("value")===event.key){
			blanks[i].innerHTML=blanks[i].getAttribute("value");
			blanks[i].setAttribute("revealed","true");
			inword=true;
		}
		if (blanks[i].getAttribute("revealed")=="false"){
			console.log(blanks[i].getAttribute("revealed"))
			win=false;
		}
	}
	if (inword==false && 
		game.attempts.indexOf(event.key)==-1 && 
		letters.indexOf(event.key)!=-1&&
		game.guesses>0){
			document.getElementById("guesses").innerHTML=--game.guesses;
			game.attempts.push(event.key);
			var newAttempt=document.createElement("li");
			newAttempt.innerHTML=event.key;
			document.getElementById("guessed").appendChild(newAttempt);
			if (game.guesses==0){
				document.getElementById("status-text").innerHTML="You lose!"
				for (var i=0;i<blanks.length;i++){
					blanks[i].innerHTML=blanks[i].getAttribute("value");
			}
		}
	}
	if (win){
		document.getElementById("status-text").innerHTML="You win!";
		document.getElementById("wincount").innerHTML=++wins;
	}
})
document.getElementById("restart").addEventListener("click",function(){
	game= new gameStart();
});