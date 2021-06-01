// Display current date on page
$('#currentDay').text(moment().format('dddd, MMMM Do'));

// Listen for save button clicks
$('.saveBtn').on('click', function () {
    var userInput = $(this).siblings('.description').val();
    var hour = $(this).parent().attr('id');

    localStorage.setItem(hour, userInput);
});

// Time Block Hour Status
function hourStatus() {
    var currentHour = moment().hours();

    $('.time-block').each(function () {
        var timeBlockHour = parseInt($(this).attr('id').split('-')[1]);

        // Check if time block is past, present or future
        if (timeBlockHour < currentHour) {
            $(this).addClass('past');
        } else if (timeBlockHour === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }

    });
}

hourStatus();

// Load data from localStorage
$('#hour-6 .description').val(localStorage.getItem('hour-6'));
$('#hour-7 .description').val(localStorage.getItem('hour-7'));
$('#hour-8 .description').val(localStorage.getItem('hour-8'));
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));
$('#hour-18 .description').val(localStorage.getItem('hour-18'));