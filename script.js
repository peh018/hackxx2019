function chooseFunc() {
	if(document.getElementById("func").value == "Caesar") {
		caesar();
	} else {
		vigenere();
	}
}

function caesar() {
	var shiftKey = document.getElementById("key").value;
	var message = document.getElementById("message").value;

	if(isNaN(shiftKey) == true) {
		alert("Invalid shift key. Please enter a number.");
		document.getElementById("key").value = "";
	}
	if(isNaN(message) == false) {
		alert("Invalid message.");
		document.getElementById("message").value = "";
	}

	while(parseInt(shiftKey) < 0) {
		shiftKey = parseInt(shiftKey) + 26;
	}
	shiftKey = shiftKey % 26;
	message = message.toUpperCase().replace(/\s/g, "");
	// document.getElementById("hint").value = "A -> " + String.fromCharCode(65 + shiftKey);

	var newMessage = [];
	if(document.getElementById("ende").checked == true) {
		for(var i = 0; i < message.length; i++) {
			if(message[i] == " ") {
				newMessage[i] = 32;
			} else {
				newMessage[i] = message.charCodeAt(i) - 65 + shiftKey;
				if(newMessage[i] >= 26) {
					newMessage[i] = parseInt(newMessage[i] - 26);
				}
				newMessage[i] += 65;
			}
		}
	} else {
		for(var i = 0; i < message.length; i++) {
			if(message[i] == " ") {
				newMessage[i] = 32;
			} else {
				newMessage[i] = message.charCodeAt(i) - 65 - shiftKey;
				if(newMessage[i] < 0) {
					newMessage[i] = parseInt(newMessage[i] + 26);
				}
				newMessage[i] += 65;
			}
		}
	}
	var result = String.fromCharCode.apply(null, newMessage);
	document.getElementById("result").innerHTML = "Result: " + result;
}

function vigenere() {
	var keyword = document.getElementById("key").value;
	var message = document.getElementById("message").value;

	if(isNaN(keyword) == false) {
		alert("Invalid keyword.");
		document.getElementById("key").value = "";
	}
	if(isNaN(message) == false) {
		alert("Invalid message.");
		document.getElementById("message").value = "";
	}
	keyword = keyword.toUpperCase().replace(/\s/g, "");
	message = message.toUpperCase().replace(/\s/g, "");

	var keyArray = [];
	for(var i = 0; i < keyword.length; i++) {
		keyArray[i] = keyword.charCodeAt(i) - 65;
	}

	var newMessage = [];
	if(document.getElementById("ende").checked == true) {
		for(var i = 0; i < message.length; i++) {
			newMessage[i] = message.charCodeAt(i) - 65 + (keyArray[i % keyArray.length]);
			if(newMessage[i] >= 26) {
				newMessage[i] = parseInt(newMessage[i] - 26);
			}
			newMessage[i] += 65;
		}
	} else {
		for(var i = 0; i < message.length; i++) {
			newMessage[i] = message.charCodeAt(i) - 65 - (keyArray[i % keyArray.length]);
			if(newMessage[i] < 0) {
				newMessage[i] = parseInt(newMessage[i] + 26);
			}
			newMessage[i] += 65;
		}
	}
	var result = String.fromCharCode.apply(null, newMessage);
	document.getElementById("result").innerHTML = "Result: " + result;
}

function playfair() {
	var keyword = document.getElementById("key").value;
	var message = document.getElementById("message").value;

	if(isNaN(keyword) == false) {
		alert("Invalid keyword.");
		document.getElementById("key").value = "";
	}
	if(isNaN(message) == false) {
		alert("Invalid message.");
		document.getElementById("message").value = "";
	}
	keyword = keyword.toUpperCase().replace(" ", "");
	message = message.toUpperCase();

	var keyArray = [];
	for (var i = 0; i < 5; i++) {
		keyArray[i] = [];
	}

	for(var i = 0; i < keyword.length; i++) {
		var repeat = false;
		for(var j = 0; j < i; j++) {
			if(keyword[j] == keyword[i]) {
				repeat = true;
			}
		}
		if(repeat == false) {
			var row = parseInt(i / 5);
			var col = i % 5;
			keyArray[row][col] = keyword[i];
		}
	}

	for(var i = 0; i < 5; i++) {
		for(var j = 0; j < 5; j++) {
			console.log(keyArray[i][j]);
		}
		console.log();
	}
}