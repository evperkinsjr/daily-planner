// Display current date on page
$('#currentDay').text(moment().format('dddd, MMMM Do'));

// Listen for save button clicks
$('.saveBtn').on('click', function () {
    var userInput = $(this).siblings('.description').val();
    var hour = $(this).parent().attr('.id');

    localStorage.setItem(hour, userInput);
});

// Current number of hours

// Check if block is past, present or future


// Load data from localStorage