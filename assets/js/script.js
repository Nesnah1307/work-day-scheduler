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
})    