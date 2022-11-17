function average(scores) {
    const average = scores.reduce((a, b) => a + b) / scores.length;
    return Math.round(average);
}