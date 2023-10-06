function circuitPower(voltage, current) {
    return voltage * current;
}


document.getElementById('circuitPower').onclick = function () {
    let voltage = parseInt(window.prompt("Enter Voltage"));
    let current = parseInt(window.prompt("Enter current"));

    console.log(`The calculated Power for voltage ${voltage} and current ${current} is: `, circuitPower(voltage, current));

    document.getElementById('circuitPower-output').innerText = `The calculated Power for voltage ${voltage} and current ${current} is: ${circuitPower(voltage, current)}`;
}


