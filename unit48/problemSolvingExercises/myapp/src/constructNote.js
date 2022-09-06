function getCounts(inputStr) {
    // helper function that takes in a string and 
    // returns an object with the counts of each letter in the string

    // create an empty obj
    const counts = {};

    // iterate over each char in inputStr
    for (let i = 0; i < inputStr.length; i++) {
        if (inputStr[i] in counts) {
        // if char is in counts, increment by 1
        counts[inputStr[i]] += 1;
        } else {
        // else set count of char equal to 1
        counts[inputStr[i]] = 1;
        }
    }
    return counts;
}


function constructNote(letters, message) {
    // get counts for both letters and message
    const lettersCounts = getCounts(letters);
    const messageCounts = getCounts(message);

    // iterate thru each char in letters
    for (let key in lettersCounts) {
        // if letter count in letters > letter count in message, return false
        if (lettersCounts[key] > messageCounts[key]) {
            return false;
        }
    }

    return true;
   
}

export default constructNote;