const submit = document.querySelector("button");

submit.addEventListener("click", function() {
      	const leftInput = Number(document.getElementById("left-input").value);
	const rightInput = Number(document.getElementById("right-input").value);

	const selectElement = document.getElementById("operators");
	const operator = selectElement.value;

	const operations = {
		"-": (a,b) => a - b,
		"*": (a,b) => a * b,
		"/": (a,b) => a / b,
		"%": (a,b) => a % b
	};

	const ans = operations[operator](leftInput, rightInput);

	console.log(ans);
	alert(ans);
});
