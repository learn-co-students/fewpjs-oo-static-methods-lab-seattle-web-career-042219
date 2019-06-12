class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
    
  }


  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string) {
    let ignoreWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let array = string.split(" ")
    let newArray = []
    array.forEach((word) => {
      if (!ignoreWords.includes(word)) {
        word = this.capitalize(word)
        newArray.push(word)
      } else {
        newArray.push(word)
      }
    })
    
    newArray[0] = this.capitalize(newArray[0])
    return newArray.join(" ")
  }


}