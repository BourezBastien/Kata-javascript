function stringy(size) {
  if (size > 0 && size % 2 == 0) return "10".repeat(size / 2);
  else return "10".repeat(size / 2) + 1;
}
