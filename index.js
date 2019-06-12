class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }
  static titleize(string) {
    let except = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let arr = []

    let str= string.split(" ")
    for (let i = 0; i < str.length; i++)
      if (i == 0) {
        arr.push(this.capitalize(str[i]))
      } else if (except.includes(str[i])){
        arr.push(str[i])
      } else {
        arr.push(this.capitalize(str[i]))
      }
      return arr.join(" ")
  }
}
