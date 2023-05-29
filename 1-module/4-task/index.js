function checkSpam(str) {
  if (!str) {
    return false;
  }

  const lowerCaseStr = str.toLowerCase();

  return lowerCaseStr.includes('xxx') || lowerCaseStr.includes('1xbet');
}
