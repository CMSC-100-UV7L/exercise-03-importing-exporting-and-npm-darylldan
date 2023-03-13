import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { openSync, closeSync, appendFileSync } from 'node:fs'

const generateUniqueID = (fName, lName) => {
    return fName.charAt(0).toLowerCase() + lName.toLowerCase() + uuidv4().substring(0, 8);
}

const addAccount = (infoArr) => {
    console.log(infoArr)
    if (!(infoArr.length === 4)) {
        console.log("Required parameters missing. Account not saved.");
        return false;
    }

    if (validator.isEmpty(infoArr[0])) {
        console.log("First name is empty. Account not saved.");
        return false;
    }

    if (validator.isEmpty(infoArr[1])) {
        console.log("Last name is empty. Account not saved.");
        return false;
    }

    if (!(validator.isEmail(infoArr[2]))) {
        console.log("Invalid email. Account not saved.");
        return false;
    }

    if (!(validator.isInt(infoArr[3].toString(), { min: 18}))) {
        console.log("Did not meet age requirements. Account not saved.");
        return false;
    }

    let accountDetails = "";
    for(let i = 0; i < infoArr.length; i++) {
        accountDetails = accountDetails + infoArr[i] + ",";
    }

    accountDetails += generateUniqueID(infoArr[0], infoArr[1]);

    let fd;
    try {
        fd = openSync('users.txt', 'a');
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