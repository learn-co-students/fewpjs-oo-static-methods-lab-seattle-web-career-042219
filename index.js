class Formatter {
  //add static methods here

  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
    
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    let nonCapWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
  
    let strArray = string.split(" ")
    for(let i = 1; i < strArray.length; i++) {
      if (nonCapWords.includes(strArray[i]) == false){
        strArray[i] = Formatter.capitalize(strArray[i])
      }
    }
    strArray[0] = Formatter.capitalize(strArray[0])
    return strArray.join(" ")
  }
  
}