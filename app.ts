// All Essentials Data Types in TypeScript

// String:-
let myName = "Younis Ali" // in JS we can reassign the variable to a number or boolean but in TS we can't do that because of the type inference

// In TS we can also specify the type of the variable explicitly

let myName2: string = "Younis Ali" 
let myName3 : string = "Younis Ahmad" 

// if we declear a variable specify for string like

let myRole : string;
 // Then this variable now become specified only for string and if we try to put any type of data except string then TS will give us an error

 myRole = "Developer" // this is correct
 myRole = 123 // this will give us an error because we can't assign a number to a string variable

  // Note : This is happen in every data types in TS (String , Number , Boolean)

 // Number:-

 let age = 25 // in JS we can reassign the variable to a string or boolean but in TS we can't do that because of the type inference

 let age2 : Number = 30
 age2 = 35 // this is correct

 let age3 : Number;
 age3 = 40 // this is correct
 age3 = "Younis Ali" // this will give us an error because we can't assign a string to a number variable

 //Boolean:-

 let isDeveloper = true // in JS we can reassign the variable to a string or number but in TS we can't do that because of the type inference
 let isDeveloper2 : boolean = false

 let isDeveloper3 : boolean;

isDeveloper3 = true // this is correct
isDeveloper = "Younis Ali" // this will give us an error because we can't assign a string to a boolean variable

// functions in TypeScript:-

function greet(name : string) {
   console.log(`Hello, ${name}!`);
}

greet("Younis Ali") // this is correct
greet(123) ;// this will give us an error because we can't assign a number to a string parameter

// Same as Arrow functions

let myRoleInTch = (role : string) => {
    console.log(`My role is ${role}`);
}
myRoleInTch("Developer") // this is correct
myRoleInTch(123) // this will give us an error because we can't assign a number to a string parameter


// Arrays in TypeScript:-

let myFriends = ["Ali", "Ahmed", "Hassan"] // in JS we can reassign the variable to a number or boolean but in TS we can't do that because of the type inference

let myFriends2 : string[] = ["Ali", "Ahmed", "Hassan"] // this is correct
myFriends2 = ["Younis", "Ahmad"] // this is correct
myFriends2 = [123, 456] // this will give us an error because we can't assign a number array to a string array variable

let numbers : number[] = [1, 2, 3, 4, 5] // this is correct
numbers = [6, 7, 8, 9, 10] // this is correct
numbers = ["Younis", "Ali"] // this will give us an error because we can't assign a string array to a number array variable


// Tumple in TypeScript:-

let firstPersonInfo : [string, number] = ["Younis Ali", 25] // this is correct
firstPersonInfo = ["Ahmed Ali", 30] // this is correct
firstPersonInfo = [25, "Younis Ali"] // this will give us an error because we can't assign a number to a string and a string to a number in a tuple variable


// Enum in TypeScript:-

enum Role {
    Admin,
    User,
    Guest
}
let myRoleInEnum : Role = Role.Admin // this is correct

console.log(myRoleInEnum) // this will print 0 because the first value in the enum is assigned the value of 0 by default

myRoleInEnum = Role.User // this is correct
myRoleInEnum = "Admin" // this will give us an error because we can't assign a string to an enum variable

enum statusCode {
    Success = 200,
    NotFound = 404,
    ServerError = 500
};

let myStatusCode : statusCode = statusCode.Success // this is correct
console.log(myStatusCode) // this will print 200 because we assigned the value of 200 to the Success enum member
myStatusCode = statusCode.NotFound // this is correct

myStatusCode = 404 // this is correct because we can assign the value of the enum member to the variable
myStatusCode = "NotFound" // this will give us an error because we can't assign a string to an enum variable