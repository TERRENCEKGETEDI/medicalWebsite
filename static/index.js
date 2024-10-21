function booking(){
    window.location.href="booking.html";
}
function history(){
    window.location.href="history.html";
}
fetch('/user-info')
  .then(response => response.json())
  .then(data => {
    if (!data.error) {
      console.log('First Name:', data.firstname);
      console.log('Surname:', data.surname);
      // You can now use this data in your frontend
      localStorage.setItem("logName",data.firstname);
      localStorage.setItem("logSurname",data.surname);
    } else {
      console.log(data.error);
    }
  })
  .catch(error => console.error('Error fetching user info:', error));
function live(){
  document.getElementById('name').innerHTML=localStorage.getItem('logName');
  document.getElementById('name2').innerHTML=localStorage.getItem('logName');
}setInterval(live,1);

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

// let language = document.querySelector('input[name="lang"]');
let e = document.getElementsByClassName('a');
let s = document.getElementsByClassName('b');
let m = document.getElementById('m');
let m2 = document.getElementById('m2');
function langE(){
    // document.getElementsByClassName('selectADocter')[0].innerHTML="Select a Docter";
    // document.getElementsByClassName('selectAHospital')[0].innerHTML="Select a Hospital";
    // document.getElementsByClassName('selectATime')[0].innerHTML="Select a Time";
    for(let i=0;i<=e.length;i++){
        e[i].style.display="block";
        s[i].style.display="none";
        m.style.display='none';
        m2.style.display='block';
    }
}
function langS(){
    // document.getElementsByClassName('selectADocter')[0].innerHTML="Kgetha ngaka";
    // document.getElementsByClassName('selectAHospital')[0].innerHTML="Kgetha sepetlele";
    // document.getElementsByClassName('selectATime')[0].innerHTML="Kgetha Nako";
    for(let i=0;i<=s.length;i++){
        e[i].style.display="none";
        s[i].style.display="block";
        m2.style.display='none';
        m.style.display='block';
    }
}