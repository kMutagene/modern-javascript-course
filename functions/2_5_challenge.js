// students score, total possible score
// 15/20 -> you got a {letter grade} ({percentage})
// A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: 0-59

let getGradeForPercentage = function (percentage) {
    let adjustedPercentage = percentage
    if (percentage < 1) {
        adjustedPercentage = 100 * percentage
    }
    if (0 <= adjustedPercentage && adjustedPercentage <= 59) {
        return 'a F'
    } else if (60 <= adjustedPercentage && adjustedPercentage <= 69) {
        return 'a D'
    } else if (70 <= adjustedPercentage && adjustedPercentage <= 79) {
        return 'a C'
    } else if (80 <= adjustedPercentage && adjustedPercentage <= 89) {
        return 'a B'
    } else if (90 <= adjustedPercentage && adjustedPercentage <= 100) {
        return 'an A'
    } else {
        return 'IDK how you can score above 100, but there you are.'
    }
}

let getGrade = function (studentScore, totalPossibleScore) {
    let percentage = studentScore / totalPossibleScore
    return `You got ${getGradeForPercentage(percentage)} (${percentage * 100}%)!`
}

console.log(getGrade(90,100))