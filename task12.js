function lessThanOrEqualToZero(aNumber) {

    return aNumber <= 0 ? true : false;
}

document.getElementById('lessThanOrEqualToZero').onclick = function () {

    let aNumber = parseInt(window.prompt("Please Enter a Number"));

    console.log(`is ${aNumber} less than or equal zero? `, lessThanOrEqualToZero(aNumber));

    document.getElementById('lessThanOrEqualToZero-output').innerText = `Is ${aNumber} less than or equal zero? ${lessThanOrEqualToZero(aNumber)}`;
}

// let aNumber = 12;


// document.write(`is ${aNumber} less than or equal zero? `, lessThanOrEqualToZero(aNumber));
