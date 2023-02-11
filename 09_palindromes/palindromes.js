const palindromes = function (phrase) {

    phrase = phrase.toLowerCase().replace(/[/\s.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let palindromeLength = phrase.length;
    let palindrome = "";

    for(i = palindromeLength - 1; i >= 0; i--) {
        palindrome = palindrome + phrase[i];
    }
    if(palindrome === phrase){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
