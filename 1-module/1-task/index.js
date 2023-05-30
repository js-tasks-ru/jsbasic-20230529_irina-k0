function factorial(n) {
  let fac = 1;

  for (let i = 2; i <= n; i++) {
    fac *= i;
  }

  return fac;
}
