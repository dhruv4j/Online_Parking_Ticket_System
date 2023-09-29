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
        
        const existlocal3 = JSON.parse(localStorage.getItem("test3")) || [];
        if (existlocal3.length) {
            localStorage.setItem("test3", JSON.stringify([...existlocal3, {
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



