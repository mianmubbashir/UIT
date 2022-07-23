Question 1:

var Arr=[[1,2],[3,4],[5,6]];

Question 2:

var Arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];

Question 3:

for (let index = 1; index < 11; index++) {
    console.log(index);
}

Question 4:

var num=prompt("Enter Number");
var len=prompt("Enter Length");
for (let index = 1; index <= len; index++) {
    console.log(num," * ",index," = ",num*index);
}
 
Question 5:

var fruits=["apple","banana","mango","orange","strawberry"]
for (let index = 0; index < fruits.length; index++) {
    console.log("Element at Index ",index," is ",fruits[index]);
    
}

Question 6:

console.log("Counting : \n");
var Result="";
for (let index = 1; index < 16; index++) {
    Result=Result+index;   
    Result=Result+", "
}
console.log(Result);
Result="";
console.log("Reversed Counting : \n");
for (let index = 10; index > 0; index--) {
    Result=Result+index;   
    Result=Result+", "
}
console.log(Result);
Result="";
console.log("Even Counting : \n");
for (let index = 0; index <= 20; index++) {
    if (index%2==0) {
    Result=Result+index;   
    Result=Result+", ";   
    }
}
console.log(Result);
Result="";
console.log("Odd Counting : \n");
for (let index = 0; index <= 20; index++) {
    if (index%2!=0) {
    Result=Result+index;   
    Result=Result+", ";   
    }
}
console.log(Result);
Result="";
console.log("Series : \n");
for (let index = 2; index <= 20; index++) {
    if (index%2==0) {
    Result=Result+index;   
    Result=Result+"k, ";   
    }
}
console.log(Result);

Question 7:

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var B=prompt("What u want in our Bakery"); 
var flag=0;
for (let index = 0; index < A.length; index++) {
    if (A[index]==B) {
        console.log(B," is available at index ",index);
        flag=1;
        break
    } 
}
if (flag==0) {
    console.log(B," is not available at out store");
}

Question 8:

var A = [24, 53, 78, 91, 12];
var a=0;
for (let index = 0; index < A.length; index++) {
    if (A[index]>a) {
        a=A[index]
    }
    
}
console.log("The Largest Number is ",a);

Question 9:

var A = [24, 53, 78, 91, 12];
var a=1000;
for (let index = 0; index < A.length; index++) {
    if (A[index]<a) {
        a=A[index]
    }
    
}
console.log("The Smallest Number is ",a);

Question 10:


var Result="";
for (let index = 1; index <= 100; index++) {
    if (index%5==0) {
    Result=Result+index;   
    Result=Result+", "   
    }
}
console.log(Result);