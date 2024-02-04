function add(n1, n2, showResult, phrase) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    // 	throw new Error('Incorrect input!');
    // }
    var result = n1 + n2;
    if (showResult) {
        /*
        Below statement considers all the operands as strings,
        and gives wrong ouput for numerical calculation,
        so we have to do numeric calculations above the below statement
        */
        // console.log(phrase + n1 + n2);
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
