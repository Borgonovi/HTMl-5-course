/*String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)(\w)/g, function(match, grup1, grup2) {
  	return grup1+(grup2).toUpperCase();
  });
};*/

function uppercase(string) {
	return string.toUpperCase();
}

function lowercase(string) {
	return string.toLowerCase();
}

module.exports = {
	uppercase: uppercase,
	lowercase: lowercase
};