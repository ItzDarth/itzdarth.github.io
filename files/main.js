var tday=new Array("Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота");
var tmonth=new Array("Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь");

function GetClock(){
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate();
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds();
if(nmin<=9) nmin="0"+nmin
if(nsec<=9) nsec="0"+nsec;

document.getElementById('date').innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+"";
document.getElementById('time').innerHTML=" "+nhour+":"+nmin+":"+nsec+"";
}


window.onload=function(){
GetClock();
setInterval(GetClock,1000);
}


var modal = document.getElementById("serversModal");
var btn = document.getElementById("openServers");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
