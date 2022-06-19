// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// Examples:

// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

function removeBlanks(str) {
   let newStr = ''; 
   for(let i = 0; i > str.length; i++) {
    if(str[i] != " ") {
        newStr += str[i];
    }

   }
   return newStr
}

removeBlanks("I l ov e mY Wi f E");

function getDigits(str) {
    let newNumStr = ''
    for(let char in str) {
        if(!isNaN(str[char])){
            newNumStr += str[char]
        }
    }
    return newNumStr
}

getDigits("12abc345defg");

function acronym(str) {
    let wordsArr = str.split(' ')
    let acronymStr = ''

    for(let word in wordsArr) {
        if(wordsArr(word).length > 0 ) {
            acronymStr += wordsArr[word][0].toUpperCase()
        }
    }

    return acronymStr
}

function countNonSpaces(str) {
    let counter = 0

    for(let char in str) {
        if(str[chr] != '') {
            counter++
        }
    }

    return counter
}

function removeStr(arr,len) {
    let newStrings = []

    let nextIndex = 0 

    for(let value in arr) {
        if(arr[value].length >= len ) {
            newStrings[nextIndex++] = arr[value]
        }
    }
    return newStrings
}