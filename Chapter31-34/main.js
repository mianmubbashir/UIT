// Question 1:

// var a = new Date()
// console.log(a)

// Question 2:

// var a = new Date()
// var month = ['january' , 'fabuary' , 'march' , 'april' , 'may' , 'june' , 'july' , 'august' , 'september' , 'october' , 'november' , 'december']
// alert(month.getMonth())

// Question 3:

// var a = new Date()
// var days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
// console.log(a.getDay()) 

// Question 4:

// var a = new Date()
// var d = a.getDay()
// if (d==0 || d==6){
// 	alert("It’s Fun day")
// }
// Question 5:

// var a = new Date();
// var b = a.getDate();
// if (b<16){
// 	alert("First fifteen days of the month")
// }
// else{
// 	alert("Last days of the month")
// }

// Question 6:

// var a = new Date()
// document.write("Current Date : "+a)
// var b= a.getTime()
// document.write("<br>Elapsed millisecond since Jan. 1, 1970 : "+b)
// var min = b/(1000*3600)
// document.write("<br>Elapsed minutes since Jan. 1, 1970 : "+min)

// Question 7:

// var a = new Date()
// b=a.getHours()
// if (b < 12){
// 	alert("Its AM")
// }
// else{
// 	alert("It's PM")
// }

// Question 8:

// var laterDate = new Date("Dec 31, 2020")
// document.write(laterDate)

// Question 9:

// var a = new Date("Jun 18, 2015")
// b=a.getTime()
// var today = new Date()
// var tomili = today.getTime()
// var d = tomili-b
// d=d/(1000*3600*24)
// //d=Math.round(d)
// document.write(Math.round(d)+" days have passed since 1st Ramadan,2015")

// Question 10:

//  var start = new Date("Jan 01, 2015")
//  var startsec = start.getTime()
//  var end = new Date("Dec 05, 2015")
//  var endsec = end.getTime()
//  document.write("On reference date "+end+"<br>")
//  var dif = endsec-startsec;
//  document.write(dif/(1000*60)+" seconds had passed since begining of 2015")

//  Question 11:

// var a = new Date()
// document.write("Current date : "+a+"<br>")
// ab =a.getHours()
// var d = new Date();
// a=ab-1
// d.setHours(a)
// document.write("1 hour ago, it was "+d)

Question 12:

var a = new Date()
document.write("Current date : "+a+"<br>")
ab =a.getFullYear()
var d = new Date();
a=ab-100
d.setFullYear(a)
document.write("100 year back, it was "+d)

Question 13:

var age = prompt("enter your age")
var a = new Date()
var year = a.getFullYear()
document.write("Your age is "+age)
dif=year-age
document.write("<br>Your birth year is "+dif)

Question 14:

var name ="ABC Customer"
var a = new Date();
var b= a.getMonth();
var arr=["January","February","March","April","May","June","July","August","September","October","November","December"];
var month = arr[b]
var unit = 410
var chrg = 16
var net = unit*chrg
var late =350
var gross =net +late
document.write("<h1>K-Electric Bill </h1>")
document.write("<br>Customer Name  "+name)
document.write("<br> Current Month "+month)
document.write("<br>  Number of units "+unit)
document.write("<br> Charges per unit "+chrg+"<br>")
document.write("<br>Net Amount Payable (within Due Date) "+net)
document.write("<br>Late Payment Surcharge  "+late)
document.write("<br>Gross Amount Payable (after Due Date)  "+gross)
