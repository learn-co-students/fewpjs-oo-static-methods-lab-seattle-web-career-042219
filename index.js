class Formatter {
  static capitalize(str) {
    return str[0].toUpperCase() + str.substr(1)
  }

  static sanitize(str) {
    return str.replace(/[^\w-'\s]/gi, "")
  }

  static titleize(str) {
    const NONCAPS = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]

    const words = str.split(' ')
    words[0] = Formatter.capitalize(words[0])
    for (let i = 1; i < words.length; i++) {
      if (!NONCAPS.includes(words[i])) {
        words[i] = Formatter.capitalize(words[i])
      }
    }

    return words.join(' ')
  }

}
