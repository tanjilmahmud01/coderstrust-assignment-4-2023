function calcAge(years) {
    return years * 365;
}

// let years = 20;

// if(years >=0){
//     console.log(`${years} years equals: `, calcAge(years), ' days');
//     document.write(`${years} years equals: `, calcAge(years), ' days');
// }
// else{
//     console.log('Years can not be negative, please enter a positive integer');
//     document.write('Years can not be negative, please enter a positive integer');

// }

document.getElementById('calcAge').onclick = function () {

    let years = parseInt(window.prompt('Enter years to convert to days'));

    if (years >= 0) {
        console.log(`${years} years equals: `, calcAge(years), ' days');
        // document.write(`${years} years equals: `, calcAge(years), ' days');
        document.getElementById('calcAge-output').innerText = `${years} years equals: ${calcAge(years)} days`;
    }
    else {
        console.log('Years can not be negative, please enter a positive integer');
        document.getElementById('calcAge-output').innerText = `Years can not be negative, please enter a positive integer`;
    }



}