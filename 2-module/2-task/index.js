function isEmpty(obj) {

  for (elem in obj) {
    return false;
  }

  return true;
}
