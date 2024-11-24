// TODO:
// 1) add -/+ key
// 2) do not allow 2 operators in a row (replace the old one with the new one)

const display = document.getElementById("display");

var operators = ['+', '-', '×', '÷', '%']
var replaced_operators = new Map([ ['×', '*'], ['÷', '/'], ['%', '*0.01 '] ])
var result = 0;
var has_result = true;

function append_to_display(input) {
	if (has_result) {
		clear_display();
		has_result = false;
	}
	if (display.value == "" && operators.includes(input)) {
	    display.value = result;
	}
	display.value += input;
}

function clear_display() {
	display.value = "";
}

function calculate() {
	if (display.value == "")
		return;
	try {
		for (let [op1, op2] of replaced_operators) {
			display.value = display.value.replaceAll(op1, op2);
		}
		result = eval(display.value);
		display.value = result;
	}
	catch (error) {
	        result = 0;
		display.value = "Error";
	}
	has_result = true;
}
