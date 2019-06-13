class Formatter {
  //add static methods here
  static capitalize(string) {
  	return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
  	return string.replace(/[^a-zA-Z0-9-' ]+/g, "");
  }

  static titleize(string) {
  	let words = string.split(' ');
  	let restricted = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
  	
  	words[0] = Formatter.capitalize(words[0])
  	for (let i = 1; i < words.length; i++) {
  		if (!restricted.includes(words[i])) {
  			words[i] = Formatter.capitalize(words[i])
  		}
  	}
  	return words.join(' ');
  }
}