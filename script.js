"use strict";

var elements = document.querySelectorAll("#dash1, #task1, #wall1, #proj1, #hist1, #invo1, #helps1, #welc");

function openNav() {
  document.getElementById("mySidebar").style.width = "200px";
  document.getElementById("main").style.marginLeft = "200px";
  document.getElementById("nicon").style.display = 'none';
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("nicon").style.display = 'inline-block';
}

function mainpg() {
  document.getElementById("welc").style.width = "250px";
  document.getElementById("welc").style.display = 'contents';
    
  for (var i = 0; i < elements.length; i++) {
    if(elements[i]!==welc){
      elements[i].style.display = "none";
        }
  }

}

function dash() {
  document.getElementById("dash1").style.width = "250px";
  document.getElementById("dash1").style.display = 'contents';
    
  for (var i = 0; i < elements.length; i++) {
    if(elements[i]!==dash1){
      elements[i].style.display = "none";
        }
  }

}

function task() {
  document.getElementById("task1").style.width = "250px";
  
  document.getElementById("task1").style.display = 'contents';
    
  for (var i = 0; i < elements.length; i++) {
    if(elements[i]!==task1){
      elements[i].style.display = "none";
        }
  }

}

function proj() {
  document.getElementById("proj1").style.width = "250px";
  
  document.getElementById("proj1").style.display = 'contents';
    
  for (var i = 0; i < elements.length; i++) {
    if(elements[i]!==proj1){
      elements[i].style.display = "none";
        }
  }

}

function wall() {
  document.getElementById("wall1").style.width = "250px";
  
  document.getElementById("wall1").style.display = 'contents';
    
  for (var i = 0; i < elements.length; i++) {
    if(elements[i]!==wall1){
      elements[i].style.display = "none";
        }
  }

}

function hist() {
  document.getElementById("hist1").style.width = "250px";
  
  document.getElementById("hist1").style.display = 'contents';
    
  for (var i = 0; i < elements.length; i++) {
    if(elements[i]!==hist1){
      elements[i].style.display = "none";
        }
  }

}

function invo() {
  document.getElementById("invo1").style.width = "250px";
  
  document.getElementById("invo1").style.display = 'contents';
    
  for (var i = 0; i < elements.length; i++) {
    if(elements[i]!==invo1){
      elements[i].style.display = "none";
        }
  }

}

function helps() {
  document.getElementById("helps1").style.width = "250px";
  
  document.getElementById("helps1").style.display = 'contents';
    
  for (var i = 0; i < elements.length; i++) {
    if(elements[i]!==helps1){
      elements[i].style.display = "none";
        }
  }

}

//stats

var ctx = document.getElementById('stats').getContext("2d");

var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, '#80b6f4');
gradientStroke.addColorStop(1, '#f49080');

var gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
gradientFill.addColorStop(0, "rgba(128, 182, 244, 0.6)");
gradientFill.addColorStop(1, "rgba(244, 144, 128, 0.6)");

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL",'AUG','SEP','OCT','NOV','DEC'],
        datasets: [{
            label: "Sales",
            borderColor: gradientStroke,
            pointBorderColor: gradientStroke,
            pointBackgroundColor: gradientStroke,
           pointHoverBackgroundColor: gradientStroke,
            pointHoverBorderColor: gradientStroke,
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 4,
            data: [100, 120, 150, 170, 180, 160, 90,70,100,140,160,130]
        }]
    },
    options: {
        animation: {
            easing: "easeInOutBack"
        },
        legend: {
            position: "bottom"
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                }

            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 20,
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold"
                }
            }]
        }
    }
});

//circular progress bar

var yb = { id : function(str1){return document.getElementById(str1)} };


function showSliderValue(){yb.id('slidervalue').innerHTML = yb.id('slider').value+'%';}


showSliderValue();
setProgress();

yb.id('slider').oninput = function(){showSliderValue(); setProgress()};
yb.id('slider').onchange = function(){showSliderValue(); setProgress()};


function setProgress(){
	var radius = yb.id('progress').getAttribute('r');
	var circumference = 2 * Math.PI * radius;

	var progress_in_percent = yb.id('slider').value;
	var progress_in_pixels = circumference * (200-progress_in_percent)/100;
	yb.id('progress').style.strokeDashoffset = progress_in_pixels+'px';

	if(yb.id('slider').value < 20){
		yb.id('progress').style.stroke = 'red';
		yb.id('slidervalue').style.color = 'red';
	}
	else if(yb.id('slider').value <= 40){
		yb.id('progress').style.stroke = '#7df';
		yb.id('slidervalue').style.color = '#7df';
	}
    else if(yb.id('slider').value <= 60){
		yb.id('progress').style.stroke = '#b0cfb3ff';
		yb.id('slidervalue').style.color = '#b0cfb3ff';
	}
    else if(yb.id('slider').value <= 80){
		yb.id('progress').style.stroke = '#f2b9cbff';
		yb.id('slidervalue').style.color = '#f2b9cbff';
	}
	else{
		yb.id('progress').style.stroke = 'gold';
		yb.id('slidervalue').style.color = 'gold';
	}
}

//second


var xb = { id : function(str){return document.getElementById(str)} };


function showSliderValue1(){xb.id('slidervalue1').innerHTML = xb.id('slider1').value+'%';}


showSliderValue1();
setProgress1();

xb.id('slider1').oninput = function(){showSliderValue1(); setProgress1()};
xb.id('slider1').onchange = function(){showSliderValue1(); setProgress1()};


function setProgress1(){
	var radius1 = xb.id('progress1').getAttribute('r');
	var circumference1 = 2 * Math.PI * radius1;

	var progress_in_percent1 = xb.id('slider1').value;
	var progress_in_pixels1 = circumference1 * (200-progress_in_percent1)/100;
	xb.id('progress1').style.strokeDashoffset = progress_in_pixels1+'px';

	if(xb.id('slider1').value < 20){
		xb.id('progress1').style.stroke = 'red';
		xb.id('slidervalue1').style.color = 'red';
	}
	else if(xb.id('slider1').value <= 40){
		xb.id('progress1').style.stroke = '#7df';
		xb.id('slidervalue1').style.color = '#7df';
	}
    else if(xb.id('slider1').value <= 60){
		xb.id('progress1').style.stroke = '#b0cfb3ff';
		xb.id('slidervalue1').style.color = '#b0cfb3ff';
	}
    else if(xb.id('slider1').value <= 80){
		xb.id('progress1').style.stroke = '#f2b9cbff';
		xb.id('slidervalue1').style.color = '#f2b9cbff';
	}
	else{
		xb.id('progress1').style.stroke = 'gold';
		xb.id('slidervalue1').style.color = 'gold';
	}
}

//calendar

var Cal = function(divId) {

  //Store div id
  this.divId = divId;

  // Days of week, starting on Sunday
  this.DaysOfWeek = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ];

  // Months, stating on January
  this.Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

  // Set the current month, year
  var d = new Date();

  this.currMonth = d.getMonth();
  this.currYear = d.getFullYear();
  this.currDay = d.getDate();

};

// Goes to next month
Cal.prototype.nextMonth = function() {
  if ( this.currMonth == 11 ) {
    this.currMonth = 0;
    this.currYear = this.currYear + 1;
  }
  else {
    this.currMonth = this.currMonth + 1;
  }
  this.showcurr();
};

// Goes to previous month
Cal.prototype.previousMonth = function() {
  if ( this.currMonth == 0 ) {
    this.currMonth = 11;
    this.currYear = this.currYear - 1;
  }
  else {
    this.currMonth = this.currMonth - 1;
  }
  this.showcurr();
};

// Show current month
Cal.prototype.showcurr = function() {
  this.showMonth(this.currYear, this.currMonth);
};

// Show month (year, month)
Cal.prototype.showMonth = function(y, m) {

  var d = new Date()
  // First day of the week in the selected month
  , firstDayOfMonth = new Date(y, m, 1).getDay()
  // Last day of the selected month
  , lastDateOfMonth =  new Date(y, m+1, 0).getDate()
  // Last day of the previous month
  , lastDayOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();


  var html = '<table>';

  // Write selected month and year
  html += '<thead><tr>';
  html += '<td colspan="7">' + this.Months[m] + ' ' + y + '</td>';
  html += '</tr></thead>';


  // Write the header of the days of the week
  html += '<tr class="days">';
  for(var i=0; i < this.DaysOfWeek.length;i++) {
    html += '<td>' + this.DaysOfWeek[i] + '</td>';
  }
  html += '</tr>';

  // Write the days
  var i=1;
  do {

    var dow = new Date(y, m, i).getDay();

    // If Sunday, start new row
    if ( dow == 0 ) {
      html += '<tr>';
    }
    // If not Sunday but first day of the month
    // it will write the last days from the previous month
    else if ( i == 1 ) {
      html += '<tr>';
      var k = lastDayOfLastMonth - firstDayOfMonth+1;
      for(var j=0; j < firstDayOfMonth; j++) {
        html += '<td class="not-current">' + k + '</td>';
        k++;
      }
    }

    // Write the current day in the loop
    var chk = new Date();
    var chkY = chk.getFullYear();
    var chkM = chk.getMonth();
    if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
      html += '<td class="today">' + i + '</td>';
    } else {
      html += '<td class="normal">' + i + '</td>';
    }
    // If Saturday, closes the row
    if ( dow == 6 ) {
      html += '</tr>';
    }
    // If not Saturday, but last day of the selected month
    // it will write the next few days from the next month
    else if ( i == lastDateOfMonth ) {
      var k=1;
      for(dow; dow < 6; dow++) {
        html += '<td class="not-current">' + k + '</td>';
        k++;
      }
    }

    i++;
  }while(i <= lastDateOfMonth);

  // Closes table
  html += '</table>';

  // Write HTML to the div
  document.getElementById(this.divId).innerHTML = html;
};

// On Load of the window
window.onload = function() {

  // Start calendar
  var c = new Cal("divCal");			
  c.showcurr();

  // Bind next and previous button clicks
  getId('btnNext').onclick = function() {
    c.nextMonth();
  };
  getId('btnPrev').onclick = function() {
    c.previousMonth();
  };
}

// Get element by id
function getId(id) {
  return document.getElementById(id);
}


