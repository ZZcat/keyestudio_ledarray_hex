var state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var result = "";

function buttonClick(btn, x, y) {
	if (state[y] % (2**(x+1)) >= (2**x)) {
		btn.style.backgroundColor = "white";
		state[y] = state[y] - 2**x;
	} else {
		btn.style.backgroundColor = "green";
		state[y] = state[y] + 2**x;
	}
	var result = "{";
	result = result+("0x"+state[0].toString(16));
	for (var i=1; i<16; i++) {
		result = result+(",0x"+state[i].toString(16));
	}
	result = result + "}";
	document.getElementById("result").innerHTML= result;
	console.log(result);
}