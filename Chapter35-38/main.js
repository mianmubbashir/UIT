// Question 1:

// function dateandtime(){
// 	var a = new Date()
// 	alert(a)
// }
// dateandtime()

// Question 2:

// var a = prompt("Enter your First Name")
// var b = prompt("Enter your last Name")
// Name(a,b)
//  function Name(a,b){
//  	document.write("Hello "+a+" "+b)
//  }
 
//  Question 3:

//  var a = +prompt("Enter first number")
// var b = +prompt("Enter last number")
// document.write(Add(a,b))
//  function Add(a,b){
//  	return a+b;
//  }
 
// Question 4:

//  var a = +prompt("Enter first number")
// var b = +prompt("Enter last number")
// var c = prompt("Enter Character")
// document.write(Calculator(a,b,c))
// function Calculator(a,b,c){
// 	if (c=="+") {
// 		return a+b
// 	}
// 	else if (c=="-") {
// 		return a-b
// 	}
// 	else if (c=="/") {
// 		return a/b
// 	}
// 	else if (c=="%") {
// 		return a%b
// 	}
// }

// Question 5:

//  var a = +prompt("Enter number")
// Square(a)
//  function Square(a){
//  	document.write(Math.pow(a,2))
//  }
 
//  Question 6:

//  var a = +prompt("Enter number")
//  document.write(Factorial(a))
//  function Factorial(n) { 
//             if (n === 0) {  
//                 return 1;  
//             } 
//             else {  
//                 return n * Factorial( n - 1 );  
//             } 
//  }
 
//  Question 7:

//  var a = +prompt("Enter first number")
// var b = +prompt("Enter last number")
// Counting(a,b)
// function Counting(a,b){
// 	for (var i = a; i <= b; i++){
// 		document.write(i+"<br>")
// 	}
// }

// Question 8:

// function hypotenuse(a, b) {
//                function square(x) { return x*x; }
//                return Math.sqrt(square(a) + square(b));
// }
// document.write(hypotenuse(1,2))

// Question 9:

// var a = +prompt("Enter width")
// var b = +prompt("Enter height")
// function CalculatesArea(w,h){
// 	document.write("<br>Area of Rectangle : "+(w*h))
// }
// CalculatesArea(a,b)
// CalculatesArea(8,4)

// Question 10:

// function palindrome(str){
// 	var splitString = str.split("");
// 	var reverseArray = splitString.reverse();
// 	var joinArray = reverseArray.join("");
// 	if (str == joinArray){
// 		document.write("String is palindrome")
// 	}
// 	else{
// 		document.write("String is not palindrome")
// 	}
// }
// palindrome("mad")
// palindrome("madam")

// Question 11:

// var a ="the quick brown fox";
// UppperCase(a);
// function UppperCase(str){
// 	document.write("Example String : " +str+"<br>")
// 	x=str.slice(0,1)
// 	y=x.toUpperCase()
// 	var sttr= str.split('')
// 	for (var i = 0; i < sttr.length; i++) {
// 		if (sttr[i] == ' '){
// 			j=i+1
// 			k=sttr[j].toUpperCase()
// 			sttr[j]=k
// 		}
// 	}
// 	sttr[0]=y
// 	var abc =sttr.join("")
// 	document.write("Expected Output : "+abc)
// }

// Question 12:

// var a="Web Development Tutorial"
// LongestWord(a)
// function LongestWord(str){
// 	var ar =str.split('')
// 	var b =1
// 	var arr=[0]
// 	var word=[]
// 	var count =[]
// 	for (var i = 0; i < ar.length; i++) {
// 		if (ar[i] == ' ') {
// 			arr[b]=i
// 			b+=1
// 		}
// 	}
// 	arr[b]=ar.length
// 	b=0
// 	//document.write(arr)
// 	for (var i = 0; i < arr.length-1; i++) {
// 		j=i+1
// 		word[b]=str.slice(arr[i],arr[j])
// 		b=b+1
// 	}
// 	b=0
// 	//document.write("<br>"+word)
// 	for (var i = 0; i < word.length; i++) {
// 		if (b ==0){
// 		count[b]=word[b].length
// 		b=b+1
// 	}
// 	else{
// 		count[b]=word[b].length-1
// 		b=b+1
// 	}
// 	}
// 	//document.write("<br>"+count)
// 	var max =Math.max(...count)
// 	//document.write(" <br>"+max)
// 	var ind =count.indexOf(max)
// 	document.write("EXAMPLE STRING : "+str)
// 	document.write("<br>EXPECTED OUTPUT : "+word[ind])
// }

// Question 13:

// function Occurrences(a,b){
// 	a=a.toLowerCase()
// 	var ar= a.split('')
// 	var count =0
// 	for (var i = 0; i < ar.length; i++) {
// 		if (ar[i]==b) {
// 			count+=1
// 		}
// 	}
// 	document.write("Occurrences of letter "+b+" is : "+count)
// }
// Occurrences("JSResourceS.com","o")

// Question 14:

// function calcCircumference(r){
// 	var a = Math.PI
// 	var circum = 2*a*r
// 	document.write("The circumference is : "+circum+"<br>")
// }
// function calcArea(r){
// 	var a = Math.PI
// 	ra =Math.pow(r,2)
// 	var area =a*ra
// 	document.write("The area is : "+area)
// }
// calcCircumference(2)
// calcArea(2)
