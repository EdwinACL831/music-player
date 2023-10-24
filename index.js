let progressInterval;           // variable to handle the progressbar filling animation
let progressBar;                // variable that represents the progressbar HTML element
let currentProgress;            // variable that represents the current progress of the song that is playing
let audioFile;                  // variable that represents the audio HTML element

function initJSVariables() {
    progressBar = document.getElementById("pb");
    audioFile = document.getElementById("audioFile");
}

function printAudioDuration(audioFile) {
    let audioDuration = audioFile.duration;
    document.getElementById("audio-duration").innerHTML = audioDuration;
}

function printAudioCurrentTime(audioFile) {
    document.getElementById("audio-current-time").innerHTML = audioFile.currentTime
}

function progress() {
    audioFile.play();
    // This code block is to filling the progress bar in the GUI.
    // this is executed each 1000ms until a clearInterval(progressInterval) call happens
    progressInterval = setInterval(() => {
        if(audioFile.currentTime <= audioFile.duration) {
            currentProgress = 100 * (audioFile.currentTime / audioFile.duration);
            progressBar.style.width = currentProgress + '%';
        }
    }, 1000);
}

function reset() {
    // reset the progressbar un the GUI to 0, so start from beginning
    currentProgress = 0;          
    progressBar.style.width = currentProgress + '%';
    // restarts the song from the beginning
    audioFile.currentTime = 0;
    // Stop moving the progressbar un the GUI
    clearInterval(progressInterval);    
}

function stop() {
    // Stop moving the progressbar un the GUI
    clearInterval(progressInterval);
    audioFile.pause();
}