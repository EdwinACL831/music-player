let progressInterval;           // variable to handle the progressbar filling animation
let progressBar;                // variable that represents the progressbar HTML element
let currentProgress;            // variable that represents the current progress of the song that is playing
let audioFile;                  // variable that represents the audio HTML element
let audioTime                   // variable that represents the audio time in HH:MM:SS format

function initJSVariables() {
    progressBar = document.getElementById("pb");
    audioFile = document.getElementById("audioFile");
    audioTime = document.getElementById("total-time");
}

function printAudioDuration(time) {
    audioTime.innerHTML = time;
}

function printAudioCurrentTime(audioFile) {
    document.getElementById("audio-current-time").innerHTML = audioFile.currentTime
}

function mapToHours(time) {
    if(time < 3600) {
        return 0;
    } else {
        return parseInt(time / 3600);
    }
}

function mapToMinutes(time) {
    if(time < 60) {
        return 0;
    } else {
        return parseInt(time / 60);
    }
}

function mapToSeconds(time) {
    return parseInt(time % 60);
}

function mapFromAudioTimeToHHMMSSFormat(audioTime) {
    let hours = mapToHours(audioTime);
    let totalHours = hours * 3600;       // total hours in seconds

    let mins = mapToMinutes(audioTime - totalHours);
    let totalminutes = mins * 60;       // total mins in seconds

    let seconds = mapToSeconds(audioTime - totalHours - totalminutes);
    
    let hoursStr = hours > 9 ? `${hours}` : `0${hours}` ;
    let minsStr = mins > 9 ? `${mins}` : `0${mins}`;
    let secondsStr = seconds > 9 ? `${seconds}`: `0${seconds}`;

    if(hours === 0) {
        return `${minsStr}:${secondsStr}`;
    }
    return `${hoursStr}:${minsStr}:${secondsStr}`;
    
}

function start() {
    audioFile.play();
    // This code block is to filling the progress bar in the GUI.
    // this is executed each 1000ms until a clearInterval(progressInterval) call happens
    progressInterval = setInterval(() => {
        if(audioFile.currentTime <= audioFile.duration) {
            currentProgress = 100 * (audioFile.currentTime / audioFile.duration);
            progressBar.style.width = currentProgress + '%';
        }
    }, 1000);
    printAudioDuration(mapFromAudioTimeToHHMMSSFormat(audioFile.duration));
}

function reset() {
    // reset the progressbar un the GUI to 0, so start from beginning
    currentProgress = 0;          
    progressBar.style.width = currentProgress + '%';
    // restarts the song from the beginning
    audioFile.currentTime = 0;
}

function stop() {
    // Stop moving the progressbar un the GUI
    clearInterval(progressInterval);
    audioFile.pause();
}