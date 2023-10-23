let progressInterval;
let progressElement;
let progressBar;
let currentProgress;
let audioFile;

function initJSVariables() {
    progressElement = document.getElementById("progress");
    progressBar = document.getElementById("pb");
    audioFile = document.getElementById("audioFile");
    printAudioDuration(audioFile);
    currentProgress = parseInt(progressElement.innerHTML);

}

function printAudioDuration(audioFile) {
    let audioDuration = audioFile.duration;
    document.getElementById("audio-duration").innerHTML = audioDuration;
}

function progress() {
    audioFile.play()
    let steps = 100;
    let interval = audioFile.duration / steps;
    progressInterval = setInterval(() => {
        if(currentProgress < 100) {
            currentProgress += interval;
            progressElement.innerHTML = currentProgress + '%';
            progressBar.style.width = currentProgress + '%';
        }
    }, 1000);
}

function reset() {
    currentProgress = 0;
    let zeroP = currentProgress + '%';
    progressElement.innerHTML = zeroP;
    progressBar.style.width = zeroP;
    clearInterval(progressInterval);
}

function stop() {
    clearInterval(progressInterval);
    audioFile.pause();
}