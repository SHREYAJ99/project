const HOURTIME=document.querySelector("#hr-hand");
const MINUTETIME=document.querySelector("#min-hand");
const SECONDTIME=document.querySelector("#sec-hand");


function clockIntervalTick()
{
var date=new Date();
console.log(date);

var hr=date.getHours();
var min=date.getMinutes();
var sec=date.getSeconds();


console.log("hours:"+ hr+"Minutes:"+min+"Seconds"+sec);

let hrPosition=(hr*360/12)+(min*(360/60)/12);
let minPosition=(min*360/60)+(sec*(360/60)/60);
let secPosition=sec*360/60;


HOURTIME.style.transform="rotate("+ hrPosition +"deg)";
MINUTETIME.style.transform="rotate("+ minPosition +"deg)";
SECONDTIME.style.transform="rotate("+ secPosition +"deg)";

}

var clockInterval=setInterval(clockIntervalTick,1000);
