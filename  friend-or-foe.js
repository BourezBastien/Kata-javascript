function friend(friends) {
  let bf = [];
  for (n of friends) {
    if (n.length == 4) {
      bf.push(n);
    }
  }
  return bf;
}
