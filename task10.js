function giveMeSomething(someString) {
    return "something " + someString;
}

document.getElementById('giveMeSomething').onclick = function () {
    let someString = window.prompt("Enter a string");

    console.log(giveMeSomething(someString));
    document.getElementById('giveMeSomething-output').innerText = `${giveMeSomething(someString)}`;

}

// let someString = 'is better than nothing';

// console.log(giveMeSomething(someString));
// document.write(giveMeSomething(someString));