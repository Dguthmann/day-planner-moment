// console.log(moment().format());
// console.log(moment().format("ddd, DD MMM YYYY, h:mm a"));

//TODO: Create 1 row with time, text area, and button using JQuery

// TODO: Using moment.js grab the time, and set the text of "#currentDay to moment.js
$("#currentDay").text(moment().format("ddd, DD MMM YYYY, h:mm a"));


// TODO: created variables array to contain our times ["9AM", 10AM, ... 5PM]
var businessHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
// created an id counter to hold 


{/* <div class="row time-block" id="9am">
        <div class="col-md-2 hour">9AM</div>
        <textarea class="col-md-8"></textarea>
        <button class="col-md-2 saveBtn">
            <i class="far fa-save fa-lg"></i>
        </button>
    </div> */}

// TODO: Run a for loop to create all lines of the above block, add a class based off the time
// console.log(moment().format("H"))
// TODO: Create a for loop
for (let i = 0; i < businessHours.length; i++) {
    var newRow = $("<div>", {"class":'row time-block'});
    /// TODO: Loop of my array of house, and create a div for row, create div for hours, textarea, and div with imbedded i tag
    var timeCol = $("<div>",{"id":`${i}`, "class":'col-md-2 hour'}).text(businessHours[i]);
    // TODO: pull moment for current military time hour moment.js(H), apply index of time +9
    // TODO: if the hour is same (parseInt(moment.js.format(H)) == (i+9)), apply class of present
    if (parseInt(moment().format("H")) == (i + 9)) {
        var taskCol = $("<textarea>", {"id":`${i}`, "class":'col-md-8 present'})

    // TODO: else (parseInt(moment.js.format(H)) >= (i+9)) if the time has past apply class of past
    } else if (parseInt(moment().format("H")) >= (i + 9)) {
        var taskCol = $("<textarea>", {"id":`${i}`, "class":'col-md-8 past'})

    // TODO: Else apply class of future.
    } else {
        var taskCol = $("<textarea>", {"id":`${i}`, "class":'col-md-8 future'})
    }
    var savedText = localStorage.getItem(`${i}`)
    console.log(savedText);
    $(taskCol).text(savedText);
    var buttonCol = $("<button>", {"id":`btn${i}`, "class":`col-md-2 saveBtn`})
    var buttonI = $("<i>",{"class":'far fa-save fa-lg'})
    buttonCol.append(buttonI);

    newRow.append(timeCol, taskCol, buttonCol);

    $(".container").append(newRow);
}

// TODO: give the elements some content



// TODO: Create click event listener for my buttons .saveBtn
$(".saveBtn").on("click", function(myBtn) {
    event.preventDefault();
    //Pulls the Text Area based on which button was clicked
    var checkerID = $(this).siblings()[1];
    if($(checkerID).val() === ""){
        console.log("We in it to win it");
        return;
    } 
    var saveText = $(checkerID).val();
    var saveState = $(checkerID).attr("id");
    localStorage.setItem(saveState, saveText);
    console.log(saveState);
    console.log(saveText);
    // console.log(checkerID);
});
// TODO: Prevent Default

// TODO: If textarea === NULL return out

// TODO: Grab the text of the textarea and save to variable (I need to be able to save the text from the text area that is in the same row as my button)

// TODO: using localStorage.setItem Save to Local Storage

// TODO: Retrieve the data from local storage, using localStorage.getItem, and apply it to the textarea they belong to


// localStorage.setItem("first", "Team Agenda Meeting")

// var firstText = localStorage.getItem("first")
// $(".first").text(firstText);


