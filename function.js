var myGlobalVar = "India"

function myFirst() {
    console.log("Welcome to Js ;-()")
}

myFirst()

//passing parameters to function
//parameters are variables that act as placeholder for the values that are to input in a function when it is called
function add(a,b) {
    var sum = a+b
    console.log(sum)
} 

add(10,9)
//global variables : refer to visibility of variables in a program

function myFunc1() {
    globalVar = 12 //Since var keyword is not used before the variable in this function, the variable becomes global. 
    var globalVar2 = 14 //since var keyword is used before the variable in this function, the variable becomes local to this function, i.e., has scope only within this function
}
function myFunc2() {
    if (typeof myGlobalVar != "undefined") {
        console.log("myGlobalVar is global")
    }  
    if (typeof globalVar != "undefined") {
        console.log("globalVar is global")
    }
    if (typeof globalVar2 != "undefined") {
        console.log("globalVar2 is global")
    }
}

myFunc1()
myFunc2()
//try accessing local variable from myFunc1
//console.log(globalVar2) will show an error that the variable is not defined

//In case of local variable and global variable having same name, then local variable takes precedence over global variable. Consider below example:
var exp = "India"
function example() {
    var exp = "China"
    return exp
}
console.log(example()) //prints China

//Assigning returned values to variables
var result = ""
result = example()
console.log(result)

//printing array as a string
var myArr = ["smith",20,30]
console.log(myArr)
console.log(JSON.stringify(myArr))

/*equality and inequality operator:
    1."==" : performs type conversion if necessary
    2."==="(strict equality operator) : doesn't perform type conversion
*/
var test = "10"
var test2 = 10
function check() {
    if (test==test2) {
        console.log("Type conversion performed")
    }
    if (test===test2) {
        console.log("Equal")
    }
    if (test != test2) {
        console.log("Not equal")
    }
    if (test !== test2) {
        console.log("Not Equal")
    }
}    
check()

//Switch statement : Use the switch statement to select one of many code blocks to be executed.
function check(a,op,b) {
    var answer = ""
    switch(op) {
        case '+': 
            answer = a+b
            return answer
        case '-':
            answer = a - b
            return answer
        default:
            return -1    
    }
}
console.log(check(3,'+',6))
