// Create 1 row with time, text area, and button using JQuery
// Using moment.js grab the time, and set the text of "#currentDay to moment.js
$("#currentDay").text(moment().format("ddd, YYYY MMM DD, h:mm a"));


// created variable array to contain our times ["9AM", 10AM, ... 5PM]
var businessHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

//basic structure I wanted to achieve in html
{/* <div class="row time-block" id="9am">
        <div class="col-md-2 hour">9AM</div>
        <textarea class="col-md-8"></textarea>
        <button class="col-md-2 saveBtn">
            <i class="far fa-save fa-lg"></i>
        </button>
    </div> */}

// Run a for loop to create all lines of the above block, add a class based off the time

// Create a for loop
for (let i = 0; i < businessHours.length; i++) {
    var newRow = $("<div>", {"class":'row time-block'});
    /// Loop of my array of house, and create a div for row, create div for hours, textarea, and div with imbedded i tag
    var timeCol = $("<div>",{"id":`${i}`, "class":'col-md-2 hour'}).text(businessHours[i]);
    // console.log(moment().format("H"), retrieves hours in military form, i=0 is 9 am.
    // if the hour is same (parseInt(moment().format(H)) == (i+9)), apply class of present
    if (parseInt(moment().format("H")) == (i + 9)) {
        var taskCol = $("<textarea>", {"id":`${i}`, "class":'col-md-8 present'})

    // else (parseInt(moment.js.format(H)) >= (i+9)) if the time has past apply class of past
    } else if (parseInt(moment().format("H")) >= (i + 9)) {
        var taskCol = $("<textarea>", {"id":`${i}`, "class":'col-md-8 past'})

    // Else apply class of future.
    } else {
        var taskCol = $("<textarea>", {"id":`${i}`, "class":'col-md-8 future'})
    }
    // Retrieve the data from local storage, using localStorage.getItem, and apply it to the textarea they belong to
    var savedText = localStorage.getItem(`${i}`)
    
    $(taskCol).text(savedText);
    // Give the elements some content
    var buttonCol = $("<button>", {"id":`btn${i}`, "class":`col-md-2 saveBtn`})
    var buttonI = $("<i>",{"class":'far fa-save fa-lg'})
    buttonCol.append(buttonI);

    newRow.append(timeCol, taskCol, buttonCol);

    $(".container").append(newRow);
}





// Create click event listener for my buttons .saveBtn
$(".saveBtn").on("click", function(myBtn) {
    // Prevent Default refreshing page
    event.preventDefault();
    //Pulls the Text Area based on which button was clicked
    var checkerID = $(this).siblings()[1];
    // If textarea is empty return out
    if($(checkerID).val() === ""){
        // console.log("Not saved, error, add text and click outside of text area");
        return;
    } 
    // Grab the text of the textarea and save to variable
    var saveText = $(checkerID).val();
    var saveState = $(checkerID).attr("id");
    // Using localStorage.setItem Save to Local Storage
    localStorage.setItem(saveState, saveText);
});

