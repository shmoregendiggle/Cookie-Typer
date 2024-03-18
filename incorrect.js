function getIncorrect(){
    let incorrect = [];
    let compareGenerated = sentance.substring(0, writtenText.length);
    for(i = 0; i<writtenText.length; i++){
        if(writtenText.charAt(i) != compareGenerated.charAt(i)){
            incorrect.push(i);
        }
    }
    return incorrect;
}
function showIncorrect(incorrect, text){
    let incorrectText = text;
    let incorrectChars = [];
    for(i=0; i<incorrect.length; i++){
        incorrectChars.push(incorrectText.charAt(incorrect[i]));
        incorrectText = incorrectText.substring(0,incorrect[i])+"`"+incorrectText.substring(incorrect[i]+1,incorrectText.length);
    }
    for(j=0; j<incorrectChars.length; j++){
        for(t=0; t<incorrectText.length; t++){
            if(incorrectText.charAt(t) == "`"){
                if(incorrectChars[j] == " "){
                    incorrectText = incorrectText.substring(0,t)+"<span~class='incorrectSpace'>&#160;</span>"+incorrectText.substring(t+1,incorrectText.length);
                }else{
                incorrectText = incorrectText.substring(0,t)+"<span~class='incorrect'>"+ incorrectChars[j] +"</span>"+incorrectText.substring(t+1,incorrectText.length);
                }
                t=Infinity;
            }
        }
    }
    return incorrectText;
}