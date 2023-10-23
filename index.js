let progressInterval;
let progressElement;
let progressBar;
let currentProgress;
let audioFile;

function initJSVariables() {
    progressElement = document.getElementById("progress");
    progressBar = document.getElementById("pb");
    audioFile = document.getElementById("audioFile");
    currentProgress = parseInt(progressElement.innerHTML);
}

function progress() {
    audioFile.play()
    progressInterval = setInterval(() => {
        if(currentProgress < 100) {
            currentProgress += 20;
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