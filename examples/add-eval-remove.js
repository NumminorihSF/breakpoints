function run() {
	fetch('script-blackbox.js')
		.then(res => res.text())
		.then(eval);
}
