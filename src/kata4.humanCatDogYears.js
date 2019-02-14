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
