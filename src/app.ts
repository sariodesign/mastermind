enum Colors {
	RED = "#8B0000",
	DARKBLUE = "#00008B",
	GREEN = "#006400",
	PURPLE = "#4B0082",
	ORANGE = "#FF4500",
	LIGHTBLUE = "#008B8B",
}

const COLORS_LENGHT = 4;

function generateRandomListOfColors() {
	let colors: Colors[] = [
		Colors.RED,
		Colors.DARKBLUE,
		Colors.GREEN,
		Colors.PURPLE,
		Colors.ORANGE,
		Colors.LIGHTBLUE,
	];
	let randomColors: Colors[] = [];

	for (let i = 0; i < COLORS_LENGHT; i++) {
		const randomColor = Math.floor(Math.random() * 6);
		if (randomColors.includes(colors[randomColor])) {
			i--;
			continue;
		}
		randomColors.push(colors[randomColor]);
	}

	// return randomColors;
	console.log(randomColors);
}

generateRandomListOfColors();
