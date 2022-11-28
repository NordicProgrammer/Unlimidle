const {
  createApp
} = Vue
var word = getNewWord()
createApp({
  created() {
    window.addEventListener('keydown', (e) => {
      if(this.currentLine != this.wordLength){
      if( /^[a-zA-Z]+$/.test(e.key) && e.key.length == 1){
        if(this.currentChar < this.wordLength){
        this.charList[this.currentLine][this.currentChar][0] = e.key
        this.currentChar++
        }
      }else if(e.key == "Enter"){
        if(this.currentChar == this.wordLength){
          var userEnteredWord = ""
          for (let i = 0; i < this.charList.length; i++) {
            const element = this.charList[this.currentLine][i][0];
            userEnteredWord = userEnteredWord+element
            
          }
          userEnteredWord = userEnteredWord.toLowerCase()
          if(isWord(userEnteredWord) == true){
          var checkList = checkUserEnteredWord(userEnteredWord, this.word);
          console.log(checkList)
          if(checkList === true){
            for (let i = 0; i < this.charList.length; i++) {
              this.charList[this.currentLine][i][2] = '#538d4e'
              this.charList[this.currentLine][i][4] = '#538d4e'    

            }
            this.didWin = true
            setTimeout(() => this.nextGameCountDown = 4, 1000)
            setTimeout(() => this.nextGameCountDown = 3, 2000)
            setTimeout(() => this.nextGameCountDown = 2, 3000)
            setTimeout(() => this.nextGameCountDown = 1, 4000)
            setTimeout(() => this.nextGameCountDown = 0, 5000);
            setTimeout(() => this.nextGameCountDown = 5, 5000);

            setTimeout(() => this.didWin = false, 5000);

            var newWord = getNewWord()
            setTimeout(() =>  this.word = newWord, 5000);
            setTimeout(() =>  this.wordLength = newWord.length, 5000);
            setTimeout(() =>  this.currentChar = 0, 5000);
            setTimeout(() =>  this.currentLine = 0, 5000);
            setTimeout(() =>  this.charList = generateEmptyGameList(newWord), 5000);
          }else{
          for (let i = 0; i < checkList.length; i++) {
            console.log(i)
            console.log(checkList[i][1])
            if(checkList[i][1] === 0){
              this.charList[this.currentLine][i][2] = '#3a3a3c'    
              this.charList[this.currentLine][i][3] = 'white'     

            }else if(checkList[i][1] === 1){
              this.charList[this.currentLine][i][2] = '#b59f3b'    
              this.charList[this.currentLine][i][3] = '#3a3a3c'
              this.charList[this.currentLine][i][4] = '#b59f3b'    

            }else if(checkList[i][1] === 2){
              this.charList[this.currentLine][i][2] = '#538d4e'    
              this.charList[this.currentLine][i][3] = '#3a3a3c'
              this.charList[this.currentLine][i][4] = '#538d4e'    

            }

          }
          this.currentLine++
          this.currentChar = 0;
          if(this.currentLine == this.wordLength){
            this.failed = true
            setTimeout(() => this.nextGameCountDown = 4, 1000)
            setTimeout(() => this.nextGameCountDown = 3, 2000)
            setTimeout(() => this.nextGameCountDown = 2, 3000)
            setTimeout(() => this.nextGameCountDown = 1, 4000)
            setTimeout(() => this.nextGameCountDown = 0, 5000);
            setTimeout(() => this.nextGameCountDown = 5, 5000);

            setTimeout(() => this.failed = false, 5000);

            var newWord = getNewWord()
            setTimeout(() =>  this.word = newWord, 5000);
            setTimeout(() =>  this.wordLength = newWord.length, 5000);
            setTimeout(() =>  this.currentChar = 0, 5000);
            setTimeout(() =>  this.currentLine = 0, 5000);
            setTimeout(() =>  this.charList = generateEmptyGameList(newWord), 5000);
          }
        }
        }else{
          this.isNotWordBoolen = true
          this.notAWord = userEnteredWord;
          setTimeout(() => this.isNotWordBoolen = false, 3000);
          setTimeout(() => this.notAWord = "", 3000);



        }
        }else{
          this.tooShortWord = true
          setTimeout(() => this.tooShortWord = false, 3000);
        }
      }else if(e.key == 'Backspace')    {
        if(this.currentChar > 0){
          this.currentChar = this.currentChar - 1;
          this.charList[this.currentLine][this.currentChar][0] = 0
        }
      }
      }else{
        console.log('failed')
      }
    });
  },
  data() {
    return {
      word: word,
      wordLength:word.length,
      currentLine: 0,
      currentChar: 0,
      notAWord:"",
      isNotWordBoolen: false,
      charList: generateEmptyGameList(word),
      tooShortWord: false,
      didWin: false,
      nextGameCountDown: 5,
      failed: false
    }
  }
}).mount('#game')