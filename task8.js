function nextEdge(side1, side2) {
    return (side1 + side2) - 1;
}

// let side1 = 9;
// let side2 = 2;

document.getElementById('nextEdge').onclick = function () {

    let side1 = parseInt(window.prompt("Please enter side 1"));
    let side2 = parseInt(window.prompt("Please enter side 2"));

    if (side1 > 0 && side2 > 0) {
        console.log(`Maximum Range of the third edge with one side of ${side1} and another side of ${side2} is `, nextEdge(side1, side2));
        document.getElementById('nextEdge-output').innerText = `Maximum Range of the third edge with one side of ${side1} and another side of ${side2} is ${nextEdge(side1, side2)}`;
    }
    else {
        console.log("Side length can not be zero or negative, Please enter a positive integer");
        // console.log(`Maximum Range of the third edge with one side of ${side1} and another side of ${side2} is `, nextEdge(side1, side2));
        document.getElementById('nextEdge-output').innerText = `Side length can not be zero or negative, Please enter a positive integer`;
        // document.write("Side length can not be zero or negative, Please enter a positive integer");
    }

}

