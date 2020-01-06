/*PROMPT 6

    BONUS: Create an HTML page with a form that asks the user to input the value of a sphere's radius. Write Javascript that gives them back the volume of the sphere. (There are many different ways to execute this. You can give the user information back in another input box on the page, as an alert, or any other way you can think of. You can look up how to use the Javascript Math object to simplify your calculations.)
    
*/


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
