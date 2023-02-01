const reverseString = function(word) {
    
    if (word === ''){
        return ''
    } else {
        let reverseWord;
            for (let i = word.length; i >= 0; i--){
                if (reverseWord === undefined) {
                    reverseWord = word[i];
                }else {
                    reverseWord = reverseWord + word[i]
                }
            }
        return reverseWord;
    }
    return false;
};

// Do not edit below this line
module.exports = reverseString;
