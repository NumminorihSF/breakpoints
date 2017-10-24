function run(shouldAddSource) {
	fetch('script-blackbox.js')
		.then(res => res.text())
		.then((text) => (
			shouldAddSource ? eval(`${text}\n//@ sourceURL=eval.js`) : eval(text)
		));
}
