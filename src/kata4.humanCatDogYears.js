//Many different ways to do this one but I like your attempt at keeping it fairly clear and concise. Also, good use of a while loop, which you don't see often.
//However, if the human years number entered was 0 or a minus number, this code wouldn't run as intended. Your results would be [31, 140, 169] instead of [0, 0, 0].
//Always a good idea to have a failsafe incase the code isn't used for the intended purpose or a user enters a wrong value.
//Very good effort.
const humanCatDogYears = (number) => {
    let count = 0;
    let dogYears = 0;
    let catYears = 0;
    let humanYears = number;
    while(number !== 0 && count < 2) {
        number--;
        count++;
        if(count === 1) {
            dogYears += 15;
            catYears += 15;
        } else {
            dogYears += 9 + (number * 5);
            catYears += 9 + (number * 4);
        }
    } 
    return [humanYears, catYears, dogYears];
}

module.exports = humanCatDogYears;
