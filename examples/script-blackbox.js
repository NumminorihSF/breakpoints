(function(){
	const ARGS = Array.from({ length: 1000 }).map(x => Math.floor(Math.random() * 10 - 1));

	function justCall(arg){
		return window[String.fromCharCode(77,97,116,104)][String.fromCharCode(108,111,103)](arg);
	}

	function run() {
		for(let i = 0; i < ARGS.length; i++) {
			const res = justCall(ARGS[i]);
			console.log(res);
		}
	}

	run();
})();
