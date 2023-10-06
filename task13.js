function sumPolygon(sides) {
    return (sides - 2) * 180;
}

document.getElementById('sumPolygon').onclick = function () {
    let sides = parseInt(window.prompt("Please Enter the sides of the polygon"));

    if (sides > 2) {
        console.log(`Sum of the internal angles of a ${sides} sided Polygon is: `, sumPolygon(sides));
        document.getElementById('sumPolygon-output').innerText = `Sum of the internal angles of a ${sides} sided Polygon is: ${sumPolygon(sides)}`;
    }
    else {
        console.log("Minimum sides of a polygon is 3, Please enter the number of sides again");
        document.getElementById('sumPolygon-output').innerText = `Minimum sides of a polygon is 3, Please enter the number of sides again`;

    }
}

// let sides = 6;

// if(sides>2){
//     console.log(`Sum of the internal angles of a ${sides} sided Polygon is: `, sumPolygon(sides));
//     document.write(`Sum of the internal angles of a ${sides} sided Polygon is: `, sumPolygon(sides));
// }
// else{
//     console.log("Minimum sides of a polygon is 3, Please enter the number of sides again");
//     document.write("Minimum sides of a polygon is 3, Please enter the number of sides again");
// }