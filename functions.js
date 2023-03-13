/*
 * Student Name: Daryll Dan C. Caponpon
 * Section: UV-7L
 * Student Number: 2021-68061
 */

// Import statements
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { openSync, closeSync, appendFileSync } from 'node:fs'

// Generates a unique id with format 'lower(fName)[0]lower(lName)random8lengthstring
const generateUniqueID = (fName, lName) => {
    return fName.charAt(0).toLowerCase() + lName.toLowerCase() + uuidv4().substring(0, 8);
}
// Checks if the passed parameter is valid. If valid, it writes it to a file named user.txt
const addAccount = (infoArr) => {
    // If any checks fail, the function returns false.

    // Checks if there is missing parameter
    if (!(infoArr.length === 4)) {
        console.log("Required parameters missing. Account not saved.");
        return false;
    }

    // Checks if the first and last name is empty
    if (validator.isEmpty(infoArr[0])) {
        console.log("First name is empty. Account not saved.");
        return false;
    }

    if (validator.isEmpty(infoArr[1])) {
        console.log("Last name is empty. Account not saved.");
        return false;
    }
    
    // Checks if the email is valid
    if (!(validator.isEmail(infoArr[2]))) {
        console.log("Invalid email. Account not saved.");
        return false;
    }

    // Checks if the age is a valid int and is greater than 18
    if (!(validator.isInt(infoArr[3].toString(), { min: 18 }))) {
        console.log("Did not meet age requirements. Account not saved.");
        return false;
    }

    // Prepares the string that will be concatenated and appended to users.txt
    let accountDetails = "";
    for(let i = 0; i < infoArr.length; i++) {
        accountDetails = accountDetails + infoArr[i] + ",";
    }

    // Adds the UUID to the string
    accountDetails += generateUniqueID(infoArr[0], infoArr[1]);

    // Appends the string that contains user details to a users.txt
    let fd;
    try {
        fd = openSync('./users.txt', 'a');
        appendFileSync(fd, accountDetails + "\n", 'utf-8');
    } catch (err) {
        console.log("Error writing to file 'users.txt'. Account not saved.");
        return false;
    } finally {
        if (fd !== undefined) {
            closeSync(fd);
        }
    }

    return true;
}

export default {generateUniqueID, accountDetails}