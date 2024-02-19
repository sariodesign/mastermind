// TODO: Add correct types

function attemptFailed(colors:any) {
	let attemptFailed = document.createElement('div');
	attemptFailed.classList.add('attempt-failed');
	colors.forEach((color:any) => {
		let colorElement = document.createElement('div');
		colorElement.classList.add('attempt-item');
		colorElement.style.backgroundColor = color;
		attemptFailed.appendChild(colorElement);
	});
	console.log('Failed')
	return attemptFailed;
}

function attemptSuggestions(occurrence:String[]) {
	let shuffleOccurrence = occurrence.sort(() => Math.random() - 0.5);
	console.log('Occurrence: ', occurrence);
	console.log('Occurrence shuffle: ', shuffleOccurrence);
	let attemptSuggestions = document.createElement('div');
	attemptSuggestions.classList.add('attempt-suggestion');
	shuffleOccurrence.forEach((color:any) => {
		let colorElement = document.createElement('div');
		colorElement.classList.add('attempt-suggestion-item');
		colorElement.style.backgroundColor = color;
		attemptSuggestions.appendChild(colorElement);
	});
	return attemptSuggestions;

}

function createFailedSelection(selection:any, element:any, occurrence:any) {
	let failedElement = document.createElement('div');
	failedElement.classList.add('attempt-failed-container');
	failedElement.appendChild(attemptSuggestions(occurrence));
	failedElement.appendChild(attemptFailed(selection));
	element.appendChild(failedElement);
	
	console.log('Failed: ', selection);
	console.log('Element where show: ', element);
}

export default createFailedSelection;