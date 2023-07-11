sbook();
function sbook() {
    const test1 = JSON.parse(localStorage.getItem("test"))
    console.log(test1);
    console.log(localStorage.getItem("FULLNAME"));
}

let clientname = localStorage.getItem("FULLNAME");


let date = new Date();
let currentdate = date.getDate();
let year = date.getFullYear();
let initialmonth = date.getMonth();
let month = initialmonth + 1;



let completedate = currentdate + "/" + month + "/" + year;
document.getElementById('fp11').value = completedate;
document.getElementById('fp12').value = clientname;

function uppercaseit() {
    let a = document.getElementById('fp32').value;
    let b = a.toUpperCase();
    document.getElementById('fp32').value = b;
}

function displaynow1() {
    document.getElementById('hr2').style.display = "none";
    document.getElementById('p1').style.color = "red";
    document.getElementById('p2').style.color = "black";
    document.getElementById('hr1').style.display = "block";
}
function displaynow2() {
    document.getElementById('hr2').style.display = "block";
    document.getElementById('p1').style.color = "black";
    document.getElementById('p2').style.color = "red";
    document.getElementById('hr1').style.display = "none";
}

let hour = date.getHours();
document.getElementById('fp71').value = "5 Rs";
document.getElementById('fp81').value = "5 Rs";
if (hour <= 10) {
    document.getElementById('fp41').innerHTML = `<option value="11">11:00 AM</option>
    <option value="12">12:00 PM</option>
    <option value="13">1:00 PM</option>
    <option value="14">2:00 PM</option>
    <option value="15">3:00 PM</option>
    <option value="16">4:00 PM</option>
    <option value="17">5:00 PM</option>
                                           `;
    document.getElementById('fp42').innerHTML = `
            <option value="12">12:00 PM</option>
            <option value="13">1:00 PM</option>
            <option value="14">2:00 PM</option>
            <option value="15">3:00 PM</option>
            <option value="16">4:00 PM</option>
            <option value="17">5:00 PM</option>
            <option value="18">6:00 PM</option>
                                                   `;
}
else if (hour == 11) {
    document.getElementById('fp41').innerHTML = `<option value="12">12:00 PM</option>
                                                     <option value="13">1:00 PM</option>
                                                     <option value="14">2:00 PM</option>
                                                     <option value="15">3:00 PM</option>
                                                     <option value="16">4:00 PM</option>
                                                     <option value="17">5:00 PM</option>
                                                                                            `;
    document.getElementById('fp42').innerHTML = `<option value="13">1:00 PM</option>
                                                             <option value="14">2:00 PM</option>
                                                             <option value="15">3:00 PM</option>
                                                             <option value="16">4:00 PM</option>
                                                             <option value="17">5:00 PM</option>
                                                             <option value="18">6:00 PM</option>
                                                                                                    `;
}
else if (hour == 12) {
    document.getElementById('fp41').innerHTML = `
                                                     <option value="13">1:00 PM</option>
                                                     <option value="14">2:00 PM</option>
                                                     <option value="15">3:00 PM</option>
                                                     <option value="16">4:00 PM</option>
                                                     <option value="17">5:00 PM</option>
                                                                                            `;
    document.getElementById('fp42').innerHTML = `
                                                             <option value="14">2:00 PM</option>
                                                             <option value="15">3:00 PM</option>
                                                             <option value="16">4:00 PM</option>
                                                             <option value="17">5:00 PM</option>
                                                             <option value="18">6:00 PM</option>
                                                                                                    `;
}
else if (hour == 13) {
    document.getElementById('fp41').innerHTML = `
                                    
                                                     <option value="14">2:00 PM</option>
                                                     <option value="15">3:00 PM</option>
                                                     <option value="16">4:00 PM</option>
                                                     <option value="17">5:00 PM</option>
                                                                                            `;
    document.getElementById('fp42').innerHTML = `
                                                            <option value="15">3:00 PM</option>
                                                             <option value="16">4:00 PM</option>
                                                             <option value="17">5:00 PM</option>
                                                             <option value="18">6:00 PM</option>
                                                                                                    `;
}
else if (hour == 14) {
    document.getElementById('fp41').innerHTML = `
                                                     <option value="15">3:00 PM</option>
                                                     <option value="16">4:00 PM</option>
                                                     <option value="17">5:00 PM</option>
                                                                                            `;
    document.getElementById('fp42').innerHTML = `
                                                             <option value="16">4:00 PM</option>
                                                             <option value="17">5:00 PM</option>
                                                             <option value="18">6:00 PM</option>
                                                                                                    `;
}
else if (hour == 15) {
    document.getElementById('fp41').innerHTML = `
                                                     <option value="16">4:00 PM</option>
                                                     <option value="17">5:00 PM</option>
                                                                                            `;
    document.getElementById('fp42').innerHTML = `
                                                             <option value="17">5:00 PM</option>
                                                             <option value="18">6:00 PM</option>
                                                                                                    `;
}
else if (hour == 16) {
    document.getElementById('fp41').innerHTML = `
                                                     <option value="17">5:00 PM</option>
                                                                                            `;
    document.getElementById('fp42').innerHTML = `
                                                             <option value="18">6:00 PM</option>
                                                                                                    `;
}
else {
    setTimeout(() => {
        alert("ACE is closed as of now. Please try Pre-Booking or come back tomorrow.")
    }, 1500);
    document.getElementById('fp41').innerHTML = `
                                                     <option value="None">Unavailable</option>
                                                                                            `;
    document.getElementById('fp42').innerHTML = `
                                                             <option value="None">Unavailable</option>
                                                                                                    `;
}

function placedes() {
    let time = new Date();
    let hour = time.getHours();
    let place = document.getElementById('fp21').value;
    if (place == "Mall1") {
        document.getElementById('fp62').innerHTML = 100;
        if (hour <= 10) {
            document.getElementById('fp41').innerHTML = `<option value="11">11:00 AM</option>
                                                            <option value="12">12:00 PM</option>
                                                             <option value="13">1:00 PM</option>
                                                             <option value="14">2:00 PM</option>
                                                             <option value="15">3:00 PM</option>
                                                             <option value="16">4:00 PM</option>
                                                             <option value="17">5:00 PM</option>
                                                             <option value="18">6:00 PM</option>
                                                             <option value="19">7:00 PM</option>
                                                             <option value="20">8:00 PM</option>
                                                             <option value="21">9:00 PM</option>
                                                             <option value="22">10:00 PM</option>
                                                             <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                                                                    <option value="12">12:00 PM</option>
                                                                    <option value="13">1:00 PM</option>
                                                                     <option value="14">2:00 PM</option>
                                                                     <option value="15">3:00 PM</option>
                                                                     <option value="16">4:00 PM</option>
                                                                     <option value="17">5:00 PM</option>
                                                                     <option value="18">6:00 PM</option>
                                                                     <option value="19">7:00 PM</option>
                                                                     <option value="20">8:00 PM</option>
                                                                     <option value="21">9:00 PM</option>
                                                                     <option value="22">10:00 PM</option>
                                                                     <option value="23">11:00 PM</option>
                                                                     <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 11) {
            document.getElementById('fp41').innerHTML = `
                <option value="12">12:00 PM</option>
                 <option value="13">1:00 PM</option>
                 <option value="14">2:00 PM</option>
                 <option value="15">3:00 PM</option>
                 <option value="16">4:00 PM</option>
                 <option value="17">5:00 PM</option>
                 <option value="18">6:00 PM</option>
                 <option value="19">7:00 PM</option>
                 <option value="20">8:00 PM</option>
                 <option value="21">9:00 PM</option>
                 <option value="22">10:00 PM</option>
                 <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                <option value="13">1:00 PM</option>
                 <option value="14">2:00 PM</option>
                 <option value="15">3:00 PM</option>
                 <option value="16">4:00 PM</option>
                 <option value="17">5:00 PM</option>
                 <option value="18">6:00 PM</option>
                 <option value="19">7:00 PM</option>
                 <option value="20">8:00 PM</option>
                 <option value="21">9:00 PM</option>
                 <option value="22">10:00 PM</option>
                 <option value="23">11:00 PM</option>
                 <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 13) {
            document.getElementById('fp41').innerHTML = `
                <option value="14">2:00 PM</option>
                <option value="15">3:00 PM</option>
                <option value="16">4:00 PM</option>
                <option value="17">5:00 PM</option>
                <option value="18">6:00 PM</option>
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                <option value="15">3:00 PM</option>
                <option value="16">4:00 PM</option>
                <option value="17">5:00 PM</option>
                <option value="18">6:00 PM</option>
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 14) {
            document.getElementById('fp41').innerHTML = `
                <option value="15">3:00 PM</option>
                <option value="16">4:00 PM</option>
                <option value="17">5:00 PM</option>
                <option value="18">6:00 PM</option>
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                <option value="16">4:00 PM</option>
                <option value="17">5:00 PM</option>
                <option value="18">6:00 PM</option>
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 15) {
            document.getElementById('fp41').innerHTML = `
                 <option value="16">4:00 PM</option>
                 <option value="17">5:00 PM</option>
                 <option value="18">6:00 PM</option>
                 <option value="19">7:00 PM</option>
                 <option value="20">8:00 PM</option>
                 <option value="21">9:00 PM</option>
                 <option value="22">10:00 PM</option>
                 <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                <option value="17">5:00 PM</option>
                <option value="18">6:00 PM</option>
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 16) {
            document.getElementById('fp41').innerHTML = `
                <option value="17">5:00 PM</option>
                <option value="18">6:00 PM</option>
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                <option value="18">6:00 PM</option>
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 17) {
            document.getElementById('fp41').innerHTML = `
                <option value="18">6:00 PM</option>
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 18) {
            document.getElementById('fp41').innerHTML = `
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 19) {
            document.getElementById('fp41').innerHTML = `
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 20) {
            document.getElementById('fp41').innerHTML = `
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 21) {
            document.getElementById('fp41').innerHTML = `
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                <option value="23">11:00 PM</option>
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 22) {
            document.getElementById('fp41').innerHTML = `
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else {
            setTimeout(() => {
                alert("Infiniti Mall is closed as of now. Please try Pre-Booking or come back tomorrow.")
            }, 1500);
            document.getElementById('fp41').innerHTML = `
                                                             <option value="None">Unavailable</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                                                                     <option value="None">Unavailable</option>
                                                                                                            `;
        }
    }

    else if (place == "Mall2") {
        document.getElementById('fp62').innerHTML = 150;
        if (hour <= 10) {
            document.getElementById('fp41').innerHTML = `<option value="11">11:00 AM</option>
                                                            <option value="12">12:00 PM</option>
                                                             <option value="13">1:00 PM</option>
                                                             <option value="14">2:00 PM</option>
                                                             <option value="15">3:00 PM</option>
                                                             <option value="16">4:00 PM</option>
                                                             <option value="17">5:00 PM</option>
                                                             <option value="18">6:00 PM</option>
                                                             <option value="19">7:00 PM</option>
                                                             <option value="20">8:00 PM</option>
                                                             <option value="21">9:00 PM</option>
                                                             <option value="22">10:00 PM</option>
                                                             <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                                                                    <option value="12">12:00 PM</option>
                                                                    <option value="13">1:00 PM</option>
                                                                     <option value="14">2:00 PM</option>
                                                                     <option value="15">3:00 PM</option>
                                                                     <option value="16">4:00 PM</option>
                                                                     <option value="17">5:00 PM</option>
                                                                     <option value="18">6:00 PM</option>
                                                                     <option value="19">7:00 PM</option>
                                                                     <option value="20">8:00 PM</option>
                                                                     <option value="21">9:00 PM</option>
                                                                     <option value="22">10:00 PM</option>
                                                                     <option value="23">11:00 PM</option>
                                                                     <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 11) {
            document.getElementById('fp41').innerHTML = `
                <option value="12">12:00 PM</option>
                 <option value="13">1:00 PM</option>
                 <option value="14">2:00 PM</option>
                 <option value="15">3:00 PM</option>
                 <option value="16">4:00 PM</option>
                 <option value="17">5:00 PM</option>
                 <option value="18">6:00 PM</option>
                 <option value="19">7:00 PM</option>
                 <option value="20">8:00 PM</option>
                 <option value="21">9:00 PM</option>
                 <option value="22">10:00 PM</option>
                 <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                <option value="13">1:00 PM</option>
                 <option value="14">2:00 PM</option>
                 <option value="15">3:00 PM</option>
                 <option value="16">4:00 PM</option>
                 <option value="17">5:00 PM</option>
                 <option value="18">6:00 PM</option>
                 <option value="19">7:00 PM</option>
                 <option value="20">8:00 PM</option>
                 <option value="21">9:00 PM</option>
                 <option value="22">10:00 PM</option>
                 <option value="23">11:00 PM</option>
                 <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 13) {
            document.getElementById('fp41').innerHTML = `
                <option value="14">2:00 PM</option>
                <option value="15">3:00 PM</option>
                <option value="16">4:00 PM</option>
                <option value="17">5:00 PM</option>
                <option value="18">6:00 PM</option>
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                <option value="15">3:00 PM</option>
                <option value="16">4:00 PM</option>
                <option value="17">5:00 PM</option>
                <option value="18">6:00 PM</option>
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 14) {
            document.getElementById('fp41').innerHTML = `
                <option value="15">3:00 PM</option>
                <option value="16">4:00 PM</option>
                <option value="17">5:00 PM</option>
                <option value="18">6:00 PM</option>
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                <option value="16">4:00 PM</option>
                <option value="17">5:00 PM</option>
                <option value="18">6:00 PM</option>
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 15) {
            document.getElementById('fp41').innerHTML = `
                 <option value="16">4:00 PM</option>
                 <option value="17">5:00 PM</option>
                 <option value="18">6:00 PM</option>
                 <option value="19">7:00 PM</option>
                 <option value="20">8:00 PM</option>
                 <option value="21">9:00 PM</option>
                 <option value="22">10:00 PM</option>
                 <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                <option value="17">5:00 PM</option>
                <option value="18">6:00 PM</option>
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 16) {
            document.getElementById('fp41').innerHTML = `
                <option value="17">5:00 PM</option>
                <option value="18">6:00 PM</option>
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                <option value="18">6:00 PM</option>
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 17) {
            document.getElementById('fp41').innerHTML = `
                <option value="18">6:00 PM</option>
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 18) {
            document.getElementById('fp41').innerHTML = `
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 19) {
            document.getElementById('fp41').innerHTML = `
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 20) {
            document.getElementById('fp41').innerHTML = `
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 21) {
            document.getElementById('fp41').innerHTML = `
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                <option value="23">11:00 PM</option>
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 22) {
            document.getElementById('fp41').innerHTML = `
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else {
            setTimeout(() => {
                alert("Inorbit Mall is closed as of now. Please try Pre-Booking or come back tomorrow.")
            }, 1500);
            document.getElementById('fp41').innerHTML = `
                                                             <option value="None">Unavailable</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                                                                     <option value="None">Unavailable</option>
                                                                                                            `;
        }

    }
    else {
        document.getElementById('fp62').innerHTML = 20;
        if (hour <= 10) {
            document.getElementById('fp41').innerHTML = `<option value="11">11:00 AM</option>
            <option value="12">12:00 PM</option>
            <option value="13">1:00 PM</option>
            <option value="14">2:00 PM</option>
            <option value="15">3:00 PM</option>
            <option value="16">4:00 PM</option>
            <option value="17">5:00 PM</option>
                                                   `;
            document.getElementById('fp42').innerHTML = `
                    <option value="12">12:00 PM</option>
                    <option value="13">1:00 PM</option>
                    <option value="14">2:00 PM</option>
                    <option value="15">3:00 PM</option>
                    <option value="16">4:00 PM</option>
                    <option value="17">5:00 PM</option>
                    <option value="18">6:00 PM</option>
                                                           `;
        }
        else if (hour == 11) {
            document.getElementById('fp41').innerHTML = `<option value="12">12:00 PM</option>
                                                             <option value="13">1:00 PM</option>
                                                             <option value="14">2:00 PM</option>
                                                             <option value="15">3:00 PM</option>
                                                             <option value="16">4:00 PM</option>
                                                             <option value="17">5:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `<option value="13">1:00 PM</option>
                                                                     <option value="14">2:00 PM</option>
                                                                     <option value="15">3:00 PM</option>
                                                                     <option value="16">4:00 PM</option>
                                                                     <option value="17">5:00 PM</option>
                                                                     <option value="18">6:00 PM</option>
                                                                                                            `;
        }
        else if (hour == 12) {
            document.getElementById('fp41').innerHTML = `
                                                             <option value="13">1:00 PM</option>
                                                             <option value="14">2:00 PM</option>
                                                             <option value="15">3:00 PM</option>
                                                             <option value="16">4:00 PM</option>
                                                             <option value="17">5:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                                                                     <option value="14">2:00 PM</option>
                                                                     <option value="15">3:00 PM</option>
                                                                     <option value="16">4:00 PM</option>
                                                                     <option value="17">5:00 PM</option>
                                                                     <option value="18">6:00 PM</option>
                                                                                                            `;
        }
        else if (hour == 13) {
            document.getElementById('fp41').innerHTML = `
                                            
                                                             <option value="14">2:00 PM</option>
                                                             <option value="15">3:00 PM</option>
                                                             <option value="16">4:00 PM</option>
                                                             <option value="17">5:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                                                                    <option value="15">3:00 PM</option>
                                                                     <option value="16">4:00 PM</option>
                                                                     <option value="17">5:00 PM</option>
                                                                     <option value="18">6:00 PM</option>
                                                                                                            `;
        }
        else if (hour == 14) {
            document.getElementById('fp41').innerHTML = `
                                                             <option value="15">3:00 PM</option>
                                                             <option value="16">4:00 PM</option>
                                                             <option value="17">5:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                                                                     <option value="16">4:00 PM</option>
                                                                     <option value="17">5:00 PM</option>
                                                                     <option value="18">6:00 PM</option>
                                                                                                            `;
        }
        else if (hour == 15) {
            document.getElementById('fp41').innerHTML = `
                                                             <option value="16">4:00 PM</option>
                                                             <option value="17">5:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                                                                     <option value="17">5:00 PM</option>
                                                                     <option value="18">6:00 PM</option>
                                                                                                            `;
        }
        else if (hour == 16) {
            document.getElementById('fp41').innerHTML = `
                                                             <option value="17">5:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                                                                     <option value="18">6:00 PM</option>
                                                                                                            `;
        }
        else {
            setTimeout(() => {
                alert("ACE is closed as of now. Please try Pre-Booking or come back tomorrow.")
            }, 1500);
            document.getElementById('fp41').innerHTML = `
                                                             <option value="None">Unavailable</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                                                                     <option value="None">Unavailable</option>
                                                                                                            `;
        }
    }
}

function totalprice() {
    let place = document.getElementById('fp21').value;
    if (place == "ACOE") {
        if (document.getElementById('fp31').value == "Two Wheeler") {
            document.getElementById('fp71').value = "5 Rs";
            let money = 5;
            let arrtime = parseInt(document.getElementById('fp41').value);
            let deptime = parseInt(document.getElementById('fp42').value);
            let nettime = deptime - arrtime;
            if (nettime <= 0) {
                alert("Please select appropriate timing.");
            }
            else {
                document.getElementById('fp81').value = nettime * money + " Rs";
            }
        }
        else {
            document.getElementById('fp71').value = "15 Rs";
            let money = 15;
            let arrtime = (document.getElementById('fp41').value);
            let deptime = (document.getElementById('fp42').value);
            let nettime = deptime - arrtime;
            if (nettime <= 0) {
                alert("Please select appropriate timing.");
            }
            else {
                document.getElementById('fp81').value = nettime * money + " Rs";
            }
        }
    }

    else if (place == "Mall1") {
        if (document.getElementById('fp31').value == "Two Wheeler") {
            document.getElementById('fp71').value = "10 Rs";
            let money = 10;
            let arrtime = parseInt(document.getElementById('fp41').value);
            let deptime = parseInt(document.getElementById('fp42').value);
            let nettime = deptime - arrtime;
            if (nettime <= 0) {
                alert("Please select appropriate timing.");
            }
            else {
                document.getElementById('fp81').value = nettime * money + " Rs";
            }
        }
        else {
            document.getElementById('fp71').value = "20 Rs";
            let money = 20;
            let arrtime = (document.getElementById('fp41').value);
            let deptime = (document.getElementById('fp42').value);
            let nettime = deptime - arrtime;
            if (nettime <= 0) {
                alert("Please select appropriate timing.");
            }
            else {
                document.getElementById('fp81').value = nettime * money + " Rs";
            }
        }
    }

    else{
        if (document.getElementById('fp31').value == "Two Wheeler") {
            document.getElementById('fp71').value = "15 Rs";
            let money = 15;
            let arrtime = parseInt(document.getElementById('fp41').value);
            let deptime = parseInt(document.getElementById('fp42').value);
            let nettime = deptime - arrtime;
            if (nettime <= 0) {
                alert("Please select appropriate timing.");
            }
            else {
                document.getElementById('fp81').value = nettime * money + " Rs";
            }
        }
        else {
            document.getElementById('fp71').value = "30 Rs";
            let money = 30;
            let arrtime = (document.getElementById('fp41').value);
            let deptime = (document.getElementById('fp42').value);
            let nettime = deptime - arrtime;
            if (nettime <= 0) {
                alert("Please select appropriate timing.");
            }
            else {
                document.getElementById('fp81').value = nettime * money + " Rs";
            }
        }
    }

}