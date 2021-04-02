//variable declaration (grab DOM elements) !!!!!!!!
// when the page is loaded, using moment, append textcontent of the current time !!!!!!!!!!
// to the top of the page (header, h1/h2 tags maybe) !!!!!!!!!!! 
// add 3 total columns (2/8/2 if 12 grid layout) apply CSS styling !!!!!!!!!!!
// add rows per timeblock !!!!!!!!!!!!

// a function that determines what time it is and compares color properties using an if/else statement( else would be future)
// statement would look something like (if current = red, else if = green, else = grey)
// logic gate basically saying that we don't have to define grey, we only have to say that the current time equals red, other times equal gree, and if neither of those are true then turn grey
// it's a div, text input, and button. on click of the button it will grab the input value from the div
// when the save button is clicked (onclick or .on for jquery) it will store the value in the input field as local
// 2 variables, one for input and one for time 

// var inputValue = $(".description").val(); 
// var time = $(".hour").text(); 
// .textContent() this is vanilla syntax
// localStorage.setItem(time, inputValue); 
//^^ this is actually setting the value in the local storage

// var storedValue = localStorage.getItem(time);
// $(".description").val(storedValue); 
//^^ are calling back the value from local storage and storing it in that text field

// var weekDay = moment("1-1-2022", "M-D-YYYY").format("ddd MMM Do, YYYY");
// $("#2a").text(weekDay);
// $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

// var saveBtn = document.querySelector(".saveBtn");

// onclick();
// saveBtn.addEventListener();


// function currentTime() {
//     if (timeOfDay >= moment().set('hour', 9)) {

//     }
//     //declare what current time is 
//     // say something like if current time (timeOfDay) 

// }

var nineAM = $("#nineAM");
var nineAMText = $("#nineAMText");

var tenAM = $("#tenAM");
var elevenAM = $("#elevenAM");
var twelvePM = $("#twelvePM");
var onePM = $("#onePM");
var twoPM = $("#twoPM");
var threePM = $("#threePM");
var fourPM = $("#fourPM");
var fivePM = $("#fivePM");




var currentTime = moment().format("H");

var plannerDesc = $(".description");
var saveBtn = $(".saveBtn");

var timeOfDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(timeOfDay);
// console.log(timeOfDay);


// saveBtn.click(function() {
//     console.log("yeeerrrrrr");

// });

// I want to get the value of my text area so that I can assign it to a variable and store it in local storage
// function getInputValue() {
//     var inputValue = nineAM.value;

//     console.log(inputValue);
// }


$("#nineAM").click(function() {
    var nineAMValue = document.getElementById("nineAMText").value
    // var inputValue = nineAMText.value;
    console.log(nineAMValue);
    localStorage.setItem()
    

});
// this is the way we get the data from the textbox on button click, then I just need to store it using localStorage set item and I can call on it later with a localStorage get item






// nineAM.addEventListener("click", function(){




// });

// $(document).ready(function() {
//     $('.saveBtn').click(function(){
//         console.log(event.target);

//         // alert(this.name);
//     })
// });

// function saveButton(event) {
//     if(event.target.id === true ){
//     }
// }
// function 
// if 9am = current hour set att to present , if else set att to past, else set att to future