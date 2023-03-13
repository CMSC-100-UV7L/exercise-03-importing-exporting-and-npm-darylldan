/*
 * Various test cases for the programs which includes correct and incorrect inputs. 
 */

import account from "./functions.js"

/* ----- generateUniqueID() Test Cases ----- */
console.log("\n--------------- Test Cases for generateUniqueID() ---------------")
console.log("Func Params: 'Mark Daniel', 'Ramos'\t|\tResult: " + account.generateUniqueID('Mark Daniel', 'Ramos'));
console.log("Func Params: 'Tim', 'Berners-Lee'\t|\tResult: " + account.generateUniqueID('Tim', 'Berners-Lee'));
console.log("Func Params: 'Daryll', 'Caponpon'\t|\tResult: " + account.generateUniqueID('Daryll', 'Caponpon'));
console.log("\n");

/* ----- addAccount() Test Cases ----- */
console.log("\n--------------- Test Cases for generateUniqueID() ---------------")
console.log("Func Param: ['Berners-Lee', 'timmyB@kernel.org', 25] => [Insufficient Parameters]")
console.log("Result: " + account.addAccount(["Berners-Lee", "timmyB@kernel.org", 25]) + "\n");

console.log("Func Param: ['', 'Berners-Lee', 'timmyB@kernel.org', 25] => [First Name is Empty]")
console.log("Result: " + account.addAccount(["" ,"Berners-Lee", "timmyB@kernel.org", 25]) + "\n");

console.log("Func Param: ['Tim', '', 'timmyB@kernel.org', 25] => [Last Name is Empty]")
console.log("Result: " + account.addAccount(["Tim" ,"", "timmyB@kernel.org", 25]) + "\n");

console.log("Func Param: ['Tim', 'Berners-Lee', 'legit email', 25] => [Invalid Email]")
console.log("Result: " + account.addAccount(["Tim" ,"Berners-Lee", "legit email", 25]) + "\n");

console.log("Func Param: ['Tim', 'Berners-Lee', 'timmyB@kernel.org', 17] => [Age Req Fail]")
console.log("Result: " + account.addAccount(["Tim" ,"Berners-Lee", "timmyB@kernel.org", 17]) + "\n");

console.log("Func Param: ['', 'Berners-Lee', 'legit email', 25] => [Combination of Errors]")
console.log("Result: " + account.addAccount(["" ,"Berners-Lee", "legit email", 25]) + "\n");

console.log("Func Param: ['Tim', 'timmyB@kernel.org', 25] => [Combination of Errors]")
console.log("Result: " + account.addAccount(["Tim" , "timmyB@kernel.org", 4]) + "\n");

console.log("Func Param: ['Tim', 'Berners-Lee', 'timmyB@kernel.org', 25] => [Correct]")
console.log("Result: " + account.addAccount(["Tim" ,"Berners-Lee", "timmyB@kernel.org", 25]) + "\n");

console.log("Func Param: ['Daryll Dan', 'Caponpon', 'dccaponpon@up.edu.ph', 25] => [Correct]")
console.log("Result: " + account.addAccount(["Daryll Dan" ,"Caponpon", "dccaponpon@up.edu.ph", 25]) + "\n");

console.log("Func Param: ['Zild', 'Benitez', 'iloveumymedicine@gmail.com', 25] => [Correct]")
console.log("Result: " + account.addAccount(["Zild" ,"Benitez", "iloveumymedicine@gmail.com", 25]) + "\n");
