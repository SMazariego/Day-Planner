moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

var currentTime = moment();
currentTime = currentTime.startOf("hour");
var beforeTime = moment().startOf('day').add(7, "hours");

// 7 AM 
var time1 = beforeTime.add(0, "h");
time1 = time1.format('hh:mm A');
$(".block1").text(time1);

var time2 = beforeTime.add(1, "h");
time2 = time2.format('hh:mm A');
$(".block2").text(time2);

function testTime() {
    // time1 7AM
    time1 = moment().startOf('day').add(7, "hours");
    
    currentTime = currentTime.startOf("hour");
    
    if (currentTime.isAfter(time1)) {
        $(".form7").addClass("past");
    }
    else if (currentTime.isBefore(time1)) {
        $(".form7").addClass("future");
    }
    else if (currentTime.isSame(time1)) {
        $(".form7").addClass("present");
    };
// time 8AM
    time2 = moment().startOf('day').add(8, "hours");
    
    if (currentTime.isAfter(time2)) {
        $(".form8").addClass("past");
    }
    else if (currentTime.isBefore(time2)) {
        $(".form8").addClass("future");
    }
    else if (currentTime.isSame(time2)) {
        $(".form8").addClass("present");
    };}

    testTime();

var x = [7, 8, 9, 10, 11, 12, 1, 2, 3];

for (var i = 0; i < x.length; i++) {
    var dataHour = localStorage.getItem(x[i]);

    $(".form" + x[i]).val(dataHour);
}
    // Info storage
$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("This worked");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});