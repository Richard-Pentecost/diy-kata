//This code passes the test you wrote, however, if you had done more thourough testing we would see that Math.round returns us the wrong value on a specific run.
//See test feedback for more.
//Great use of template literals!
const reachDestination = (distance, speed) => {
    const time = Math.round((distance/speed) * 2) / 2;
    return `I should be there in ${time} hours.`;
}

module.exports = reachDestination;
