function incrementNumber(number) {
    return number + 1;
}

document.getElementById('incrementNumber').onclick = function () {

    let number = parseInt(window.prompt('Enter A Number'));
    console.log(`The next number of ${number} is: `, incrementNumber(number));
    // document.write(`The next number of ${number} is: `,incrementNumber(number));

    document.getElementById('incrementNumber-output').innerText = `The next number of ${number} is: ${incrementNumber(number)}`;

}


