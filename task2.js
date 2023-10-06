function convertMinuteToSeconds(minute) {

    return minute * 60;
}

document.getElementById('minute').onclick = function () {
    let minute = window.prompt("Give minute");
    console.log(`${minute} minute equals: `, convertMinuteToSeconds(minute), "seconds");

    // document.write(`${minute} minute equals: `,convertMinuteToSeconds(minute), "seconds");
    document.getElementById('minute-output').innerText = `${minute} minute equals: ${convertMinuteToSeconds(minute)} seconds`;
}




