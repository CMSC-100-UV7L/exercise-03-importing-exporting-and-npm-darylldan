import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';

const generateUniqueID = (fName, lName) => {
    return fName.charAt(0).toLowerCase() + lName.toLowerCase() + uuidv4().substring(0, 8);
}

console.log(generateUniqueID("Alan", "Turing"))