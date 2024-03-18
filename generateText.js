const endingPunctuation = [".", "?", "!"];
const middlePunctuation = [",", ";", '"', ")"];

function generateText(minWordLength, maxWordLength, minSentenceLength, maxSentenceLength, words, punctuate){
    let sentance = "";
    let endingOrMiddle = Math.floor(Math.random() * 2);
    console.log(endingOrMiddle);
    let sentenceLength = Math.floor(Math.random() * (maxSentenceLength - minSentenceLength + 1) ) + minSentenceLength;
    if(punctuate && endingOrMiddle == 0){
      var wordToPunctuate = Math.floor(Math.random() * (sentenceLength-1));
    }
    for(i = 0; i<sentenceLength; i++){
        let middlePunct = middlePunctuation[Math.floor(Math.random() * 4)];
        if(i>0){
            sentance += " ";
        }
        if(punctuate && i == wordToPunctuate && middlePunct == '"' && endingOrMiddle == 0){
          sentance += '"';
        }
        if(punctuate && i == wordToPunctuate && middlePunct == ")" && endingOrMiddle == 0){
          sentance += "(";
        }
        let wordLength = Math.floor(Math.random() * (maxWordLength - minWordLength + 1) ) + minWordLength;
        if(words){
          let filter = new RegExp(`\\b\\w{`+wordLength+`}\\b`, 'g');
          let cutLength = allWords.match(filter);
          let cutLetters = [];
          for(t=0;t<cutLength.length;t++){
            if(checkLetters(cutLength[t]) != ""){
              cutLetters.push(checkLetters(cutLength[t]));
            }
          }
          console.log("b")
          sentance += randomWord(cutLetters, sentance);
        }else{
          for(j = 0; j<wordLength; j++){
              let letter = keysInUse[Math.floor(Math.random() * (keysInUse.length))];
              sentance += letter;
          }
        }
        if(punctuate && i == wordToPunctuate && endingOrMiddle == 0){
          sentance += middlePunct;
        }
    }
    if(punctuate && endingOrMiddle == 1){
      sentance += endingPunctuation[Math.floor(Math.random() * 3)];
    }
    return sentance;
  
}
function randomWord(cutLetters, s){
  let output = cutLetters[Math.floor(Math.random() * (cutLetters.length))];
  if(s.includes(output, s)){
    return randomWord(cutLetters, s);
  }
  return output;
}
function checkLetters(word){
  let filter = new RegExp(`[`+keysInUse+`]`, 'g');
  let wordMatch = word.match(filter);
  if(wordMatch == null){
    return "";
  }
  if(wordMatch.toString() == word.split("")){
    return word;
  }
  return "";
}

