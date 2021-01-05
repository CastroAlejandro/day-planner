$(document).ready(function(){
	// displays current date and time
	$("#currentDay").text(moment().format("MMMM Do YYYY"));
	// calls display function
	display();
	// function using a for loop to create rows 
	function display (){
		for (let i = 0; i < 9; i++) {
			// creates a div (9 total, 1 for each hour)
			var divBlock = $("<div>")
			divBlock.addClass("row time-block")
			$(divBlock).appendTo(".container")

			// creates a column for each hour
			var hourCol = $("<div>");
			hourCol.appendTo(divBlock);
			hourCol.addClass("col-md-1 hour");

			// creates a column for text input

			var textArea = $("<textarea>");
			textArea.appendTo(divBlock);
			textArea.addClass("col-md-10 textarea");
			
			// creates a column for save icon
			var saveBtn = $("<button>");
			saveBtn.appendTo(divBlock);
			saveBtn.addClass("col-md-1 saveBtn");
		}
	}
});
