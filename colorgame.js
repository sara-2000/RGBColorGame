var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

resetButton.addEventListener("click" , function(){
	reset();
});

function setUpModeButtons(){
	for(var i=0 ; i<modeButtons.length ; i++){
		modeButtons[i].addEventListener("click" , function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6 ;
			reset();
		});
	}
}

function setUpSquares(){
	for(var i=0 ; i< squares.length ; i++){
		//adding click listeners
		squares[i].addEventListener("click" , function(){
			var clickedColor = this.style.backgroundColor;
			//compare with picked color
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again";
			}
		});	
    }
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color rgb display
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i=0 ; i<squares.length ; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New colors";
	messageDisplay.textContent = "";
};

// easyBtn.addEventListener("click" , function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0 ; i<squares.length ; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click" , function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0 ; i<squares.length ; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });
function changeColors(color){
	for(var i=0 ; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
	
function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for(var i=0 ; i<num ; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return array 
	return arr;
}	

function randomColor(){
	//pick a random number for red
	var r = Math.floor(Math.random() * 256);
	//pick a random number for green
	var g = Math.floor(Math.random() * 256);
	//pick a random number for blue
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g + ", " + b + ")";	
}




