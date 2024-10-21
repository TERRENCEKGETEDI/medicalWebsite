document.getElementsByClassName('name21').innerHTML="Hello "+localStorage.getItem('logName');
document.getElementsByClassName('name22').innerHTML="Dumela "+localStorage.getItem('logName');
function youfield(){
    let you = document.getElementById("text");
    you.style.display="block";
    let someone = document.getElementById("some");
    someone.style.display="none";
    let emergency = document.getElementById("emergency");
    emergency.style.display="none";
}
function someonefield(){
    let you = document.getElementById("text");
    you.style.display="none";
    let someone = document.getElementById("some");
    someone.style.display="block";
    let emergency = document.getElementById("emergency");
    emergency.style.display="none";
}
function emergencyfield(){
    let you = document.getElementById("text");
    you.style.display="none";
    let someone = document.getElementById("some");
    someone.style.display="none";
    let emergency = document.getElementById("emergency");
    emergency.style.display="block";
}
console.log(localStorage.getItem('docterForYou'))
let docterForYou = [];
let hospitalForYou = [];
let dateForYou = [];
let timeForYou = [];
let detailsForYou = [];
// let nameLoad = [];
function you(){
    let docterForYou=JSON.parse(localStorage.getItem('docterForYou')) || [];
    let hospitalForYou=JSON.parse(localStorage.getItem('hospitalForYou')) || [];
    let dateForYou=JSON.parse(localStorage.getItem('dateForYou')) || [];
    let timeForYou=JSON.parse(localStorage.getItem('timeForYou')) || [];
    let detailsForYou=JSON.parse(localStorage.getItem('detailsForYou')) || [];
    let nameLoad=JSON.parse(localStorage.getItem('nameLoad')) || [];
    let status=["upcoming","upcoming","upcoming","upcoming"];

    let docterYou = document.getElementById("docterYou").value;
    let hospitalYou = document.getElementById("hospitalYou").value;
    let dateYou = document.getElementById("dateYou").value;
    let timeYou = document.getElementById("timeYou").value;
    let detailsYou = document.getElementById("detailsYou").value;

    docterForYou.push(docterYou);
    hospitalForYou.push(hospitalYou);
    dateForYou.push(dateYou);
    timeForYou.push(timeYou);
    detailsForYou.push(detailsYou);
    nameLoad.push(localStorage.getItem('logName'));
    // console.log(nameLoad[0]);
    localStorage.setItem('docterForYou',JSON.stringify(docterForYou));
    localStorage.setItem('hospitalForYou',JSON.stringify(hospitalForYou));
    localStorage.setItem('dateForYou',JSON.stringify(dateForYou));
    localStorage.setItem('timeForYou',JSON.stringify(timeForYou));
    localStorage.setItem('detailsForYou',JSON.stringify(detailsForYou));
    localStorage.setItem('nameLoad',JSON.stringify(nameLoad));
    
    window.location.href='history.html';
}

function someone(){
    let docterForSome=JSON.parse(localStorage.getItem('docterForSome')) || [];
    let hospitalForSome=JSON.parse(localStorage.getItem('hospitalForSome')) || [];
    let timeForSome=JSON.parse(localStorage.getItem('timeForSome')) || [];
    let dateForSome=JSON.parse(localStorage.getItem('dateForSome')) || [];
    let firstnameForSome=JSON.parse(localStorage.getItem('firstnameForSome')) || [];
    let surnameForSome=JSON.parse(localStorage.getItem('surnameForSome')) || [];
    let phoneForSome=JSON.parse(localStorage.getItem('phoneForSome')) || [];
    let emailForSome=JSON.parse(localStorage.getItem('emailForSome')) || [];
    let detailsForSome=JSON.parse(localStorage.getItem('detailsForSome')) || [];
    let nameLoadSome=JSON.parse(localStorage.getItem('nameLoadSome')) || [];

    let docterSome = document.getElementById("docterSome").value;
    let hospitalSome = document.getElementById("hospitalSome").value;
    let timeSome = document.getElementById("timeSome").value;
    let dateSome = document.getElementById("dateSome").value;
    let firstnameSome = document.getElementById("firstnameSome").value;
    let surnameSome = document.getElementById("surnameSome").value;
    let phoneSome = document.getElementById("phoneSome").value;
    let emailSome = document.getElementById("emailSome").value;
    let detailsSome = document.getElementById("detailsSome").value;

    docterForSome.push(docterSome);
    hospitalForSome.push(hospitalSome);
    timeForSome.push(timeSome);
    dateForSome.push(dateSome);
    firstnameForSome.push(firstnameSome);
    surnameForSome.push(surnameSome);
    phoneForSome.push(phoneSome);
    emailForSome.push(emailSome);
    detailsForSome.push(detailsSome);
    nameLoadSome.push(localStorage.getItem('logName'));
    
    localStorage.setItem('docterForSome',JSON.stringify(docterForSome));
    localStorage.setItem('hospitalForSome',JSON.stringify(hospitalForSome));
    localStorage.setItem('timeForSome',JSON.stringify(timeForSome));
    localStorage.setItem('dateForSome',JSON.stringify(dateForSome));
    localStorage.setItem('firstnameForSome',JSON.stringify(firstnameForSome));
    localStorage.setItem('surnameForSome',JSON.stringify(surnameForSome));
    localStorage.setItem('phoneForSome',JSON.stringify(phoneForSome));
    localStorage.setItem('emailForSome',JSON.stringify(emailForSome));
    localStorage.setItem('detailsForSome',JSON.stringify(detailsForSome));
    localStorage.setItem('nameLoadSome',JSON.stringify(nameLoadSome));
    window.location.href='history.html';
}

let altnumberE = [];
let detailsE = [];
let locationsE = [];
let mapE = [];
function emergency(){
    let altnumberE=JSON.parse(localStorage.getItem('altnumberE')) || [];
    let detailsE=JSON.parse(localStorage.getItem('detailsE')) || [];
    let locationsE=JSON.parse(localStorage.getItem('locationsE')) || [];
    let mapE=JSON.parse(localStorage.getItem('mapE')) || [];
    let nameLoadE=JSON.parse(localStorage.getItem('nameLoadE')) || [];
    
    let altnumber = document.getElementById("altnumber").value;
    let detailsEm = document.getElementById("detailsEm").value;
    let location = document.getElementsByTagName("h3")[0].innerText;
    let map = document.getElementById("map").value;

    altnumberE.push(altnumber);
    detailsE.push(detailsEm);
    locationsE.push(location);
    mapE.push(map);
    nameLoadE.push(localStorage.getItem('logName'));

    localStorage.setItem('altnumberE',JSON.stringify(altnumberE));
    localStorage.setItem('detailsE',JSON.stringify(detailsE));
    localStorage.setItem('locationsE',JSON.stringify(locationsE));
    localStorage.setItem('mapE',JSON.stringify(mapE));
    localStorage.setItem('nameLoadE',JSON.stringify(nameLoadE));

    let mapView = document.getElementById("map");
    mapView.style.width="90%";
    mapView.style.height="400px";
    mapView.style.margin="auto";
    window.location.href='history.html';
}
{/* <div class="navigation">
<button ondblclick="deleteAll()">DELETE</button>
<button onclick="home()">HOME</button>
<button onclick="history()">HISTORY</button>
<button onclick="admin()">ADMIN</button>
</div> */}
function home(){
    window.location.href="index.html";
}
function history(){
    window.location.href="history.html";
}
function admin(){
    window.location.href="appointments.html";
}
function book(){
    window.location.href="booking.html";
}
let language = document.querySelector('input[name="lang"]');
let e = document.getElementsByClassName('a');
let s = document.getElementsByClassName('b');
function langE(){
    document.getElementsByClassName('selectADocter')[0].innerHTML="Select a Docter";
    document.getElementsByClassName('selectAHospital')[0].innerHTML="Select a Hospital";
    document.getElementsByClassName('selectATime')[0].innerHTML="Select a Time";
    for(let i=0;i<=e.length;i++){
        e[i].style.display="block";
        s[i].style.display="none";
    }
}
function langS(){
    document.getElementsByClassName('selectADocter')[0].innerHTML="Kgetha ngaka";
    document.getElementsByClassName('selectAHospital')[0].innerHTML="Kgetha sepetlele";
    document.getElementsByClassName('selectATime')[0].innerHTML="Kgetha Nako";
    for(let i=0;i<=s.length;i++){
        e[i].style.display="none";
        s[i].style.display="block";
    }
}