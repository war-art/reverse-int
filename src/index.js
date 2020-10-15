module.exports = function reverse (n) {
  let str = String(n);
  let arr = str.split('');
  let reverseArray = [];

  for (let i = str.length-1; i>=0; i--){
      let a = arr [i];
      reverseArray.push(arr[i]);
  }
  return parseInt(reverseArray.join(''));
}
