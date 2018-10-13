function add(number) {
    if (number == "")
        return 0;

    if (number.includes(",")) {
        var numberArray = number.split(",");
        var total = 0;
        var negativeNumbers = []
        for (var i = 0; i < numberArray.length; i++) {
            if (parseInt(numberArray[i]) < 0) {
                negativeNumbers.push(numberArray[i])
            }
            if (parseInt(numberArray[i]) < 1000) {
                total += parseInt(numberArray[i]);
            }
        }

        if (negativeNumbers.length !== 0) {
            var returnStr = "Negative numbers not allowed:";
            for (var j = 0; j < negativeNumbers.length; j++) {
                returnStr += " " + negativeNumbers[j]
            }
            return returnStr
        }

        return total;
    } else
        return parseInt(number);
}

module.exports = add;


// function negativeNumbers = new Array();
// if (number < 0) {
//     negativeNumbers.add(num);
// }

// var error = "negative numbers not allowed"
// if (negativeNumbers.size() > 0) {
//     return error;

// }