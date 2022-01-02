

for (let score = 65; score < 100; score++) {
    const grade = assignGrade(score)
    console.log("for scoring " + score + " points, you get an " + grade)

}

function assignGrade(score) {
    if (score > 90) {
        return "A";
    } else if (score > 80) {
        return "B";
    } else if (score > 70) {
        return "C";
    } else if (score > 65) {
        return "D";
    } else {
        return "E";
    }
}