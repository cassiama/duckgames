var startTime = new Date();
var endTime = new Date();
var startPressed = false;
var bgChangeStarted = false;
var maxWait = 20;
var timerID;
function startTest() {
    document.getElementById("changeme").style = "background-color: #00FF00;";
    bgChangeStarted = true;
    startTime = new Date();
}
function stopTest() {
    if (bgChangeStarted) {
        endTime = new Date();
        var responseTime = (endTime.getTime() - startTime.getTime()) / 1000;
        document.getElementById("changeme").style = "background-color: #FF0000;";
        alert("Your response time is: " + responseTime + " seconds " + "\n" + "get better");
        startPressed = false;
        bgChangeStarted = false;
    }
    else {
        if (!startPressed) {
            alert("press start first to start test");
        }
        else {
            clearTimeout(timerID);
            startPressed = false;
            alert("cheater! you pressed too early!");
        }
    }
}
var randMULTIPLIER = 0x015a4e35;
var randINCREMENT = 1;
var today = new Date();
var randSeed = today.getSeconds();
function randNumber() {
    randSeed = (randMULTIPLIER * randSeed + randINCREMENT) % (1 << 31);
    return ((randSeed >> 15) & 0x7fff) / 32767;
}
function start() {
    if (startPressed) {
        alert("Already started. Press stop to stop");
        return;
    }
    else {
        startPressed = true;
        timerID = setTimeout('startTest()', 20000 * randNumber());
    }
}

function screenClicked(){
    if(!startPressed){
        start();
    }else{
        stopTest();
    }
}