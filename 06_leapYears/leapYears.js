const leapYears = function(year) {

    let centYear = year % 400;
    let divYear = year % 4;
    let byCent = year % 100;

    if (year > 100 && centYear === 0) {
        return true;
    } else if (byCent != 0 && divYear === 0) {
        return true;
    } else {
        return false
    }


};

// Do not edit below this line
module.exports = leapYears;
