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

	return randomColors;
}

function check(colorFromUser: Colors[], colorsToGuess: Colors[]) {
	let result = {
		correctColorAndPosition: 0,
		correctColor: 0,
	};

	for (let i = 0; i < COLORS_LENGHT; i++) {
		if (colorFromUser[i] === colorsToGuess[i]) {
			result.correctColorAndPosition++;
		} else if (colorsToGuess.includes(colorFromUser[i])) {
			result.correctColor++;
		}
	}

	if (result.correctColorAndPosition === COLORS_LENGHT) {
		return true;
	} else {
		return false;
	}
}

document.querySelector("#controlla")?.addEventListener("click", () => {
	// todo: implementare la logica di gioco
	// check();
});

/**
 * Funzione per gestire l'apertura della scheda della cronologia
 */

function handlerShowChronology() {
	const chronology = document.querySelector("#chronology");
	console.log("Show/Hide")
	if (chronology) {
		chronology.classList.add("show");
	}
}

/**
 * Funzione per gestire la chiusura della scheda della cronologia
 */

function handlerHideChronology() {
	const chronology = document.querySelector("#chronology");
	if (chronology) {
		chronology.classList.remove("show");
	}
}

/**
 * Aggiungo l'evento per mostrare la cronologia
 */
document.querySelector("#show-chronology")?.addEventListener("click", () => {
	handlerShowChronology();
});

/**
 * Aggiungo l'evento per nascondere la cronologia
 */
document.querySelector("#hide-chronology")?.addEventListener("click", () => {
	handlerHideChronology();
});
