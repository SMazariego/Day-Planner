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

var time3 = beforeTime.add(1, "h");
time3 = time3.format('hh:mm A');
$(".block3").text(time3);

var time4 = beforeTime.add(1, "h");
time4 = time4.format('hh:mm A');
$(".block4").text(time4);

var time5 = beforeTime.add(1, "h");
time5 = time5.format('hh:mm A');
$(".block5").text(time5);

var time6 = beforeTime.add(1, "h");
time6 = time6.format('hh:mm A');
$(".block6").text(time6);

var time7 = beforeTime.add(1, "h");
time7 = time7.format('hh:mm A');
$(".block7").text(time7);

var time8 = beforeTime.add(1, "h");
time8 = time8.format('hh:mm A');
$(".block8").text(time8);

var time9 = beforeTime.add(1, "h");
time9 = time9.format('hh:mm A');
$(".block9").text(time9);

var time10 = beforeTime.add(1, "h");
time10 = time10.format('hh:mm A');
$(".block10").text(time10);

var time11 = beforeTime.add(1, "h");
time11 = time11.format('hh:mm A');
$(".block11").text(time11);

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
    };

// time 9AM
    time3 = moment().startOf('day').add(9, "hours");
    
    if (currentTime.isAfter(time3)) {
        $(".form9").addClass("past");
    }
    else if (currentTime.isBefore(time3)) {
        $(".form9").addClass("future");
    }
    else if (currentTime.isSame(time3)) {
        $(".form9").addClass("present");
    };

    // time 10AM
    time4 = moment().startOf('day').add(10, "hours");
    
    if (currentTime.isAfter(time4)) {
        $(".form10").addClass("past");
    }
    else if (currentTime.isBefore(time4)) {
        $(".form10").addClass("future");
    }
    else if (currentTime.isSame(time4)) {
        $(".form10").addClass("present");
    };

    // time 11AM
    time5 = moment().startOf('day').add(11, "hours");
    
    if (currentTime.isAfter(time5)) {
        $(".form11").addClass("past");
    }
    else if (currentTime.isBefore(time5)) {
        $(".form11").addClass("future");
    }
    else if (currentTime.isSame(time5)) {
        $(".form11").addClass("present");
    };

    // time 12PM
    time6 = moment().startOf('day').add(12, "hours");
    
    if (currentTime.isAfter(time6)) {
        $(".form12").addClass("past");
    }
    else if (currentTime.isBefore(time6)) {
        $(".form12").addClass("future");
    }
    else if (currentTime.isSame(time6)) {
        $(".form12").addClass("present");
    };

    // time 1PM
    time7 = moment().startOf('day').add(13, "hours");
    
    if (currentTime.isAfter(time7)) {
        $(".form13").addClass("past");
    }
    else if (currentTime.isBefore(time7)) {
        $(".form13").addClass("future");
    }
    else if (currentTime.isSame(time7)) {
        $(".form13").addClass("present");
    };

     // time 1PM
     time8 = moment().startOf('day').add(14, "hours");
    
     if (currentTime.isAfter(time8)) {
         $(".form14").addClass("past");
     }
     else if (currentTime.isBefore(time8)) {
         $(".form14").addClass("future");
     }
     else if (currentTime.isSame(time8)) {
         $(".form14").addClass("present");
     };

     // time 3PM
     time9 = moment().startOf('day').add(15, "hours");
    
     if (currentTime.isAfter(time9)) {
         $(".form15").addClass("past");
     }
     else if (currentTime.isBefore(time9)) {
         $(".form15").addClass("future");
     }
     else if (currentTime.isSame(time9)) {
         $(".form15").addClass("present");
     };

     // time 4PM
     time10 = moment().startOf('day').add(16, "hours");
    
     if (currentTime.isAfter(time10)) {
         $(".form16").addClass("past");
     }
     else if (currentTime.isBefore(time10)) {
         $(".form16").addClass("future");
     }
     else if (currentTime.isSame(time10)) {
         $(".form16").addClass("present");
     };


     // time 5PM
     time11 = moment().startOf('day').add(17, "hours");
    
     if (currentTime.isAfter(time11)) {
         $(".form17").addClass("past");
     }
     else if (currentTime.isBefore(time11)) {
         $(".form17").addClass("future");
     }
     else if (currentTime.isSame(time11)) {
         $(".form17").addClass("present");
     };
}
testTime();

var x = [7, 8, 9, 10, 11, 12, 1, 2, 3];

for (var i = 0; i < x.length; ++i) {
    var dataHour = localStorage.getItem(x[i]);

    $(".form" + x[i]).val(dataHour);
}
    // Info storage
$(".saveBtn").click(function () {
    Event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("This worked");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});
   