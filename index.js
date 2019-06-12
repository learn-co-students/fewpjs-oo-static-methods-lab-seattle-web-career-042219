class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize(string) {
    let newAr = [];
    let wordsArr = string.split(" ");
    const exceptions = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from"
    ];
    newAr.push(wordsArr[0].charAt(0).toUpperCase() + wordsArr[0].slice(1));
    for (let i = 1; i < wordsArr.length; i++) {
      if (exceptions.includes(wordsArr[i])) {
        // if (wordsArr[i].includes(exceptions)) {
        newAr.push(wordsArr[i]);
      } else {
        newAr.push(wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].slice(1));
      }
    }
    return newAr.join(" ");
  }
}
