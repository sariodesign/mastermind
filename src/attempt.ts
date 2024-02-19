import { Colors } from "./app";

function attemptFailed(colors: Colors[]) {
	let attemptFailed = document.createElement("div");
	attemptFailed.classList.add("attempt-failed");
	colors.forEach((color) => {
		let colorElement = document.createElement("div");
		colorElement.style.width = "50px";
		colorElement.style.height = "50px";
		colorElement.style.backgroundColor = color;
		colorElement.style.borderRadius = "100%";
		attemptFailed.appendChild(colorElement);
	});
	console.log("Failed");
	return attemptFailed;
}

function attemptSuggestions(occurrence: String[]) {
	let shuffleOccurrence = occurrence.sort(() => Math.random() - 0.5);
	console.log("Occurrence: ", occurrence);
	console.log("Occurrence shuffle: ", shuffleOccurrence);
	let attemptSuggestions = document.createElement("div");
	attemptSuggestions.classList.add("attempt-suggestion");
	shuffleOccurrence.forEach((color: any) => {
		let colorElement = document.createElement("div");
		colorElement.classList.add("attempt-suggestion-item");
		colorElement.style.backgroundColor = color;
		attemptSuggestions.appendChild(colorElement);
	});
	return attemptSuggestions;
}

function createFailedSelection(
	selection: Colors[],
	element: Element | null,
	occurrence: String[]
) {
	let failedElement = document.createElement("div");
	failedElement.classList.add("attempt-failed-container");
	failedElement.appendChild(attemptSuggestions(occurrence));
	failedElement.appendChild(attemptFailed(selection));
	element?.appendChild(failedElement);

	console.log("Failed: ", selection);
	console.log("Element where show: ", element);
}

export default createFailedSelection;
