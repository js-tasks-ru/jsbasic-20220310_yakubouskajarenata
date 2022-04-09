function showSalary(users, age) {
	let names2 = users.filter(item => {
		if (item.age <= age) {
			return item
		}
	});

	let names3 = names2.map(value => { return (`${value.name}, ${value.balance}`) });
	let str = names3.join(`\n`)
	return str;  // ваш код...
}
