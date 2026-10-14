const submit = document.querySelector("button");

submit.addEventListener("click", function() {
	const leftValue = document.getElementById("left-input").value;
	const rightValue = document.getElementById("right-input").value;

      	const leftInput = Number(leftValue);
	const rightInput = Number(rightValue);

	const selectElement = document.getElementById("operators");
	const operator = selectElement.value;

	const operations = {
		"-": (a,b) => a - b,
		"*": (a,b) => a * b,
		"/": (a,b) => a / b,
		"%": (a,b) => a % b
	};

	if ( leftInput < 0 ||  rightInput < 0 ||
	     !Number.isInteger(leftInput) || !Number.isInteger(rightInput) ||
	     leftValue.trim() === "" || rightValue.trim() === ""
	)  {
		alert("Error :(");
		console.log("Error :(");
		return;
	}

	if ( ( operator === "/" || operator === "%" ) && rightInput === 0 )
	{
		alert("It's over 9000!");
		console.log("It's over 9000!");
		return;
	}

	const ans = operations[operator](leftInput, rightInput);

	alert(ans);
	console.log(ans);
});


setTimeout(function() {
	alert("Please, use me...");
}, 30000);
