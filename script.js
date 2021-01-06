const container = $(".container")
const schedule = { i: ' ' }

$(document).ready(function () {
	// displays current date and time
	$("#currentDay").text(moment().format("MMMM Do YYYY"));


	// calls display function
	display();
	// function using a for loop to create rows 

});

function display() {
	// creates an integer for moment.js 
	var currentTime = parseInt(moment().format("H"));
		// console.log(currentTime)

	for (let i = 9; i <= 17; i++) {
		// creates a div (9 total, 1 for each hour)
		// creates a column for each hour
		// if (i < 3) {
		// 	hourCol.text(i + 9 + " am")
		// }
		// else if (i === 3) {
		// 	hourCol.text(i + 9 + " pm")
		// }
		// else {
		// 	hourCl.text(i + -3 + " pm")
		// }
		
		const text = localStorage.getItem(i);
		const row = timeSlot(i, currentTime, text);
		container.append(row);
	}

	// console.log(schedule)
}

function timeSlot(hour, now, text,) {
	const divBlock = $("<div>")
		.addClass("row time-block");
	// creates a column for hours, with proper time format
	$("<div>")
		.text(moment(hour, "H").format("h a"))
		.addClass("col-md-1 hour p-2")
		.appendTo(divBlock);

	// creates a column for text input
	let timeClass = "past"
	if (hour === now) timeClass = "present"
	else if (hour > now) timeClass = "future"
		// console.log(now)

	$("<textarea>")
		.addClass("col-md-10 textarea")
		.addClass(timeClass)
		.text(text)
		.appendTo(divBlock);

	// creates a column for save icon, clicking the icon runs saveScheudle function
	$("<button>")
		.addClass("col-md-1 saveBtn fas fa-save")
		.val(hour)
		.click(saveSchedule)
		.appendTo(divBlock);
		


	return divBlock;
}

function saveSchedule() {
	const hour = parseInt($(this).val());
	const text = $($(this).siblings()[1]).val();
	

	// console.log(this.previousSibling.value)

	schedule[hour] = text;
	console.log(schedule[hour]);
	localStorage.setItem(hour, schedule[hour]);

	
}

// const myarr = ['cat', 'dog', 'mastadon']
// const obj = {
// 	name: "ben"
// }

// for (var i = 0; i < myarr.length; i++) {
// 	console.log(myarr[i])
// }

// console.log(myarr)
// console.log(myarr[2])
// console.log(obj)
// console.log(obj.name)
// console.log(obj['name'])

// obj.job = 'tutor'
// obj['parent'] = true

// var key = 'age'
// obj[key] = 32
// console.log(obj)

// console.log(obj[key])
// key = 'name'
// console.log(obj[key])
// key = 'job'
// console.log(obj[key])
