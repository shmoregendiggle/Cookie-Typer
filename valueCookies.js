function valueCookies(input){
    let string = input.toString().replaceAll(",", "");
    let value = 0;
    for(i=0; i<input.length; i++){
        if(string.charAt(i) == " " || writtenText[input[i]] == " "){
            continue;
        }
        if(endingPunctuation.includes(string.charAt(i)) || middlePunctuation.includes(string.charAt(i)) || endingPunctuation.includes(writtenText[input[i]]) || middlePunctuation.includes(writtenText[input[i]]) || string.charAt(i) == "("){
          value += 5000;
          continue;
        }
        if(typeof input == 'string'){
            value += eval("cookie"+string.charAt(i)+".value");
        }else{
            value += eval("cookie"+writtenText[input[i]]).value;
        }
    }
    return value;
}
