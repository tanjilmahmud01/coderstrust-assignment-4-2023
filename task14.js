function nameString(str) {
    return str + "Coder";
}

document.getElementById('nameString').onclick = function () {
    let str = window.prompt("Enter A String");

    console.log(nameString(str));
    document.getElementById('nameString-output').innerText = `${nameString(str)}`;
}

// let str = "Rahim"

// document.write(nameString(str));