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
    for (let i = 0; i < wordsArr.length; i++) {
      if (i === 0) {
        newAr.push(this.capitalize(wordsArr[i]));
      } else {
        if (exceptions.includes(wordsArr[i])) {
          newAr.push(wordsArr[i]);
        } else {
          newAr.push(this.capitalize(wordsArr[i]));
        }
      }
    }
    return newAr.join(" ");
  }
}
