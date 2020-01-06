
function first() {
    document.querySelector('p#first').innerText = "I'm right!";
    document.querySelector('p#second').innerText = "";
};

function second() {
    document.querySelector('p#first').innerText = "";
    document.querySelector('p#second').innerText = "No, I'm right!";
};

