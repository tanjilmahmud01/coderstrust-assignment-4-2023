function remainder (num1, num2) {
    return (num1 % num2);
}

// let number1 = 5;
// let number2 = 5;

document.getElementById('remainder').onclick = function() {
    let number1 = parseInt(window.prompt("Please Enter a positive or negative Integer"));
    let number2 = parseInt(window.prompt("Please Enter another positive or negative Integer"));

    console.log(`Remainder of ${number1} and ${number2} is`,remainder(number1, number2));

    document.getElementById('remainder-output').innerText = `Remainder of ${number1} and ${number2} is ${remainder(number1, number2)}`

}

// if(Number.isInteger(number1) && Number.isInteger(number2)){
//     console.log(`Remainder of ${number1} and ${number2} is`,remainder(number1, number2));
//     document.write(`Remainder of ${number1} and ${number2} is`,remainder(number1, number2));
    
// }
// else{
//     console.log("Please enter an integer (Positive or Negative)");
    
// }

