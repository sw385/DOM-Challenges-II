//PROMPT 4 
/*
	In a Javascript file, write a program which checks the following things:
	checks that the password is 12345678
	if the password is incorrect, send an alert message
	Your page should also include an <h1> tag. If the information in the form is correct, have Javascript change the text in the <h1>.HTML page.
*/

function checkPassword() {
	event.preventDefault(); //prevents the automatic refresh 
	var pass = document.getElementsByName("password")[0].value; //get one of the array
	if(pass != "12345678") {
		alert("Your password is wrong!");
	} else {
		document.querySelector("h1").innerText = "You're correct!"; 
	}
};