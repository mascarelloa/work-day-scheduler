$(document).ready(function () {

        //this saves the user's input and the time when clicking the save button.
    $(".saveBtn").on("click", function () {
        //this pulls the value of the text area and the row id.
        var textTime = $(this).siblings(".description").val();
        var textValue = $(this).parent().attr("id");
        //this stores the input to local storage
        localStorage.setItem(textValue, textTime);
    });
 
    //this displays the moment or the current date and time up in the jumbotron.
    var todayDate = moment();
    $("#currentDay").text(todayDate.format("MMMM Do, YYYY, h:mm:ss a"));

    //this compares the block to the current time to color the block with css. Red = current, Future = Green, Past = Gray.
    function trackTime() {

        $(".block").each(function () {
            var hour = moment("").format("HH");
            var hourBlock = $(this).attr("id");

            if (hour > hourBlock) {
                $(this).addClass("past");
            } else if (hour === hourBlock) {
                $(this).addClass("present");
            } else {
                $(this).addClass("future");
            }
        });
    }
    //this call the function above so it will run.
    trackTime();
   

}) 

//this will still append the saved input in local storage to the page when it is reloaded.
function init() {
    $("#09 .description").val(localStorage.getItem("09"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
    }
init();