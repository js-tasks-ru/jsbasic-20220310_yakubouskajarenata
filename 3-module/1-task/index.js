function namify(users) {
	let usersNameArray = [];
	for (let keyUsers = 0; keyUsers < users.length; keyUsers++) {
		for (let keyObjectUsers in users[keyUsers]) {
			if (keyObjectUsers.includes('name')) {
				usersNameArray.push(`${users[keyUsers][keyObjectUsers]}`);
			}
		}

	}
	return usersNameArray;
}