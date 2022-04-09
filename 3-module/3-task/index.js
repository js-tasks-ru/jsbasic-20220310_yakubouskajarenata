function camelize(str) {
	let strSplited = str.split('-');
	let strMaped = strSplited.map((val, index) => index == 0 ? val : val[0].toUpperCase() + val.slice(1));
	let strJoined = strMaped.join('');
	return strJoined
} // ваш код...
