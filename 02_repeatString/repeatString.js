const repeatString = function(word, number) {

    if (typeof word === 'string' && typeof number === 'number' && number > 0) {
        let wordRepeat;

        for (let i = 0; i < number; i++) {
            if ( wordRepeat === undefined){
                wordRepeat = word; 
            }else {
                wordRepeat = wordRepeat + word;
            }
        }
        return wordRepeat;
    } else if (number === 0 || word === ''){
        return '';
    } else {
        return 'ERROR';
    }

};

// Do not edit below this line
module.exports = repeatString;
