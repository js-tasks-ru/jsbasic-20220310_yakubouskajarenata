function toggleText() {
	let btn = document.querySelector('.toggle-text-button');
	let div = document.getElementById('text');
	btn.addEventListener('click', divHider);
	function divHider() {
		div.hidden = !div.hidden;

	}
}