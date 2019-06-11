class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize (string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(sentence) {
    let exclude = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let arr = [];
    let arrayOfWords = sentence.split(" ")
    for (let n = 0; n < arrayOfWords.length; n++) {
      if (n == 0) {
        arr.push(this.capitalize(arrayOfWords[n]))
      } else {
        if (exclude.includes(arrayOfWords[n])) {
          arr.push(arrayOfWords[n])
        } else {
          arr.push(this.capitalize(arrayOfWords[n]))
        }
      }

    }
    return arr.join(" ");
  }
}