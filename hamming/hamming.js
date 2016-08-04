var Hamming = function () {

};

Hamming.prototype.compute = function (str1, str2) {
  var hamNum = 0;
  this.str1 = str1;
  this.str2 = str2;
  //check that strings are equal length
  if (this.str1.length !== this.str2.length) {
    throw "DNA strands must be of equal length.";
  }

  for (i=0; i < 15; i++) {
    //if array contents at same position don't match, +1 to counter
    if (str1[i] != str2[i]) {
      hamNum = hamNum + 1;
    }
  }
  return hamNum;
};

module.exports = Hamming;
