//variable declaration (grab DOM elements)
// when the page is loaded, using moment, append textcontent of the current time
// to the top of the page (header, h1/h2 tags maybe)
// add 3 total columns (2/8/2 if 12 grid layout) apply CSS styling
// add rows per timeblock
// a function that determines what time it is and compares color properties using an if/else statement( else would be future)
// statement would look something like (if current = red, else if = green, else = grey)
// logic gate basically saying that we don't have to define grey, we only have to say that the current time equals red, other times equal gree, and if neither of those are true then turn grey
// it's a div, text input, and button. on click of the button it will grab the input value from the div
// when the save button is clicked (onclick or .on for jquery) it will store the value in the input field as local
// 2 variables, one for input and one for time 


onclick();

var inputValue = $(".description").val(); 
var time = $(".hour").text(); 
// .textContent() this is vanilla syntax
localStorage.setItem(time, inputValue); 
//^^ this is actually setting the value in the local storage

var storedValue = localStorage.getItem(time);
$(".description").val(storedValue); 
//^^ are calling back the value from local storage and storing it in that text field