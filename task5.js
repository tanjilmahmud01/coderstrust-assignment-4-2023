function getFirstValue(arr) {
    return arr[0];
}



document.getElementById('getFirstValue').onclick = function () {
    let result = parseInt(window.prompt("Push a number in the array. Cancel to output the result"));

    let array = [];

    while (result) {
        array.push(result);
        result = parseInt(window.prompt("Push a number in the array. Cancel to output the result"));
    }



    console.log(`The first element of the given array [${array}] is: `, getFirstValue(array));

    document.getElementById('getFirstValue-output').innerText = `The first element of the given array [${array}] is ${getFirstValue(array)}`;
}

// let array = [-500, 0, 9];

// console.log(`The first element of the given array [${array}] is: `, getFirstValue(array));
// document.write(`The first element of the given array [${array}] is: `, getFirstValue(array));