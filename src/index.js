module.exports = function check(str, bracketsConfig) {
  // your solution
  str = str.split('');
  var bracket = [];
  if (str.length % 2 != 0) return false;
  var i = 0;
  while (i < str.length) {
    for (var j = 0; j < bracketsConfig.length; j++) {
      if (str[i] == bracketsConfig[j][1] && bracket[bracket.length - 1] == bracketsConfig[j][0]) bracket.pop();
      else if (str[i] == bracketsConfig[j][0]) bracket.push(str[i])
    }
    i++
  }
  if (bracket.length == 0) return true;
  else return false;
}
