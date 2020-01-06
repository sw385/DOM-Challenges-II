
function calculate(radius) {
    let volume = Math.PI * 4 / 3 * Math.pow(radius, 3);
    return volume;
};

function display() {
    event.preventDefault(); // prevents the automatic refresh 
    var radius = document.getElementsByName("radius")[0].value;
    var volume = Math.PI * 4 / 3 * Math.pow(radius, 3);

    document.querySelector("p#result").innerText = volume + " cubic units";
};
