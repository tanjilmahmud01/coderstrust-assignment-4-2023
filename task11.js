function squared(num) {
    return Math.pow(num, 2);
}

document.getElementById('squared').onclick = function () {
    let sqrNum = parseInt(window.prompt("Enter a Number"));

    console.log(`Squared of ${sqrNum} is:`, squared(sqrNum));

    document.getElementById('squared-output').innerText = `Squared of ${sqrNum} is: ${squared(sqrNum)}`;

}
// let num = 100;

// console.log(`Squared of ${num} is:`, squared(num));
// document.write(`Squared of ${num} is:`, squared(num));