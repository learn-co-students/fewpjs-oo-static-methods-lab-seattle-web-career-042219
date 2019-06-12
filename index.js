class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
  }

  static sanitize(string) {
    string = string.replace(/[^a-z0-9 \.,_'-]/gim,"");
    return string
  }

  static titleize(string) {

    let words = string.split(' ');

    string = words.map( word => {
      if (word === 'the' || word === 'a' || word === 'an' || word === 'but' || word === 'of' || word === 'and' || word === 'for' || word === 'at' || word === 'by' || word === 'from') {
        word;
      } else {
        word = word.charAt(0).toUpperCase() + word.substring(1);
      }
      return word;
    }).join(' ');
    return string.charAt(0).toUpperCase() + string.substring(1)

  }
}
