//functions:it is reusable block of code

// which performs some action
// python example
// def function_name():
//     statements
// function_name(arguments)    
// js function example
// define the function 
function greet(){
    // code to execute
    console.log("welcome students")
}
// calling the function
greet()
greet()

function greeting(name){
    console.log(`hello ${name}`)
}
greeting("anand")

function add(a,b){
    console.log(a+b);

}
add(2,3);
// return:send backs the vaiues where the
// function is called
// not using return
// function sub(a,b){
//     console.log(a-b)

// }
// let result=sub(a,b){
//     return a-b;

// }
// sub(10,5)
function sub(a,b){
    return a-b;

}
let result=sub(10,5)
console.log(result);

// task:write a function for a
// square of a num
function square(num){
    return num*num
    console.log("finished")
}
 let square1 =square(5)
 console.log(square1)

function test(){
    return "Hello"
    console.log("This code Will never execute");
}
let test1 = test();
console.log(test1)

//Variables scopes
let college = "CITY";
function showCollege(){
    console.log(college)
}
showCollege();
// local variable
function showAge(){
    let age=22;
    console.log(age);
}
showAge()

// hoisting:
// js moves declarations to the top
// before the execution
//  var name1;
// console.log(name1)
// //  var name1="kishore";
// name1="kishore";

// // how ojs k seens exactly:
// // var name;
// // console.log(name1);
// // name1="ak"; 
// // console.log(age1)
// // let age1=23;
// // // hoisting with const
// // console.log(city)
// // const city="hyd"

// // hoisting with functions
// function greeting1(){
//     console.log("hello")
// }
// // functions are  completetly hoisted
// // function expression:
// // store inside a variable
// // let result1=greeting1()
// // function stored in a variable
// let display= function(){
//     console.log("hello ak")
// }
// // calling the variable
// display()
// // hoisting with function expression
// test2()

// let test2=function(){
//     console.log("hi")
// }
// //example2
// let calculate_area=function(length,width){
//     return length*width;
// }
// console.log(calculate_area(3,5))


// create a function that return
// largest of two numbers
// function largest(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// let num1 = 45;
// let num2 = 78;
// console.log("Largest number is:", largest(num1, num2));


// // create a function expression to
// // to calculate area of a circle
// const areaOfCircle = function(radius) {
//     const pi = 3.14159;
//     return pi * radius * radius;
// };

// console.log(areaOfCircle(5));  
// console.log(areaOfCircle(10)); 

// arrays:collection of elements of (similar dt)
// student1,student2,student3
// collection of multiple values stored in a
// single variable

// arr=["anand",,3.14,true]
// // let newarray=[value1,value2,value2]
// let arr=["apple","banana","custard",3.14,true]
// //         0        1          2      3    4
// console.log(arr[2])
// let numbers=[10,20,30,40]
// console.log(numbers[numbers.length-1])
// console.log(numbers.length)

// // modifying the element
// numbers[0]=9
// console.log(numbers)

// // traversing 
// let fruits=["apple","banana","pine"]
// // traversal:visiting each and every element
// // using for loop
// for(i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }


// // for...of loop
// for(let fruit of fruits){
//     // fruit is storing the current element
//     console.log(fruit)
// }

// sum of element
// let arr1 = [10, 20, 30, 40, 50];

// let sum = 0;
// for (let num1 of arr1) {
//     sum += num1;
// }

// console.log("Sum =", sum);

// find largest element
let arr2=[10,50,60,5,95]
let largest = arr2[0]; 
for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > largest) {
        largest = arr2[i];
    }
}
console.log(largest);



// push operation add the numbers
arr2.push(5,7,8)
console.log(arr2)
// remove the last element
arr2.pop()
console.log(arr2)
// restoring the removed element
let removed=arr2.pop();
console.log(removed)
// remove the first element
let firstremoved=arr2.shift();
console.log(firstremoved);

// add element at the beginning
arr2.unshift(10);
console.log(arr2);

// python --slicing
// arr[start:end:step]
// splice() --js
// used for --1.adding,
// 2.del,3.replacing elements
// syntax:
// Array.splice(startindex)
let veggies=["carrot","beetroot","brinjal"]
veggies.splice(1,1)
// 1-->startindex
// 1-->delecteindex
console.log(veggies)
// adding element
veggies.splice(1,0,"bitter gaurd")
console.log(veggies)
// replacing element
veggies.splice(1,1,"bottle gaurd")
console.log(veggies)

//slice -->creates a copy of 
// a portion of array 
//array.slice(start,end)

// copy entire array
// let nums = [10,20,30,40,50]

// let result1 = nums.slice(0,3)
// console.log(result1)

// task:arr=[10,20,30,40,50,60]
// create new array containing elements
// from index 2-4
let arr = [10, 20, 30, 40, 50, 60];

let newArr = arr.slice(2, 5); 
console.log(newArr); 

// string:sequence of characters
// closed'',"",``
// let name ="Anandkishore";
// let name1='Anandkishore';
// let name2=`Anandkishore`;

// indexing in strings;
let str="hello"
//       01234
console.log(str[0])
console.log(str[1])

// string length
console.log(str.length)
// immutable
str[0]="M";
console.log(str)

// traverse over the string
for(i=0;i<str.length;i++){
    console.log(str[i])
}

// for ...of
for(let ch of str){
    console.log(ch);
}

// string methods 
let firstname="raju"
console.log(firstname.toUpperCase());
console.log(firstname.toLowerCase());

// removing the extra spaces
let hello = "bye";
console.log(hello.trim());
// includes()
let course="JavaScript";
console.log(hello.includes("Script"))

// startwith
console.log(firstname.startsWith("r"))
// ends with
console.log(firstname.endsWith("u"))

// indexof
console.log(firstname.indexOf("r"))

// lastindexof:
console.log(firstname.lastIndexOf("a"))

// replace();
let str1="I love javascript"
console.log(str1.replace("javascript","python"))
console.log(str1)


// replaceAll();
let str2="cat dog cat"
console.log(str2.replaceAll("cat","lion"));

// slice
console.log(course.slice(0,3));

// substring:
let str3="programming"
console.log(str3.substring(3,8));

// split();
let str4="html,css,js,react"
console.log(str4.split(","));

// charAt:
console.log(str4.charAt(5));

// concat();
let first="anand"
let last="kishore"


