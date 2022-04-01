function makeDiagonalRed(table) {

	/*table.rows[0].cells[0].style.backgroundColor = 'red';
	//table.rows[1].cells[1].style.backgroundColor = 'red';
	//table.rows[2].cells[2].style.backgroundColor = 'red';
	//table.rows[3].cells[3].style.backgroundColor = 'red';
	//table.rows[4].cells[4].style.backgroundColor = 'red';*/
	/*  --- РЕШЕНИЕ ПРЕПОДОВАТЕЛЯ :
 let rowsLength = table.rows.length;
  let rows = table.rows;
	
  for (let i = 0; i < rowsLength; i++) {
	 let row = rows[i];
	 row.cells[i].style.backgroundColor = 'red';
  }
  */
	for (i = 0; i < table.rows.length; i++) {
		table.rows[i].cells[i].style.backgroundColor = 'red';

	}
	/*for (i = 4; 0 <= i < table.rows.length; i--) {
		table.rows[i].style.backgroundColor = 'red';
	}
		for (t = 0; t < table.rows.length; t++) {
	table.rows[i].cells[t].style.backgroundColor = 'red';
	}
	}
	table.rows[i].cells[i].style.backgroundColor = 'red';*/
}
