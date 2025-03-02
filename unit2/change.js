// Function to change the element's text and style
function changeElement() {
    // Get the element by ID
    var element = document.getElementById("myElement");

    // Change the text content
    element.innerText = "Hello! I have been changed.";

    // Change the style
    element.style.fontSize = "25px";
    element.style.color = "white";
    element.style.backgroundColor = "green";
    element.style.border = "3px solid red";
}
