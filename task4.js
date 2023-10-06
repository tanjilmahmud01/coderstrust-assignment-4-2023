function triArea(base, height) {
    return (0.5 * base * height);
}



document.getElementById('triArea').onclick = function () {

    let base = parseInt(window.prompt('Enter the Base of the triangle'));
    let height = parseInt(window.prompt('Enter the height of the triangle'));

    console.log(`Area of the Triangle with base ${base} and height ${height} is: `, triArea(base, height));
    // document.write(`The next number of ${number} is: `,incrementNumber(number));

    document.getElementById('triArea-output').innerText = `Area of the Triangle with base ${base} and height ${height} is:  ${triArea(base, height)}`;

}

