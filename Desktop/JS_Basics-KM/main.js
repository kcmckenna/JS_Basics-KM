alert("Hello Again!");

// First item on list: Variables added together //

var y = 87;
var x = 53;
var letters = {y: 87, x:53};
var result = x + y;

console.log(x + y);
console.log(result);

// Second item on List: Multi-dimensional array //

var nintendo = ["Mario", "Link", "Kirby"];
var xBox = ["Halo", "Fable", "Fallout"];
var playstation = ["Call of Duty", "Gears of War", "Horizon Zero Dawn"];
var videoGames = [nintendo, xBox, playstation]

console.log(videoGames[0][1]);
console.log(videoGames[2][0]);

// Third item on List: Is it Under 100? //

var age = 77;

if (age < 100) {
	alert("Your age is less than 100");
} else {
	alert("Your age " + age + " is not less than 100");
}

// Fourth item on List: Declared Argument Function //

function alertName(whoIsThis) {  

	return alert("Kevin"); 
} 

alertName("Kevin");


// Fifth item on List: Prize Doors //

function behindThisDoor(doorNum) {

	if (doorNum === 1) {
		return alert("Vacation");
	} else if (doorNum === 2) {
		return alert("Pile of Dirt");
	} else if (doorNum === 3) {
		return alert("New Car");
	} else {
		return alert("Not a Door ya Dingus!");
	}

}

behindThisDoor(2);