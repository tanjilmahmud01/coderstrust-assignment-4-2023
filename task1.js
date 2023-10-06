function addition(num1, num2) {
    return num1 + num2;
}


document.getElementById('addition').onclick = function () {

    let num1 = parseInt(window.prompt("Enter Number"));
    let num2 = parseInt(window.prompt("Enter Another Number"));

    console.log(`Addition of ${num1} and ${num2} is `, addition(num1, num2));
    // document.write(`Addition of ${num1} and ${num2} is `, addition(num1, num2));

    document.getElementById('addition-output').innerText = `Addition of ${num1} and ${num2} is ${addition(num1, num2)}`;
}






