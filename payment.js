let date = new Date();
let currentdate = date.getDate();
let year = date.getFullYear();
let initialmonth = date.getMonth();
let month = initialmonth + 1;
let completedate = currentdate + "/" + month + "/" + year;
const existlocal = JSON.parse(localStorage.getItem("test1")) || [];
let length = existlocal.length-1;
let cost= existlocal[length].amount;
document.getElementById('ruppees').innerHTML=cost;

function checking(){
    var selected = document.getElementById('filebtn').files[0];
    var reader = new FileReader();
    reader.addEventListener("loadend",function(){
        document.getElementById('urlpreview').innerHTML = reader.result;
    });
    reader.readAsDataURL(selected);
}

function paymentconfirm(){
    event.preventDefault();
    let date = new Date();
    let currentdate = date.getDate();
    let year = date.getFullYear();
    let initialmonth = date.getMonth();
    let month = initialmonth + 1;
    let completedate = currentdate + "/" + month + "/" + year;
    const existlocal = JSON.parse(localStorage.getItem("test1")) || [];
    let length = existlocal.length-1;
    if(existlocal[length].date===completedate){
        setTimeout(() => {
            document.getElementById('confirmingdiv').innerHTML=`<input type="submit" id="proceedbtn2" value="Checking...">`;
        }, 500);
        setTimeout(() => {
            document.getElementById('confirmingdiv').innerHTML=`<input type="submit" id="proceedbtn2" value="Verifying...">`;
        }, 1500);
       
        let paymenturl = document.getElementById('urlpreview').innerHTML;
        const existlocal2 = JSON.parse(localStorage.getItem("test2")) || [];
            if (existlocal2.length) {
                localStorage.setItem("test2", JSON.stringify([...existlocal2, {
                    url:paymenturl
                }]))
            }
            else {
                localStorage.setItem("test2", JSON.stringify([{
                    url:paymenturl
                }]))
            }
            const existlocal = JSON.parse(localStorage.getItem("test1")) || [];
            let clength = existlocal.length-1;
            let camount = existlocal[length].amount;
            let carrival = existlocal[length].arrival;
            let cname = existlocal[length].customername;
            let cdate = existlocal[length].date;
            let cdepart = existlocal[length].depart;
            let cplace = existlocal[length].place;
            let cplate = existlocal[length].plate;
            let ccontact = existlocal[length].contact;
            let ctype = existlocal[length].type;
            let curl = paymenturl;
            
            const existlocalbooks = JSON.parse(localStorage.getItem("test3")) || [];
            if (existlocalbooks.length) {
                localStorage.setItem("test3", JSON.stringify([...existlocalbooks, {
                    amount: camount, arrival: carrival, name: cname, date: cdate, depart: cdepart,
                    place: cplace, plate: cplate, type: ctype, url: curl, contact: ccontact 
                }]))
            }
            else {
                localStorage.setItem("test3", JSON.stringify([{
                    amount: camount, arrival: carrival, name: cname, date: cdate, depart: cdepart,
                    place: cplace, plate: cplate, type: ctype, url: curl, contact: ccontact
                }]))
            }
            setTimeout(() => {
                window.location = "ticket.html";
            }, 3000);
    }
    else{
        setTimeout(() => {
            document.getElementById('confirmingdiv').innerHTML=`<input type="submit" id="proceedbtn2" value="Checking...">`;
        }, 500);
        setTimeout(() => {
            document.getElementById('confirmingdiv').innerHTML=`<input type="submit" id="proceedbtn2" value="Verifying...">`;
        }, 1500);
       
        let paymenturl = document.getElementById('urlpreview').innerHTML;
        const existprelocal2 = JSON.parse(localStorage.getItem("prebook2")) || [];
            if (existprelocal2.length) {
                localStorage.setItem("prebook2", JSON.stringify([...existprelocal2, {
                    url:paymenturl
                }]))
            }
            else {
                localStorage.setItem("prebook2", JSON.stringify([{
                    url:paymenturl
                }]))
            }
            const existlocal = JSON.parse(localStorage.getItem("test1")) || [];
            let clength = existlocal.length-1;
            let camount = existlocal[length].amount;
            let carrival = existlocal[length].arrival;
            let cname = existlocal[length].customername;
            let cdate = existlocal[length].date;
            let cdepart = existlocal[length].depart;
            let cplace = existlocal[length].place;
            let cplate = existlocal[length].plate;
            let ccontact = existlocal[length].contact;
            let ctype = existlocal[length].type;
            let curl = paymenturl;
            
            const prebooks = JSON.parse(localStorage.getItem("prebook3")) || [];
            if (prebooks.length) {
                localStorage.setItem("prebook3", JSON.stringify([...prebooks, {
                    amount: camount, arrival: carrival, name: cname, date: cdate, depart: cdepart,
                    place: cplace, plate: cplate, type: ctype, url: curl, contact: ccontact 
                }]))
            }
            else {
                localStorage.setItem("prebook3", JSON.stringify([{
                    amount: camount, arrival: carrival, name: cname, date: cdate, depart: cdepart,
                    place: cplace, plate: cplate, type: ctype, url: curl, contact: ccontact
                }]))
            }
            setTimeout(() => {
                window.location = "ticket.html";
            }, 3000);
    }
    
}



