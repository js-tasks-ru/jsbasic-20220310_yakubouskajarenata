function makeFriendsList(friends) {
	/*document.insertAdjacentHTML('beforeEnd', '<ul></ul>');
	let ul = document.querySelector('ul');
	let namesAndSurnames = friends.map(function (item) {
		return `${item.firstName} ${item.lastName}`
	});
	for (let persons of namesAndSurnames) {
		ul.insertAdjacentHTML('afterBegin', `<li>${persons}</li>`);
	}		//ваш код...*/
	let ul = document.createElement('ul');
	for (let i = 0; i < friends.length; i++) {
		let li = document.createElement('li');
		li.innerHTML = `${friends[i].firstName} ${friends[i].lastName}`
		ul.append(li);
	}
	return ul;
}
