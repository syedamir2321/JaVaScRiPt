console.log("Hello Amir!!!") //allows you to print things in the console

// in-line comment 

/* 
   multi
   line
   comment
*/

/*
Data types: 
undefined : Here, the data type is not defined as it can be a string or integer or something else.
NULL: Here, the value of a variable is set to null.

Difference between undefined and null : 
typeof undefined is undefined 
typeof null is object and is used in objects.
They have the same value but different type.
null === object (false)
null == object(true)

boolean: return value would be true or false
string: sequence of characters(letters, numbers, punctuation, symbols and even emoji)
number: values that can be used in mathematical operation.
object: brief intro
*/

//3 ways of declaring variables are shown below:
var myName = "ronaldo" //used throughout the program

let hisName = "messi" //used only within the scope of where it is declared

const pi = 3.14 //variable that never changes
//Also note that variable names and function names are case sensitive, i.e., myName is not same as myname 

//using assignment operator to assign a variable
var a //declaring a variable
var b = 10 // declaring and assigning a variable
a = 7 //assigning a variable

console.log(a,b)

//Adding
var sum = a+b
//subtracting
var diff = a-b
//* for multiply, / for divide, % for remainder 
console.log("Sum = ",sum)
console.log("Difference = ",diff)

//increment and decrement 
console.log(++sum) //pre increment, i.e., the value is first incremented and then executed
console.log(diff--) //post decrement, i.e., the value is first executed and then decremented 
//Also mention other shorthand operators such as "+=", "-=", "*=",

//Declaring string variables
var myFirstName = "Syed"

//use of quotes inside a string 
var myFirstLanguage = "My first language was \"C\"" //use backslash before each quote
var myRecentLanguage = 'My recent language is "JavaScript"' //use single quotes for the string
var x = `'My recent language is "JavaScript"'` //use backticks if string has both single and double quotes
console.log(myFirstLanguage)
console.log(myRecentLanguage)
console.log(x)

//string concatenation
var name = "My name is " + "Cristiano Ronaldo"
console.log(name)
var Str1 = "amazing"
var Str2 = "JavaScript is "
Str2 += Str1  //(shorthand operator)
console.log(Str2)

//string length : returns integer value, that is, the no. of characters in string
console.log(Str1.length)

//printing last and first element of string
console.log(Str1[0])
console.log(Str1[Str1.length-1])

//Array and multi-dimentional array
var arr1 = [50,60,90]
console.log(arr1[1])

var arr2 = [["John",19],["Smith",68],["Tim",93]]
console.log(arr2[2][1])

//Manipulating arrays
//push() function : adds element(s) to the end of the array
var myArray = ["Steve","Jobs",890,9889]
myArray.push("Tim","Cook") //to push element(s) into array
console.log(myArray)
myArray.push(["Sundar","Pichai"],["Bill","Gates"]) //to push array(s) into array
console.log(myArray)
//pop() function : removes the last array element
console.log(myArray.pop())  
console.log(myArray)
//shift() function : removes the first array element 
console.log(myArray.shift())
console.log(myArray)
//unshift() function : adds element(s) at the beginning of array 
myArray.unshift("Boss")
console.log(myArray)

//objects : values that can contain other values. They use keys to name values, which are a lot like variables.
//consider the below example : 
var course = {
    name : "ADA",
    code : "AD567",
    credits : 4
}
//accessing an object's key : two methods, namely;
//use of dot notation : 
console.log(course.name)
console.log(course.code)
console.log(course.credits)
//use of square brackets and quotes : 
console.log(course["name"])

/*
FOR loop : executing a block of code number of times.
The three condition statements can be omitted as JS doesn't care :
Statement 1 : used to initialize the variable used in loop and is executed
only once before the execution of code block. Also can have multiple initializations.
Statement 2 : condition for execution of code block.
Statement 3 : alters variable value after every iteration. Can also be incremented within the code block.
*/
var num = 0
for(i=0;i<100;i++){
    num+=i
}
console.log("number : ",num) 

//WHILE loop : executes a block of code as long as a specified condition is satified.
//Example :
var i = 1 
var sum = 0
while(i <= 10){
    sum+=i
    console.log(sum)
    i++
}

/*DO-WHILE loop : It's a variant of while loop. Executes code block once, 
check for the condition and continues as long as it is true. Even if the condition 
is false, the code block is executed at least once.*/ 
//Example : 
var i = 1
var sum = 0
do{
    sum+=i
    i++
}
while(i<=10)
console.log(sum)

//typeof operator : determines variable data type
console.log(typeof sum)