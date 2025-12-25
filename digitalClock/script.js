function updateClock(){
    const time = new Date();
    let Hours = time.getHours();
    const meridiem = Hours >= 12 ? "PM" : "AM";
    Hours = Hours % 12 || 12;
    Hours = Hours.toString().padStart(2,0);
    const Minute = time.getMinutes().toString().padStart(2, 0);
    const Second = time.getSeconds().toString().padStart(2, 0);
    const timeString = `${Hours}:${Minute}:${Second} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}
updateClock();
setInterval(updateClock,1000);
