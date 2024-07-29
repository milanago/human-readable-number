module.exports = function toReadable (number) {
    let num = number.toString();
const a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const b = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
 if (number >= 20 && number < 100 && number % 10 === 0) {
    return b[(number - 20) / 10];
}
else if (number >= 20 && number < 100 && number % 10 !== 0) {
 return b[(parseInt(num[0]) * 10 - 20) / 10] + ' ' +  a[parseInt(num[1])];
  }
  else if (number > 120 && num[2] !== '0' && (number - parseInt(num[0]) * 100) > 20){
    return a[parseInt(num[0])] + ' hundred ' + b[(parseInt(num[1]) * 10 - 20) / 10] + ' ' +  a[parseInt(num[2])];
  }
  else if (number >= 100 && num[2] === '0' && num[1] === '0') {
    return a[number/100] + ' hundred';
  }
  else if (number >= 100 && (number - parseInt(num[0]) * 100) < 20 ){
    return a[parseInt(num[0])] + ' hundred ' + a[number - parseInt(num[0]) * 100];
  }
  else if (number > 100 && (number - parseInt(num[0]) * 100) % 10 === 0) {
    return a[parseInt(num[0])] + ' hundred ' + b[((number - parseInt(num[0]) * 100) - 20 )/ 10];
  }
  else {
    return a[number];
  }
  };