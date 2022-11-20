function averages(arr) {
  let result = [];
  if (!arr) {
    return result;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    result.push((arr[i] + arr[i + 1]) / 2);
  }
  return result;
}
