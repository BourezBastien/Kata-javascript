function points(games) {
  let result = [];
  let score = 0;
  games.forEach(x => {
    result = x.split(":");
    if(parseInt(result[0])>parseInt(result[1]))
      score += 3;
    else if(result[0]==result[1])
      score += 1;
    else
      score += 0;
  })
  return score;
}
