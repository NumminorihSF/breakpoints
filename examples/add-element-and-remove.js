function run() {
	const div = document.createElement('div');

	div.style = [
		'height: 100px',
		'background: #d00'
	].join(';');

	document.getElementById('target').appendChild(div);
	setTimeout(function(){
		document.getElementById('target').removeChild(div);
	}, 5000);
}
