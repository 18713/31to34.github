// 1. Write a program that displays current date and time in
// your browser

var time = new Date();
document.write(time)

// 2. Write a program that alerts the current month in words.
// For example December.

var num = new Date();
var num1 = num.getMonth();
document.write(num1)

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.


 var num = new Date().toString();
 var num1 = num.slice(0,3);
 alert(num1)



// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

 var myDate = new Date();
 var num1 = myDate.getDay();
 if(myDate.getDay() == 6 || myDate.getDay() == 0) 
 
 alert('It’s Fun day');
 document.write(num1)

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

 var d = new Date();
  var num2 = d.setMonth();

  if (num2 === 15){
      alert("First fifteen  days of the month")
  }
  else{
    alert("Last days of the month")
  }






// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.


//  var time = new Date();
//  document.write("current date:" + time +"<br>")

var num = new Date();
 var num2 = num.getTime();
var num1 = num.getMilliseconds()
var num3 = num2+num1
document.write("Elapsed millisecond since 1,1970:"+num3 +"<br>") 

var num = new Date();
var num1 = num.getTime();
document.write("Elapsed minutes since 1,1970:"+num1 ) 


// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

 var num = new Date();
 var num1 = num.getTime();

 if (num1 === "AM"){
          alert("Its AM")
      }
      else{
        alert("its PM")
      }


// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

var now = new Date();
now.setDate(29);
now.setMonth(10)
now.setFullYear(2021)
document.write("Later Date :" +now)

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

var date = new Date('6-7-2020');
var d = date.getDate();
var m = date.getMonth() + 1;
var y = date.getFullYear();

alert(date)

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

var dae = new Date("hour");
var names = dae.setHours(1).toString();
alert(names)


// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

var num = new Date("12-10-1991").toLocaleDateString()
alert(num)
 