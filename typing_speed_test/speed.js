const timer = document.querySelector(".timer");
const textBox = document.querySelector("#test-area");
const originalText = document.querySelector("#origin-text-value").textContent;
const textDiv = document.querySelector(".test-wrapper");
const resetBtn = document.querySelector("#reset");

var intervalId;
var gameStart = false;
var time = [0,0,0,0];
var outTime0 = "00";
var outTime1 = "00";

function changeTimer()
{
    time[3]++;
    if(time[3] / 10 == 1)
    {
        time[2]++;
        time[3] = 0;
    }
    if(time[2] / 10 == 1)
    {
        time[2] = 0;
        time[1]++;
        if(time[1] < 10)
            outTime1 = "0"+time[1];
        else
            outTime1 = time[1];
    }
    if(time[1] / 60 == 1)
    {
        time[1] = 0;
        outTime1 = "0"+time[1];
        time[0]++;
        if(time[0] < 10)
            outTime0 = "0"+time[0];
        else
            outTime0 = time[0];
    }

    timer.innerHTML = outTime0 + ":" + outTime1 + ":" + time[2] + time[3];
}

function spellCheck()
{
    if(textBox.value == originalText.substring(0,textBox.value.length) && textBox.value.length == originalText.length)
    {
        textDiv.style.borderColor = "green";
        clearInterval(intervalId);  
    }
    else if(textBox.value == originalText.substring(0,textBox.value.length))
        textDiv.style.borderColor = "yellow";
    else
        textDiv.style.borderColor = "red";
}

function startGame()
{
    if(!gameStart)
    {
        gameStart = true;
        intervalId = setInterval(changeTimer,10);
    }
}

function resetGame()
{
    if(gameStart)
    {
        clearInterval(intervalId);
        gameStart = false;
    }
    time = [0,0,0,0]
    intervalId = null;
    outTime0 = "00";
    outTime1 = "00";
    textBox.value = "";
    textDiv.style.borderColor = "grey";
    timer.innerHTML = "00:00:00";
}

textBox.addEventListener("keypress",startGame);
textBox.addEventListener("keyup",spellCheck);
resetBtn.addEventListener("click",resetGame)