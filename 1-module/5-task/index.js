function truncate(str, maxlength) {
	let strLength = str.length;
	if (strLength < maxlength) {
		return (str);
	} // ваш код...
	else {
		let newStr = str.slice(0, maxlength - 1) + '...';
		return (newStr);
	}
}
truncate('Вот, что мне хотелось бы сказать на эту тему:', 20);
truncate('Всем привет!', 20);