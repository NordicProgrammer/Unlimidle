function getNewWord(){
    return listOfWords[Math.floor(Math.random() * listOfWords.length)]
}
function checkLength(userEnteredWord, word){
    if (userEnteredWord.length == word.length) {
        return true;    
    }else{
        return false;
    }
}
function createReturnWordList(userEnteredWord){
    var returnList = []
    for (var i = 0; i < userEnteredWord.length; i++) {
        userEnteredWord.charAt(i)
        returnList.push([userEnteredWord.charAt(i), 0])
      }
    return returnList;
}
function generateEmptyGameList(word){
    var length = word.length;
    var returnList = [];
    for (let i = 0; i < length; i++) {
        var addList = [];
        for (let i = 0; i < length; i++) {
            addList.push([0,0,'white', '#3a3a3c', '#3a3a3c'])            
        }
        returnList.push(addList)
    }
    return returnList;
}
function checkUserEnteredWord(userEnteredWord, word){
    var userEnteredWordList = userEnteredWord.split('');
    if(userEnteredWord === word){
        return true;
    }else{
    var wordList = word.split('');
    var usableChars = word.split('')
    var returnList = createReturnWordList(userEnteredWord)
    console.log("start of main")
    for (let i = 0; i < userEnteredWordList.length; i++) {
        console.log(i)
        var userEnteredChar = userEnteredWordList[i];
        var currentWordChar = wordList[i];
        if(userEnteredChar === currentWordChar){
            returnList[i][1] = 2;
            console.log("da")
            usableChars.splice(usableChars.indexOf(userEnteredChar),1)
        

        }
        console.log(returnList)
        console.log(usableChars)
        
    }
    console.log('start os set ets')
    for (let i = 0; i < userEnteredWordList.length; i++) {
        var userEnteredChar = userEnteredWordList[i];
        if(usableChars.includes(userEnteredChar) && returnList[i][1] == 0){
            
            returnList[i][1] = 1;
            usableChars.splice(usableChars.indexOf(userEnteredChar),1)
            
        }
    }
    return returnList;
}
}
function isWord(word){
    return listOfWords.includes(word)
}
console.log(checkUserEnteredWord('worldel','worldle'))