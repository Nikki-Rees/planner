


// check if moment.js works
console.log(moment());

//add current time and date to the jumbtron

let now = moment().format("[Today's date is] dddd Do MMMM [and the time is] LT");
console.log(now);
$("#currentDay").append(now);

let currentHour = moment().hours();
// test - let currentHour = 12;
console.log(currentHour);


// create variables
let $saveButtons = $("#scheduleContainer button.saveBtn");
let $timeBlock = $("#scheduleContainer .time-block textarea");


//create loop through each time block to format depending on time conditions

$timeBlock.each(function () {

    if ($(this).attr("data-hour") < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present")
    }

    if ($(this).attr("data-hour") == currentHour) {
        $(this).addClass("present");
        $(this).removeClass("future")
    }

    if ($(this).attr("data-hour") > currentHour) {
        $(this).addClass("future");
        $(this).removeClass("past")
    }

    //load any saved user entries to browser upon reload

    let value = localStorage.getItem($(this).attr("id"));
    if (value !== null) $(this).val(value);

})


// save user entry to local storage   
//

$saveButtons.on("click", function () {
    event.preventDefault();


    $($timeBlock).each(function () {
        let id = $(this).attr("id");
        let value = $(this).val();
        localStorage.setItem(id, value);


    });
    console.log(localStorage);
});



