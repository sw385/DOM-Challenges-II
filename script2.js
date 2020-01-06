/*
	PROMPT 2
	Create an HTML page with a large element on the page that says "Don't hover over me" inside of it. When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me!
*/

function first() {
    document.querySelector('p#first').innerText = "I'm right!";
    document.querySelector('p#second').innerText = "";
};

function second() {
    document.querySelector('p#first').innerText = "";
    document.querySelector('p#second').innerText = "No, I'm right!";
};

function hoverAlert() {
	alert("Hey, I told you not to hover over me!")
};
