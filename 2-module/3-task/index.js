let calculator = {
	read(arg1, arg2) {

		return calculator.value1 = arg1, calculator.value2 = arg2;

	},
	sum() {
		let s = Number(this.value1) + Number(this.value2);
		return s;
	},
	mul() {
		let m = this.value1 * this.value2;
		return m;
	},// ваш код
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
