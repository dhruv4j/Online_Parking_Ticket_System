const existlocal = JSON.parse(localStorage.getItem("test1")) || [];
let locallength = existlocal.length-1;
document.getElementById('cdate').innerHTML= "Date: "+existlocal[locallength].date;
document.getElementById('camount').innerHTML= "Paid: "+existlocal[locallength].amount;
document.getElementById('cplate').innerHTML= "Plate no: "+existlocal[locallength].plate;
document.getElementById('ctype').innerHTML = "Vehicle Type: "+existlocal[locallength].type;
document.getElementById('cname').innerHTML = "Name: "+existlocal[locallength].customername;
document.getElementById('carrival').innerHTML = "Arrival: "+existlocal[locallength].arrival+":00";
document.getElementById('cdepart').innerHTML = "Depart: "+existlocal[locallength].depart+":00";
document.getElementById('cplace').innerHTML = "Place: "+existlocal[locallength].place;

function homepage(){
        window.location="index.html"
}

