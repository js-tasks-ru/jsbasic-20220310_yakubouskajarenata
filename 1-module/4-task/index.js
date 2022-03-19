function checkSpam(str) {
	let str1 = str.toLowerCase()
	if (str1.includes("1xbet") || str1.includes("xxx")) {
		return true;
	}
	else {
		return false;
	}
	// ваш код...
}
checkSpam('1XbeT now');
checkSpam('free xxxxx');
checkSpam('innocent rabbit');
