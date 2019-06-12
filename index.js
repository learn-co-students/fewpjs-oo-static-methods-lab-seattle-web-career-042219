class Formatter {
  //add static methods here
  static capitalize(string) {
    return (string.charAt(0).toUpperCase() + string.slice(1))
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string){

    let newString = ""
    let sentenceArray = string.split(" ");
    let i = 0
    console.log(sentenceArray)
    while (i < sentenceArray.length) {
      if (i === 0) {
      newString += Formatter.capitalize(sentenceArray[i])
    } else {
      if (sentenceArray[i] === "the" || sentenceArray[i] === "a" || sentenceArray[i] === "an"
       || sentenceArray[i] === "but" || sentenceArray[i] === "of" || sentenceArray[i] === "and" ||
       sentenceArray[i] === "for" || sentenceArray[i] === "at" || sentenceArray[i] === "by" ||
       sentenceArray[i] === "from") {
         newString +=' ' + sentenceArray[i]
       } else {
         newString += ' ' + Formatter.capitalize(sentenceArray[i])
       }
      }
      i++
    }
    return newString;
  }
}
