const numberToReversedDigits = (number) => {
    return number.toString().split('').map(int => parseInt(int)).reverse();
} 

module.exports = numberToReversedDigits;
