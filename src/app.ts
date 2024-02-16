enum Colors {
	RED = "red",
	DARKBLUE = "darkBlue",
	GREEN = "green",
	PURPLE = "purple",
	ORANGE = "orange",
	LIGHTBLUE = "lightBlue",
}

const COLORS_LENGHT = 4;

let colorsToGuess: Colors[] = [];
let userChoice: Colors[] = [];

function generateRandomListOfColors() {
	const colors = [
		Colors.LIGHTBLUE,
		Colors.ORANGE,
		Colors.PURPLE,
		Colors.GREEN,
		Colors.DARKBLUE,
		Colors.RED,
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

/**
 * Funzione per gestire il controllo della combinazione scelta dall'utente
 */
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

document.querySelector("#confirm")?.addEventListener("click", () => {
	console.log(check(userChoice, colorsToGuess));
});

/**
 * Funzione per gestire l'apertura della scheda della cronologia
 */
function handlerShowChronology() {
	const chronology = document.querySelector("#chronology");
	console.log("Show/Hide");
	if (chronology) {
		console.log("Show");
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

/**
 * Funzione per settare i colori da scegliere
 */
function setColors() {
	const COLORS = [
		Colors.LIGHTBLUE,
		Colors.ORANGE,
		Colors.PURPLE,
		Colors.GREEN,
		Colors.DARKBLUE,
		Colors.RED,
	];

	const colorSelection = document.getElementById("color-selection");

	if (colorSelection) {
		(
			Array.from(
				colorSelection.querySelectorAll(".colors")
			) as HTMLElement[]
		).forEach((color) => {
			color.style.backgroundColor = COLORS.pop() as string;

			// Aggiungo l'evento ad ogni colore per gestire la scelta dell'utente
			color.addEventListener("click", (event) => {
				// Recupero il colore scelto dall'utente
				let color = (event.target as HTMLElement).dataset
					.color as Colors;

				// Controllo se il colore è già stato scelto
				if (userChoice.includes(color)) {
					(event.target as HTMLElement).style.border = "";
					removeColorFromUserChoice(color);
					return;
				}

				// Controllo che ci siano massimo quattro colori
				if (userChoice.length === 4) {
					return;
				}

				// imposto un bordo al colore scelto
				(event.target as HTMLElement).style.border = "2px solid black";

				addColorToUserChoice(color);
			});
		});
	}
}

function removeColorFromUserChoice(color: Colors) {
	userChoice = userChoice.filter((c) => c !== color);
	console.log(userChoice);
	const combination = document.getElementById("combination");
	combination
		?.querySelectorAll(".colors")
		.forEach((color: Element, index) => {
			if (userChoice[index]) {
				(color as HTMLElement).style.backgroundColor =
					userChoice[index];
			} else {
				(color as HTMLElement).style.backgroundColor = "";
			}
		});
}

/**
 * Funzione per aggiungere il colore scelto dall'utente alla lista di scelte dell'utente
 */
function addColorToUserChoice(color: Colors) {
	userChoice.push(color);
	console.log(userChoice);
	const combination = document.getElementById("combination");
	combination
		?.querySelectorAll(".colors")
		.forEach((color: Element, index) => {
			if (userChoice[index]) {
				(color as HTMLElement).style.backgroundColor =
					userChoice[index];
			}
		});
}

/**
 *  funzione eseguita all'avvio del gioco
 */
function startGame() {
	// setto i colori
	setColors();

	// genero i colori da indovinare
	colorsToGuess = generateRandomListOfColors();
	console.log(colorsToGuess);
}

/**
 * Aggiunta evento per gestire la chiusura della scheda della cronologia quando si clicca fuori dalla scheda
 */
document.addEventListener("click", (event) => {
	if (
		event.target !== document.querySelector("#show-chronology") &&
		event.target !== document.querySelector("#chronology")
	) {
		handlerHideChronology();
	}
});

// TODO: impostare la funzione che deve essere eseguita dopo la scelta del numero di tentativi
startGame();
