//This is a test for my fellow students

alert("This is a test of what we have learned so far!");

var answer;
var rtAnswer = 0;

answer = prompt("Which is a datatype in Javascript? \n A = var, B = string, or C = <= ");

if (answer == "B"){
	rtAnswer++;
	document.write("You got "+rtAnswer+" correct.  Next Question");
}
	else{
		document.write("Next Question")
	};

answer = prompt("How do you close a <Div>"+"\nA = </Div>, B = >, or C = ;");

if(answer == A){
	document.write("You got "+rtAnswer+" correct.  Next Question");
	rtAnswer++;
}
	else{
		document.write("Next Question")
	}
