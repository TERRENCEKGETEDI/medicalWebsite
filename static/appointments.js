let time = new Date();
let year = time.getFullYear();
let month = time.getMonth()+1;
if(month<10)
    month="0"+month;
let day =time.getDate();
    if(day<10)
        day='0'+day;
let todayDate = year+"-"+month+"-"+day;
// alert(todayDate);

let pincode = window.prompt("Enter Admin password to continue");
if(pincode!="12345"){
    alert("Invalid password");
    window.location.href="index.html";
}
function live(){
let div = document.getElementsByTagName("div");
div[0].style.backgroundColor="gold";


let docter=JSON.parse(localStorage.getItem('docterForYou'))||[];
let date=JSON.parse(localStorage.getItem('dateForYou'))||[];
let time=JSON.parse(localStorage.getItem('timeForYou'))||[];
let hospital=JSON.parse(localStorage.getItem('hospitalForYou'))||[];


let docterForSome=JSON.parse(localStorage.getItem('docterForSome')) || [];
let hospitalForSome=JSON.parse(localStorage.getItem('hospitalForSome')) || [];
let timeForSome=JSON.parse(localStorage.getItem('timeForSome')) || [];
let dateForSome=JSON.parse(localStorage.getItem('dateForSome')) || [];
let firstnameForSome=JSON.parse(localStorage.getItem('firstnameForSome')) || [];
let surnameForSome=JSON.parse(localStorage.getItem('surnameForSome')) || [];
let phoneForSome=JSON.parse(localStorage.getItem('phoneForSome')) || [];
let emailForSome=JSON.parse(localStorage.getItem('emailForSome')) || [];
let detailsForSome=JSON.parse(localStorage.getItem('detailsForSome')) || [];


let at00h00="",at04h00="",at08h00="",at12h00="",at16h00="",at20h00="";
for(let i=0;i<(Math.max(docter.length,docterForSome.length));i++){

    if(date[i]===todayDate){
        if(time[i]==='00:10'||time[i]==='01:00'||time[i]==='02:00'||time[i]==='03:00')
            at00h00+=docter[i]+" "+hospital[i]+time[i]+"<br>";
        if(time[i]==='04:00'||time[i]==='05:00'||time[i]==='06:00'||time[i]==='07:00')
            at04h00+=docter[i]+" "+hospital[i]+time[i]+"<br>";
        if(time[i]==='08:00'||time[i]==='09:00'||time[i]==='10:00'||time[i]==='11:00')
            at08h00+=docter[i]+" "+hospital[i]+time[i]+"<br>";
        if(time[i]==='12:00'||time[i]==='13:00'||time[i]==='14:00'||time[i]==='15:00')
            at12h00+=docter[i]+" "+hospital[i]+time[i]+"<br>";
        if(time[i]==='16:00'||time[i]==='17:00'||time[i]==='18:00'||time[i]==='19:00')
            at16h00+=docter[i]+" "+hospital[i]+time[i]+"<br>";
        if(time[i]==='20:00'||time[i]==='21:00'||time[i]==='22:00'||time[i]==='23:00')
            at20h00+=docter[i]+" "+hospital[i]+time[i]+"<br>";   
    }
    if(dateForSome[i]===todayDate){
        if(timeForSome[i]==='00:10'||timeForSome[i]==='01:00'||timeForSome[i]==='02:00'||timeForSome[i]==='03:00')
            at00h00+=firstnameForSome[i]+" "+surnameForSome[i]+" "+docterForSome[i]+" "+hospitalForSome[i]+timeForSome[i]+"<br>";
        if(timeForSome[i]==='04:00'||timeForSome[i]==='05:00'||timeForSome[i]==='06:00'||timeForSome[i]==='07:00')
            at04h00+=firstnameForSome[i]+" "+surnameForSome[i]+" "+docterForSome[i]+" "+hospitalForSome[i]+timeForSome[i]+"<br>";
        if(timeForSome[i]==='08:00'||timeForSome[i]==='09:00'||timeForSome[i]==='10:00'||timeForSome[i]==='11:00')
            at08h00+=firstnameForSome[i]+" "+surnameForSome[i]+" "+docterForSome[i]+" "+hospitalForSome[i]+timeForSome[i]+"<br>";
        if(timeForSome[i]==='12:00'||timeForSome[i]==='13:00'||timeForSome[i]==='14:00'||timeForSome[i]==='15:00')
            at12h00+=firstnameForSome[i]+" "+surnameForSome[i]+" "+docterForSome[i]+" "+hospitalForSome[i]+timeForSome[i]+"<br>";
        if(timeForSome[i]==='16:00'||timeForSome[i]==='17:00'||timeForSome[i]==='18:00'||timeForSome[i]==='19:00')
            at16h00+=firstnameForSome[i]+" "+surnameForSome[i]+" "+docterForSome[i]+" "+hospitalForSome[i]+timeForSome[i]+"<br>";
        if(timeForSome[i]==='20:00'||timeForSome[i]==='21:00'||timeForSome[i]==='22:00'||timeForSome[i]==='23:00')
            at20h00+=firstnameForSome[i]+" "+surnameForSome[i]+" "+docterForSome[i]+" "+hospitalForSome[i]+timeForSome[i]+"<br>";   
    }
}
div[1].innerHTML="<h1>Appointments booked at 00h00 to 04h00</h1>"+"<h2>"+at00h00+"</h2>";
div[2].innerHTML="<h1>Appointments booked at 04h00 to 08h00</h1>"+"<h2>"+at04h00+"</h2>";
div[3].innerHTML="<h1>Appointments booked at 08h00 to 12h00</h1>"+"<h2>"+at08h00+"</h2>";
div[4].innerHTML="<h1>Appointments booked at 12h00 to 16h00</h1>"+"<h2>"+at12h00+"</h2>";
div[5].innerHTML="<h1>Appointments booked at 16h00 to 20h00</h1>"+"<h2>"+at16h00+"</h2>";
div[6].innerHTML="<h1>Appointments booked at 20h00 to 00h00</h1>"+"<h2>"+at20h00+"</h2>";
}
setInterval(live,1000);

function home(){
    window.location.href="index.html";
}
function history(){
    window.location.href="history.html";
}
function admin(){
    window.location.href="appointments.html";
}
function booking(){
    window.location.href="booking.html";
}