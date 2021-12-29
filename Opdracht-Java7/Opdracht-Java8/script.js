/*const checkNumber = function (number) {
    if (number > 100) {
        return true;
    }
    else {
        return false;
    }
};

console.log(checkNumber(150));
console.log(checkNumber(10));
*/
/*
const checkDoorReaction = function (Max, current, Age) {
    if (Age < 18) {
        return "fuck off"
    }
    if (current >= Max) {
        return "its to busy"
    }
    else { return "come in you are welcome" }
};

console.log(checkDoorReaction(2000, 1500, 15));
console.log(checkDoorReaction(2000, 1500, 20));
console.log(checkDoorReaction(2000, 2000, 20));
console.log(checkDoorReaction(1000, 1500, 20));
*/

const averageCalc = function (nr1, nr2, nr3, nr4, nr5) {
    const total = nr1 + nr2 + nr3 + nr4 + nr5;
    const average = total / 5;
    const averageRounded = Math.round(average);
    return averageRounded;
};

console.log(averageCalc(1, 2, 3, 4, 5));
console.log(averageCalc(3, 10, 10, 21, 32));
console.log(averageCalc(1, 2, 3, 4, 5));