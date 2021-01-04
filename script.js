$(document).ready(function(){
	$("#currentDay").text(moment().format("MMMM Do YYYY"));
	
	display();

	function display (){
		for (let i = 0; i < 9; i++) {
			var divBlock = $("<div>")
			divBlock.addClass("row time-block")
			$(divBlock).appendTo(".container")
		}
	}
});
