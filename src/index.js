module.exports = function toReadable (number) {
    let stringNumber = String(number);
    let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', ];
    let hundred = ' hundred';
    let end = +stringNumber.slice(1);

    // 0 to 19
    if (number < 20) {
        return ones[number];
    }
    // 20 to 99
	if (number > 19 && number < 100) {
      if (stringNumber[1] == 0) {
      	return tens[stringNumber[0]];
      } else {
      	return tens[stringNumber[0]] + ' ' + ones[stringNumber[1]]; 
      }
    }
    // 100, 200, 300, 400, 500....
    if (stringNumber.length === 3 && stringNumber[1] == 0 && stringNumber[2] == 0) {
    	return ones[stringNumber[0]] + hundred;
    }
    // 101 to 999
    if (stringNumber.length === 3 && stringNumber[1] !== 0 && stringNumber[2] !== 0) {
        end = toReadable(end);
    	return ones[stringNumber[0]] + hundred + ' ' + end;
    }
}
