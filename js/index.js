'use strict';

/*
A simple styled day counter app for make you remenber of yours YEAR's TODO list.
You still have time to realize your dreams, so don't waste time.
*/

//set up
var date = new Date();
var year = date.getYear();
var monthDay = function monthDay(month) {
  return new Date(year, month, 0).getDate();
};

//data
var lastMonth = date.getMonth() - 1;
var days = monthDay(lastMonth + 1);
var today = date.getDate();
var totalDays = lastMonth < 0 ? today : 0;

//view
var view = document.querySelector('#view');
var left = document.querySelector('#left');
for (var i = lastMonth; i >= 0; i--) {
  totalDays += monthDay(i) + today;
}
view.innerHTML = totalDays;
left.innerHTML = 365 - totalDays;