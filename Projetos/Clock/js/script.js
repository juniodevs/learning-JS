const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

const getTime = () => {
    const date = new Date();

    return  {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
}

const audioClock = () => {
    const audioFiles = [
    './audio/clock1.MP3',
    './audio/clock2.MP3',
    './audio/clock3.MP3'];
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const chosenAudio = new Audio(audioFiles[randomIndex]);
    chosenAudio.play();
}


setInterval(() => {
    const { hour, minute, second } = getTime();

    hourHand.style.transform = `translate(0, -50%) rotate(${hour*30}deg)`;
    minuteHand.style.transform = `translate(0, -50%) rotate(${minute*6}deg)`;
    secondHand.style.transform = `translate(0, -50%) rotate(${second*6}deg)`;

    audioClock();
}, 1000);
