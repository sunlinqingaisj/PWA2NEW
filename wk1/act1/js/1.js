(function(){
function myDate(){
var currentDate = new Date();
var day      = currentDate.getDay();
var hours    = currentDate.getHours();
var ampm     = hours >= 12 ? 'PM':'AM';
var days     = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
var dateTime = 'Current time is: ' +
                + currentDate.getHours() + ' ' +ampm + ' : '
                + currentDate.getMinutes() + " : "
                + currentDate.getSeconds();
var currentDay = 'Today is: '+days[day];
return window.alert(currentDay+"\n"+dateTime);
}
myDate();
})();


