let progressInterval;
let progressBar;
let currentProgress;
let audioFile;

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
    audioFile.play()
    let step = 100 / parseInt(audioFile.duration);
    progressInterval = setInterval(() => {
        if(audioFile.currentTime <= audioFile.duration) {
            currentProgress = 100 * (audioFile.currentTime / audioFile.duration);
            progressBar.style.width = currentProgress + '%';
        }
    }, 1000);
}

function reset() {
    currentProgress = 0;
    let zeroP = currentProgress + '%';
    progressBar.style.width = zeroP;
    clearInterval(progressInterval);
}

function stop() {
    clearInterval(progressInterval);
    audioFile.pause();
}