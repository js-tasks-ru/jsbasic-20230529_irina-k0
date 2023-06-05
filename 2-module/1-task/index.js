function sumSalary(salaries) {
  let sum = 0;

  for (elem in salaries) {

    if (!isFinite(salaries[elem])) {
      continue;
    }

    sum += salaries[elem];
  }

  return sum;
}
