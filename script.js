var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.getElementById("list");

// click

button.addEventListener("click" , function() {
	if(input.value.length > 0) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
}

})

// KeyPress

input.addEventListener("keypress" , function(event) {
	if(input.value.length > 0 && event.which === 13) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
}

})