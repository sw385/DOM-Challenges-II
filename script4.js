function checkPassword() {
	event.preventDefault(); //prevents the automatic refresh 
	var pass = document.getElementsByName("password")[0].value; //get one of the array
	if(pass != "12345678") {
		alert("Your password is wrong!");
	} else {
		document.querySelector("h1").innerText = "You're correct!"; 
	}
};