const options = {weekday: 'long', year: 'numeric', month: 'long',day: 'numeric'};
time=()=>{
let a= new Date();
let date = a.toLocaleDateString(undefined,options);
let time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
document.getElementById('time').innerText=time + "\n on " + date;
}
setInterval(time,1000);