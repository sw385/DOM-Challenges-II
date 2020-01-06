/*
	PROMPT 1
	Create an HTML page with two buttons that argue with each other. When one button is clicked, the text "I'm right" should be placed next to it. When the other button is clicked, the text is replaced with, "No, I'm right!"
	Create an HTML page with a large element on the page that says "Don't 

*/

function first() {
    document.querySelector('p#first').innerText = "I'm right!";
    document.querySelector('p#second').innerText = "";
};

function second() {
    document.querySelector('p#first').innerText = "";
    document.querySelector('p#second').innerText = "No, I'm right!";
};

