function getMinMax(str) {
	let strToArray = str.split(' ');
	let strWithNumbersAndNAN = strToArray.map(item => { return Number(item) });
	let strWithNumbers = strWithNumbersAndNAN.filter(item => {
		if (isNaN(item) === !true) {
			return item;
		}
	});
	let sortStrWithNumbers = strWithNumbers.sort((a, b) => { return a - b });
	let result = {};
	result.min = sortStrWithNumbers[0];
	result.max = sortStrWithNumbers[sortStrWithNumbers.length - 1];

	return result;
}  // ваш код...

