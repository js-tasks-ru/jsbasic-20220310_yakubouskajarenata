function highlight(table) {
	let statusCellsIndex;
	let genderCellsIndex;
	let ageCellsIndex;

	for (let r = 0; r < table.rows.length; r++) {
		for (let c = 0; c <= table.rows[0].cells.length - 1; c++) {
			if (table.rows[0].cells[c].textContent == 'Status') {
				statusCellsIndex = c;
				//console.log(statusCellsIndex);
			}
			if (table.rows[0].cells[c].textContent == 'Gender') {
				genderCellsIndex = c;
				//console.log(genderCellsIndex);
			}
			if (table.rows[0].cells[c].textContent == 'Age') {
				ageCellsIndex = c;
				//console.log(ageCellsIndex);
			}
			if (true == true) {
				if (table.rows[r].cells[statusCellsIndex].hasAttribute('data-available')) {
					if (table.rows[r].cells[statusCellsIndex].getAttribute('data-available') == 'true') {
						table.rows[r].cells[statusCellsIndex].parentElement.classList.add(' available');
					} else if (table.rows[r].cells[statusCellsIndex].getAttribute('data-available') == 'false') {
						table.rows[r].cells[statusCellsIndex].parentElement.classList.add(' unavailable');
					}
				} else { //задаю атрибут hiden:
					table.rows[r].cells[statusCellsIndex].parentElement.hidden = true;//задаю атрибут hiden
				}
			}
			if (true == true) {
				if (table.rows[r].cells[genderCellsIndex].textContent == 'm') {
					table.rows[r].cells[genderCellsIndex].parentElement.classList.add(' male');
				} else if (table.rows[r].cells[genderCellsIndex].textContent == 'f') {
					table.rows[r].cells[genderCellsIndex].parentElement.classList.add(' female');
				}
			};
			if (true == true) {
				let numAgeCellsIndex = table.rows[r].cells[ageCellsIndex].innerHTML;
				if (numAgeCellsIndex * 1 < 18) {
					table.rows[r].cells[genderCellsIndex].parentElement.style.textDecoration = 'line-through';
				}
			};
		}
	}
	//console.log(statusCellsIndex);
	//console.log(genderCellsIndex);
	//console.log(ageCellsIndex);
}