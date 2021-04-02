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
var tenAMText = $("#tenAMText");


var elevenAM = $("#elevenAM");
var elevenAMText = $("#elevenAMText");

var twelvePM = $("#twelvePM");
var twelvePMText = $("#twelvePMText");

var onePM = $("#onePM");
var onePMText = $("#onePMText");

var twoPM = $("#twoPM");
var twoPMText = $("#twoPMText");

var threePM = $("#threePM");
var threePMText = $("#threePMText");

var fourPM = $("#fourPM");
var fourPMText = $("#fourPMText");

var fivePM = $("#fivePM");
var fivePMText = $("#fivePMText");




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
    localStorage.setItem( "9AM", nineAMValue);
    console.log(nineAMValue);
});

$("#tenAM").click(function() {
    var tenAMValue = document.getElementById("tenAMText").value
    localStorage.setItem( "10AM", tenAMValue);
    console.log(tenAMValue);
});

$("#elevenAM").click(function() {
    var elevenAMValue = document.getElementById("elevenAMText").value
    localStorage.setItem( "11AM", elevenAMValue);
    console.log(elevenAMValue);
});

$("#twelvePM").click(function() {
    var twelvePMValue = document.getElementById("twelvePMText").value
    localStorage.setItem( "12PM", twelvePMValue);
    console.log(twelvePMValue);
});

$("#onePM").click(function() {
    var onePMValue = document.getElementById("onePMText").value
    localStorage.setItem( "1PM", onePMValue);
    console.log(onePMValue);
});

$("#twoPM").click(function() {
    var twoPMValue = document.getElementById("twoPMText").value
    localStorage.setItem( "2PM", twoPMValue);
    console.log(twoPMValue);
});

$("#threePM").click(function() {
    var threePMValue = document.getElementById("threePMText").value
    localStorage.setItem( "3PM", threePMValue);
    console.log(threePMValue);
});

$("#fourPM").click(function() {
    var threePMValue = document.getElementById("threePMText").value
    localStorage.setItem( "3PM", threePMValue);
    console.log(threePMValue);
});



// console.log
// localStorage.getItem("9AM");

$("#nineAMText").text(localStorage.getItem("9AM"));// 9
$("#nineAMText").text(localStorage.getItem("9AM"));// 10
$("#nineAMText").text(localStorage.getItem("9AM"));// 11
$("#nineAMText").text(localStorage.getItem("9AM"));// 12
$("#nineAMText").text(localStorage.getItem("9AM"));// 1
$("#nineAMText").text(localStorage.getItem("9AM"));// 2
$("#nineAMText").text(localStorage.getItem("9AM"));// 3
$("#nineAMText").text(localStorage.getItem("9AM"));// 4
$("#nineAMText").text(localStorage.getItem("9AM"));// 5
// this is the way we get the data from the textbox on button click, then I just need to store it using localStorage set item and I can call on it later with a localStorage get item

// then the next function would be to make the boxes turn grey in the past, green in the future, and red in the present. using the var currentTime = moment().format("H"); to find the 
//current time and compare it to the set moment() values I put on each div.



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