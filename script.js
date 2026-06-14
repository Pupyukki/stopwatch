let timer;
let isrunning=false;
let time=0;
const myclockDisplay = document.getElementById("myClockDisplay");
const startstopbutton = document.getElementById("startStopButton");
const resetbutton = document.getElementById("resetButton");
startstopbutton.addEventListener('click',()=>{
    if(isrunning){
        clearInterval(timer);
        startstopbutton.textContent="Start";
    }
    else{
        timer=setInterval(updateTime, 10);
        startstopbutton.textContent="Stop";
    }
    isrunning=!isrunning;
});
resetbutton.addEventListener('click',()=>{
clearInterval(timer);
time=0;
isrunning=false;
myclockDisplay.textContent=formatTime(time);
startstopbutton.textContent="Start";
});
function  updateTime(){
    time+=10;
    myclockDisplay.textContent=formatTime(time);
}
function formatTime(ms){
    const minutes=Math.floor(ms/60000);
    const seconds=Math.floor((ms%60000)/1000);
    const milliseconds=ms%1000;
    return `${padZero(minutes)}:${padZero(seconds)}.${padZero(milliseconds,3)}`;
}
function padZero(num,length=2){
    return num.toString().padStart(length,'0');
}