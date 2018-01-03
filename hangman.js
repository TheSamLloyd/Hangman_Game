var wordlist = ["astronaut", "space", "moon", "planet","antimatter","asteroid","meteor","mars","constellation","star"];
var letters = "abcdefghijklmnopqrstuvwxyz";
var wins = 0;
var game = {
	guesses:12,
	attempts:[],
// steps:
// generate a random word from a list
	secretword: wordlist[Math.floor(Math.random()*wordlist.length)],
// listen for keypresses
};
console.log(game);
var blankDiv = document.getElementById("blanksList")
for (var i=0;i<game.secretword.length;i++){
	var newBlank=document.createElement("li");
	newBlank.innerHTML="_";
	newBlank.setAttribute("value",game.secretword[i]);
	newBlank.setAttribute("class","blank");
	blankDiv.appendChild(newBlank);
}
var blanks = document.getElementsByClassName("blank");
document.addEventListener("keydown",function(){
	console.log(event.key)
	var inword=false;
	var revCount=0;
	for(var i=0;i<blanks.length;i++){
		if(blanks[i].getAttribute("value")===event.key){
			blanks[i].innerHTML=blanks[i].getAttribute("value");
			inword=true;
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
})