function run() {
	const script = document.createElement('script');
	script.src = 'script-blackbox.js';
	script.type = 'text/javascript';
	document.body.appendChild(script);
	document.body.removeChild(script);
}
