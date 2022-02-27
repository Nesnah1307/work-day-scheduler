// prepare page to load JS
$(document).ready(function () {
    console.log("Ready To Go!")
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        
        console.log("Button was clicked.")
        // save in localStorage
        localStorage.setItem(time, text);
    })
    function hourLoop() {
        
        var currentHour = moment().hour();

        // looping hours
        $(".time-block").each(function (timer) {
            var timeSlot = parseInt($(this).attr("id").split("hour")[1]);
            
            // loop will change color of .time-block depending on the time
            if (timeSlot < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (timeSlot === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
            // verified .each() is reading each timeslot
            console.log( timer + $( this ).text() );
        })
    }
    hourLoop();
})

 