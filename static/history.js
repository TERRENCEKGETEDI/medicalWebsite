function Live(){

    let docter=JSON.parse(localStorage.getItem('docterForYou'))||[];
    let date=JSON.parse(localStorage.getItem('dateForYou'))||[];
    let time=JSON.parse(localStorage.getItem('timeForYou'))||[];
    let hospital=JSON.parse(localStorage.getItem('hospitalForYou'))||[];
    let status=["upcoming","upcoming","upcoming","upcoming"];
    let allYou;
    let allallYou="";
    for(let i=docter.length-1;i>=0;i--){
        // console.log(JSON.parse(localStorage.getItem('nameLoad'))[i]);
        if(JSON.parse(localStorage.getItem('nameLoad'))[i]===localStorage.getItem('logName')){
            allYou='<tr>'+
                    '<td>'+docter[i]+'</td>'+
                    '<td>'+date[i]+'</td>'+
                    '<td>'+time[i]+'</td>'+
                    '<td>'+hospital[i]+'</td>'+
                    // '<td>'+status[i]+'</td>'+
                '</tr>';
            allallYou+=allYou;
        }
    }

    let tableYou = document.getElementsByTagName("table");
    tableYou[0].innerHTML= '<tr>'+
                            '<th>Docter</th>'+
                            '<th>Date</th>'+
                            '<th>time</th>'+
                            '<th>hospital</th>'+
                            // '<th>status</th>'+
                        '</tr>'+
                        allallYou;
}setInterval(Live,1000);

function Live2(){
    let docterForSome=JSON.parse(localStorage.getItem('docterForSome')) || [];
    let hospitalForSome=JSON.parse(localStorage.getItem('hospitalForSome')) || [];
    let timeForSome=JSON.parse(localStorage.getItem('timeForSome')) || [];
    let dateForSome=JSON.parse(localStorage.getItem('dateForSome')) || [];
    let firstnameForSome=JSON.parse(localStorage.getItem('firstnameForSome')) || [];
    let surnameForSome=JSON.parse(localStorage.getItem('surnameForSome')) || [];
    let phoneForSome=JSON.parse(localStorage.getItem('phoneForSome')) || [];
    let emailForSome=JSON.parse(localStorage.getItem('emailForSome')) || [];
    let detailsForSome=JSON.parse(localStorage.getItem('detailsForSome')) || [];
    let statusForSome=["upcoming","cancelled","complete","Complete"];

    let allSome;
    let allallSome="";

    for(let i=docterForSome.length-1;i>=0;i--){
        if(JSON.parse(localStorage.getItem('nameLoadSome'))[i]===localStorage.getItem('logName')){
        allSome='<tr>'+
                    '<td>'+docterForSome[i]+'</td>'+
                    '<td>'+dateForSome[i]+'</td>'+
                    '<td>'+timeForSome[i]+'</td>'+
                    '<td>'+hospitalForSome[i]+'</td>'+
                    // '<td>'+statusForSome[i]+'</td>'+
                    '<td>'+firstnameForSome[i]+'</td>'+
                    '<td>'+surnameForSome[i]+'</td>'+
                    '<td>'+phoneForSome[i]+'</td>'+
                    '<td>'+emailForSome[i]+'</td>'+
                    // '<td>'+detailsForSome[i]+'</td>'+
                '</tr>';
                allallSome+=allSome;
        }
    }

    let tableSome = document.getElementsByTagName("table");
    tableSome[1].innerHTML= '<tr>'+
                                '<th>Docter</th>'+
                                '<th>Date</th>'+
                                '<th>time</th>'+
                                '<th>hospital</th>'+
                                // '<th>status</th>'+
                                '<th>Name</th>'+
                                '<th>Surname</th>'+
                                '<th>Phone</th>'+
                                '<th>Email</th>'+
                            '</tr>'+
                            allallSome;
}
setInterval(Live2,1000);

function Live3(){
    let altnumber=JSON.parse(localStorage.getItem('altnumberE')) || [];
    let detailsE=JSON.parse(localStorage.getItem('detailsE')) || [];
    let locationsE=JSON.parse(localStorage.getItem('locationsE')) || [];
    let mapE=JSON.parse(localStorage.getItem('mapE')) || [];
    let allE;
    let allallE="";
    for(let i=altnumber.length-1;i>=0;i--){
        if(JSON.parse(localStorage.getItem('nameLoadE'))[i]===localStorage.getItem('logName')){
        allE='<tr>'+
                '<td>'+altnumber[i]+'</td>'+
                '<td>'+locationsE[i]+'</td>'+
                '<td>'+detailsE[i]+'</td>'+
            '</tr>';
        allallE+=allE;
        }
    }

    let tableE = document.getElementsByTagName("table");
    tableE[2].innerHTML= '<tr>'+
                            '<th>Phone number</th>'+
                            '<th>Location</th>'+
                            '<th>details</th>'+
                        '</tr>'+
                        allallE;
}
setInterval(Live3,1000);

function home(){
    window.location.href="index.html";
}
function deleteAll(){
    localStorage.removeItem('altnumberE');
    localStorage.removeItem('detailsE');
    localStorage.removeItem('locationsE');
    localStorage.removeItem('mapE');
    localStorage.removeItem('docterForSome');
    localStorage.removeItem('docterForSome');
    localStorage.removeItem('docterForSome');
    localStorage.removeItem('docterForSome');
    localStorage.removeItem('docterForSome');
    localStorage.removeItem('docterForSome');
    localStorage.removeItem('docterForSome');
    localStorage.removeItem('docterForSome');
    localStorage.removeItem('docterForSome');
    localStorage.removeItem('docterForYou');
    localStorage.removeItem('hospitalForYou');
    localStorage.removeItem('dateForYou');
    localStorage.removeItem('timeForYou');
    localStorage.removeItem('detailsForYou');
    alert("Deleted");
}
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

let e = document.getElementsByClassName('a');
let s = document.getElementsByClassName('b');
function langE(){
    for(let i=0;i<=e.length;i++){
        e[i].style.display="block";
        s[i].style.display="none";
    }
}
function langS(){
    for(let i=0;i<=s.length;i++){
        e[i].style.display="none";
        s[i].style.display="block";
    }
}