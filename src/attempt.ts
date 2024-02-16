// TODO: Add correct types

function attemptFailed(colors:any) {
	let attemptFailed = document.createElement('div');
	attemptFailed.classList.add('attempt-failed');
	colors.forEach((color:any) => {
		let colorElement = document.createElement('div');
		colorElement.style.width = '50px';
		colorElement.style.height = '50px';
		colorElement.style.backgroundColor = color;
		attemptFailed.appendChild(colorElement);
	});
	return attemptFailed;
}

function createFailedSelection(selection:any, element:any) {
	element.appendChild(attemptFailed(selection));
	
	console.log('Failed: ', selection);
	console.log('Element where show: ', element);
}

export default createFailedSelection;