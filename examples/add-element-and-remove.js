function modifySubtree(parent) {
	const div = document.createElement('div');

	div.style = [
		'height: 50px',
		'background: #d0'
	].join(';');

	parent.appendChild(div);
}

function run() {
	const div = document.createElement('div');

	div.style = [
		'height: 100px',
		'background: #d00'
	].join(';');

	document.getElementById('target').appendChild(div);
	setTimeout(function(){
		modifySubtree(div);
	}, 1000);
	setTimeout(function(){
		document.getElementById('target').removeChild(div);
	}, 5000);
}
