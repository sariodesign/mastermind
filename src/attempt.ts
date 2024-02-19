// TODO: Add correct types

function attemptFailed(colors:any) {
	let attemptFailed = document.createElement('div');
	attemptFailed.classList.add('attempt-failed');
	colors.forEach((color:any) => {
		let colorElement = document.createElement('div');
		colorElement.style.width = '40px';
		colorElement.style.height = '40px';
		colorElement.style.backgroundColor = color;
		colorElement.style.borderRadius = '100%';
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