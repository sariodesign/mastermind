import { Colors } from "./app";

function attemptFailed(colors: Colors[]) {
	let attemptFailed = document.createElement("div");
	attemptFailed.classList.add("attempt-failed");
	colors.forEach((color) => {
		let colorElement = document.createElement("div");
		colorElement.style.width = "50px";
		colorElement.style.height = "50px";
		colorElement.style.backgroundColor = color;
		attemptFailed.appendChild(colorElement);
	});
	return attemptFailed;
}

function createFailedSelection(selection: Colors[], element: Element | null) {
	if (element) {
		element.appendChild(attemptFailed(selection));
	}

	console.log("Failed: ", selection);
	console.log("Element where show: ", element);
}

export default createFailedSelection;
