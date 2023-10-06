function lessThan100(num1, num2) {
    return num1 + num2 < 100 ? true : false;
}

document.getElementById('lessThan100').onclick = function () {
    let aNum1 = parseInt(window.prompt("Enter a Number"));
    let aNum2 = parseInt(window.prompt("Enter another Number"));

    console.log(`${aNum1} + ${aNum2} is less than 100: `, lessThan100(aNum1, aNum2));
    document.getElementById('lessThan100-output').innerText = `Is ${aNum1} + ${aNum2} is less than 100: ${lessThan100(aNum1, aNum2)}`;
}

// let aNum1 = 83;
// let aNum2 = 34;

// console.log(`${aNum1} + ${aNum2} is less than 100: `, lessThan100(aNum1, aNum2));
// document.write(`${num1} + ${aNum2} is less than 100: `, lessThan100(num1, aNum2));