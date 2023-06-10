function getMinMax(str) {
  let arr = str.split(" ").filter((elem) => !isNaN(Number(elem)));
  let min = arr.reduce((a, b) => Math.min(a, b));
  let max = arr.reduce((a, b) => Math.max(a, b));

  return { min, max };
}
