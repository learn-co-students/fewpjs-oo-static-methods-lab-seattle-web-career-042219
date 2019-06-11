class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let output = []

    let newString = string.split(" ");
    for (let i = 0; i < newString.length; i++) {
      if ( i == 0 ) {
        output.push( this.capitalize(newString[i]))
      } else {
        if (exceptions.includes(newString[i])) {
          output.push(newString[i])
        } else {
          output.push(this.capitalize(newString[i]))
        }
      }
    }
    return output.join(" ");
  }
}