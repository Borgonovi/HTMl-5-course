String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)(\w)/g, function(match, group1, group2) {
    console.log(group1, group2);
    return group1+(group2).toUpperCase();
  });
};