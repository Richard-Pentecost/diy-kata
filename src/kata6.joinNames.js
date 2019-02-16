//Good code. Clear and concise, makes sense.
const joinNames = (namesObj) => {
    let count = 0;
    return namesObj.reduce((acc, next) => {
        count++;
        if(acc === '') {
            return acc + next.name;
        } else if(count === namesObj.length) {
            return acc + ' & ' + next.name;
        } else {
            return acc + ', ' + next.name;
        }
    }, '');
}

module.exports = joinNames;
