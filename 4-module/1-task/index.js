function makeFriendsList(friends) {
	document.body.insertAdjacentHTML('beforeEnd', '<ul></ul>');
	let ul = document.querySelector('ul');
	let namesAndSurnames = friends.map(function (item) {
		return `${item.firstName} ${item.lastName}`
	});
	for (let persons of namesAndSurnames) {
		ul.insertAdjacentHTML('afterBegin', `<li>${persons}</li>`);
	}		// ваш код...*/
}
