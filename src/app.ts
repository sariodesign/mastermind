import createFailedSelection from "./attempt.js";

const startButton = document.querySelector("#start-game");
const combination = document.getElementById("combination");

console.log("Combination el: ", combination);

const asideChronology = document.querySelector("#attempts-list");
const attemptMessage = document.createElement("p");
attemptMessage.textContent = "Non ci sono ancora tentativi";
asideChronology?.appendChild(attemptMessage);

export enum Colors {
	RED = "red",
	DARKBLUE = "darkBlue",
	GREEN = "green",
	PURPLE = "purple",
	ORANGE = "orange",
	LIGHTBLUE = "lightBlue",
}

const COLORS_LENGHT = 5;

let colorsToGuess: Colors[] = [];
let userChoice: Colors[] = [];

let attempts: number;

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
		// Add failed combination to chronology
		console.log("Aggiungere combinazione alla cronologia");
		console.log("Colors to guess: ", colorsToGuess);
		console.log("Colors from user: ", colorFromUser);
		asideChronology?.querySelector("p")?.remove();
		let checkOccurence = colorFromUser.map((color, index) => {
			if (
				colorsToGuess.includes(color) &&
				colorFromUser[index] === colorsToGuess[index]
			) {
				console.log("Correct color and correct position");
				return "green";
			} else if (
				colorsToGuess.includes(color) &&
				colorFromUser[index] !== colorsToGuess[index]
			) {
				console.log("Correct color and wrong position");
				return "yellow";
			} else {
				console.log("Incorrect color");
				return "red";
			}
		});
		console.log("Check occurence: ", checkOccurence);
		createFailedSelection(colorFromUser, asideChronology, checkOccurence);
		//return false;
	}
}

document.querySelector("#confirm")?.addEventListener("click", () => {
	if (check(userChoice, colorsToGuess)) {
		handleWin();
	} else {
		attempts--;
		updateAttempText(attempts.toString());
		if (attempts < 1) {
			handleLose();
		}
	}

	userChoice = [];
	document
		.querySelector("#combination")
		?.querySelectorAll(".colors")
		.forEach((color: Element) => {
			(color as HTMLElement).style.backgroundColor = "";
		});

	document
		.querySelector("#color-selection")
		?.querySelectorAll(".colors")
		.forEach((color: Element) => {
			(color as HTMLElement).style.border = "";
		});
});

/**
 * Funzione per gestire l'apertura della scheda della cronologia
 */
function handlerShowChronology() {
	const chronology = document.querySelector("#chronology");
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

				// Controllo che ci siano ancora posti disponibili per la scelta dei colori
				if (userChoice.length === COLORS_LENGHT) {
					return;
				}

				// imposto un bordo al colore scelto
				(event.target as HTMLElement).style.border = "2px solid black";

				addColorToUserChoice(color);
			});
		});
	}
}

/**
 * Funzione per rimuovere il colore scelto dall'utente dalla lista di scelte dell'utente
 */
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
 * Funzione per gestire la sconfitta dell'utente
 */
function handleLose() {
	const message = "You Lost";

	const p = document.createElement("p");
	p.innerHTML = message;

	document.querySelector(".modal-body")?.appendChild(p);

	document.getElementById("modalOpenButton")?.click();
}

/**
 * Funzione per gestire la vittoira dell'utente
 */
function handleWin() {
	const message = "You Won";

	const p = document.createElement("p");
	p.innerHTML = message;

	document.querySelector(".modal-body")?.appendChild(p);

	document.getElementById("modalOpenButton")?.click();
}

/**
 *  Funzione eseguita all'avvio del gioco
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

function getAttempts() {
	attempts = parseInt(
		(document.querySelector("#attempts") as HTMLInputElement).value
	);
	updateAttempText(attempts.toString());
	document.getElementById("attempts-input")?.classList.remove("d-flex");
	document.getElementById("attempts-input")?.classList.add("d-none");
	document.getElementById("app")?.classList.remove("d-none");
	document.getElementById("app")?.classList.add("d-flex");
}

function updateAttempText(attempt: string) {
	const attemptCounter = document.getElementById("attempt-counter");
	if (attemptCounter) {
		attemptCounter.innerHTML = `Tentativi: ${attempt}`;
	}
}

startButton?.addEventListener("click", () => {
	for (let i = 0; i < COLORS_LENGHT; i++) {
		const hiddenColor = document.createElement("div");
		hiddenColor.classList.add("colors", "border");
		combination?.appendChild(hiddenColor);
	}

	getAttempts();
	startGame();
});
