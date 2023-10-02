
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
    document.getElementById('fp41').innerHTML = `<option value="None">-Select-</option>
    <option value="11">11:00 AM</option>
    <option value="12">12:00 PM</option>
    <option value="13">1:00 PM</option>
    <option value="14">2:00 PM</option>
    <option value="15">3:00 PM</option>
    <option value="16">4:00 PM</option>
    <option value="17">5:00 PM</option>
                                           `;
    document.getElementById('fp42').innerHTML = `
            <option value="None">-Select-</option>
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
    document.getElementById('fp41').innerHTML = `
                                                    <option value="None">-Select-</option>
                                                    <option value="12">12:00 PM</option>
                                                     <option value="13">1:00 PM</option>
                                                     <option value="14">2:00 PM</option>
                                                     <option value="15">3:00 PM</option>
                                                     <option value="16">4:00 PM</option>
                                                     <option value="17">5:00 PM</option>
                                                                                            `;
    document.getElementById('fp42').innerHTML = `<option value="None">-Select-</option>
                                                            <option value="13">1:00 PM</option>
                                                             <option value="14">2:00 PM</option>
                                                             <option value="15">3:00 PM</option>
                                                             <option value="16">4:00 PM</option>
                                                             <option value="17">5:00 PM</option>
                                                             <option value="18">6:00 PM</option>
                                                                                                    `;
}
else if (hour == 12) {
    document.getElementById('fp41').innerHTML = `
                                                    <option value="None">-Select-</option>
                                                     <option value="13">1:00 PM</option>
                                                     <option value="14">2:00 PM</option>
                                                     <option value="15">3:00 PM</option>
                                                     <option value="16">4:00 PM</option>
                                                     <option value="17">5:00 PM</option>
                                                                                            `;
    document.getElementById('fp42').innerHTML = `
                                                            <option value="None">-Select-</option>
                                                             <option value="14">2:00 PM</option>
                                                             <option value="15">3:00 PM</option>
                                                             <option value="16">4:00 PM</option>
                                                             <option value="17">5:00 PM</option>
                                                             <option value="18">6:00 PM</option>
                                                                                                    `;
}
else if (hour == 13) {
    document.getElementById('fp41').innerHTML = `
                                                    <option value="None">-Select-</option>
                                                     <option value="14">2:00 PM</option>
                                                     <option value="15">3:00 PM</option>
                                                     <option value="16">4:00 PM</option>
                                                     <option value="17">5:00 PM</option>
                                                                                            `;
    document.getElementById('fp42').innerHTML = `
                                                            <option value="None">-Select-</option>
                                                            <option value="15">3:00 PM</option>
                                                             <option value="16">4:00 PM</option>
                                                             <option value="17">5:00 PM</option>
                                                             <option value="18">6:00 PM</option>
                                                                                                    `;
}
else if (hour == 14) {
    document.getElementById('fp41').innerHTML = `
                                                    <option value="None">-Select-</option>
                                                     <option value="15">3:00 PM</option>
                                                     <option value="16">4:00 PM</option>
                                                     <option value="17">5:00 PM</option>
                                                                                            `;
    document.getElementById('fp42').innerHTML = `
                                                            <option value="None">-Select-</option>
                                                             <option value="16">4:00 PM</option>
                                                             <option value="17">5:00 PM</option>
                                                             <option value="18">6:00 PM</option>
                                                                                                    `;
}
else if (hour == 15) {
    document.getElementById('fp41').innerHTML = `
                                                    <option value="None">-Select-</option>
                                                     <option value="16">4:00 PM</option>
                                                     <option value="17">5:00 PM</option>
                                                                                            `;
    document.getElementById('fp42').innerHTML = `
                                                            <option value="None">-Select-</option>
                                                             <option value="17">5:00 PM</option>
                                                             <option value="18">6:00 PM</option>
                                                                                                    `;
}
else if (hour == 16) {
    document.getElementById('fp41').innerHTML = `
                                                    <option value="None">-Select-</option>
                                                     <option value="17">5:00 PM</option>
                                                                                            `;
    document.getElementById('fp42').innerHTML = `
                                                            <option value="None">-Select-</option>
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
    document.getElementById('fp61').innerHTML = 0;
    if (place == "Mall1") {
        document.getElementById('fp62').innerHTML = 100;
        if (hour <= 10) {
            document.getElementById('fp41').innerHTML = `<option value="None">-Select-</option>
                                                            <option value="11">11:00 AM</option>
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
            document.getElementById('fp42').innerHTML = `<option value="None">-Select-</option>
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
            <option value="None">-Select-</option>
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
            <option value="None">-Select-</option>
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
            <option value="None">-Select-</option>
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
            <option value="None">-Select-</option>
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
            <option value="None">-Select-</option>
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
            <option value="None">-Select-</option>
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
            <option value="None">-Select-</option>
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
            <option value="None">-Select-</option>
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
            <option value="None">-Select-</option>
                <option value="17">5:00 PM</option>
                <option value="18">6:00 PM</option>
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
            <option value="None">-Select-</option>
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
            <option value="None">-Select-</option>
                <option value="18">6:00 PM</option>
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
            <option value="None">-Select-</option>
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
            <option value="None">-Select-</option>
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
            <option value="None">-Select-</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 19) {
            document.getElementById('fp41').innerHTML = `
            <option value="None">-Select-</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
            <option value="None">-Select-</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 20) {
            document.getElementById('fp41').innerHTML = `
            <option value="None">-Select-</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
            <option value="None">-Select-</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 21) {
            document.getElementById('fp41').innerHTML = `
            <option value="None">-Select-</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
            <option value="None">-Select-</option>
                <option value="23">11:00 PM</option>
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 22) {
            document.getElementById('fp41').innerHTML = `
            <option value="None">-Select-</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
            <option value="None">-Select-</option>
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
            document.getElementById('fp41').innerHTML = `<option value="None">-Select-</option>
                                                            <option value="11">11:00 AM</option>
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
            document.getElementById('fp42').innerHTML = `   <option value="None">-Select-</option>
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
            <option value="None">-Select-</option>
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
            <option value="None">-Select-</option>
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
            <option value="None">-Select-</option>
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
            <option value="None">-Select-</option>
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
            <option value="None">-Select-</option>
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
            <option value="None">-Select-</option>
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
            <option value="None">-Select-</option>
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
            <option value="None">-Select-</option>
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
            <option value="None">-Select-</option>
                <option value="17">5:00 PM</option>
                <option value="18">6:00 PM</option>
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
            <option value="None">-Select-</option>
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
            <option value="None">-Select-</option>
                <option value="18">6:00 PM</option>
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
            <option value="None">-Select-</option>
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
            <option value="None">-Select-</option>
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
            <option value="None">-Select-</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 19) {
            document.getElementById('fp41').innerHTML = `
            <option value="None">-Select-</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
            <option value="None">-Select-</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 20) {
            document.getElementById('fp41').innerHTML = `
            <option value="None">-Select-</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
            <option value="None">-Select-</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 21) {
            document.getElementById('fp41').innerHTML = `
            <option value="None">-Select-</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
            <option value="None">-Select-</option>
                <option value="23">11:00 PM</option>
                <option value="24">12:00 AM</option>
                                                                                                            `;
        }
        else if (hour == 22) {
            document.getElementById('fp41').innerHTML = `
            <option value="None">-Select-</option>
                <option value="23">11:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
            <option value="None">-Select-</option>
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
            document.getElementById('fp41').innerHTML = `
            <option value="None">-Select-</option>
            <option value="11">11:00 AM</option>
            <option value="12">12:00 PM</option>
            <option value="13">1:00 PM</option>
            <option value="14">2:00 PM</option>
            <option value="15">3:00 PM</option>
            <option value="16">4:00 PM</option>
            <option value="17">5:00 PM</option>
                                                   `;
            document.getElementById('fp42').innerHTML = `
            <option value="None">-Select-</option>
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
            document.getElementById('fp41').innerHTML = `
                                                        <option value="None">-Select-</option>
                                                            <option value="12">12:00 PM</option>
                                                             <option value="13">1:00 PM</option>
                                                             <option value="14">2:00 PM</option>
                                                             <option value="15">3:00 PM</option>
                                                             <option value="16">4:00 PM</option>
                                                             <option value="17">5:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                                                                <option value="None">-Select-</option>
                                                                    <option value="13">1:00 PM</option>
                                                                     <option value="14">2:00 PM</option>
                                                                     <option value="15">3:00 PM</option>
                                                                     <option value="16">4:00 PM</option>
                                                                     <option value="17">5:00 PM</option>
                                                                     <option value="18">6:00 PM</option>
                                                                                                            `;
        }
        else if (hour == 12) {
            document.getElementById('fp41').innerHTML = `
                                                            <option value="None">-Select-</option>
                                                             <option value="13">1:00 PM</option>
                                                             <option value="14">2:00 PM</option>
                                                             <option value="15">3:00 PM</option>
                                                             <option value="16">4:00 PM</option>
                                                             <option value="17">5:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                                                                <option value="None">-Select-</option>
                                                                     <option value="14">2:00 PM</option>
                                                                     <option value="15">3:00 PM</option>
                                                                     <option value="16">4:00 PM</option>
                                                                     <option value="17">5:00 PM</option>
                                                                     <option value="18">6:00 PM</option>
                                                                                                            `;
        }
        else if (hour == 13) {
            document.getElementById('fp41').innerHTML = `
                                                            <option value="None">-Select-</option>
                                                             <option value="14">2:00 PM</option>
                                                             <option value="15">3:00 PM</option>
                                                             <option value="16">4:00 PM</option>
                                                             <option value="17">5:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                                                                <option value="None">-Select-</option>
                                                                    <option value="15">3:00 PM</option>
                                                                     <option value="16">4:00 PM</option>
                                                                     <option value="17">5:00 PM</option>
                                                                     <option value="18">6:00 PM</option>
                                                                                                            `;
        }
        else if (hour == 14) {
            document.getElementById('fp41').innerHTML = `
                                                            <option value="None">-Select-</option>
                                                             <option value="15">3:00 PM</option>
                                                             <option value="16">4:00 PM</option>
                                                             <option value="17">5:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                                                                <option value="None">-Select-</option>
                                                                     <option value="16">4:00 PM</option>
                                                                     <option value="17">5:00 PM</option>
                                                                     <option value="18">6:00 PM</option>
                                                                                                            `;
        }
        else if (hour == 15) {
            document.getElementById('fp41').innerHTML = `
                                                            <option value="None">-Select-</option>
                                                             <option value="16">4:00 PM</option>
                                                             <option value="17">5:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                                                                <option value="None">-Select-</option>
                                                                     <option value="17">5:00 PM</option>
                                                                     <option value="18">6:00 PM</option>
                                                                                                            `;
        }
        else if (hour == 16) {
            document.getElementById('fp41').innerHTML = `
                                                        <option value="None">-Select-</option>
                                                             <option value="17">5:00 PM</option>
                                                                                                    `;
            document.getElementById('fp42').innerHTML = `
                                                                <option value="None">-Select-</option>
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

    else {
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

function confirmslot() {
    event.preventDefault();
    let confirmdate = document.getElementById('fp11').value;
    let confirmname = document.getElementById('fp12').value;
    let confirmplace = document.getElementById('fp21').value;
    let confirmvtype = document.getElementById('fp31').value;
    let confirmnumberplate = document.getElementById('fp32').value;
    let confirmarrival = document.getElementById('fp41').value;
    let confirmdepart = document.getElementById('fp42').value;
    let confirmnumber = document.getElementById('fp51').value;
    console.log(confirmnumber);
    let confirmtotalamount = document.getElementById('fp81').value;
    if (confirmarrival == "None" || confirmdepart == "None" || confirmdepart - confirmarrival <= 0) {
        alert('Please select appropriate timings.');
    }
    else {
        const existlocal = JSON.parse(localStorage.getItem("test1")) || [];
        if (existlocal.length) {
            localStorage.setItem("test1", JSON.stringify([...existlocal, {
                customername: confirmname, date: confirmdate,
                date: confirmdate, place: confirmplace, type: confirmvtype, plate: confirmnumberplate,
                arrival: confirmarrival, depart: confirmdepart, amount: confirmtotalamount, contact: confirmnumber
            }]))
        }
        else {
            localStorage.setItem("test1", JSON.stringify([{
                customername: confirmname, date: confirmdate,
                date: confirmdate, place: confirmplace, type: confirmvtype, plate: confirmnumberplate,
                arrival: confirmarrival, depart: confirmdepart, amount: confirmtotalamount, contact: confirmnumber
            }]))
        }
        document.getElementById('finalconfirm').outerHTML = `<input type="reset" id="greybtn" class="fullwidth submitbtn" value="Confirming...">`
        setTimeout(() => {
            window.location = "payment.html";
        }, 2000);
    }


}

function spaceavailable() {
    const existlocal = JSON.parse(localStorage.getItem("test1")) || [];
    let arrivaltime = document.getElementById('fp41').value;
    let departtime = document.getElementById('fp42').value;
    let cplace = document.getElementById('fp21').value;
    var count = 0;
    if (cplace == "Mall1") {
        if (existlocal.length == 0) {
            document.getElementById('fp61').innerHTML = 100;
        }
        for (let i = 0; i < existlocal.length; i++) {
            if (existlocal[i].place == "Mall1") {
                if (arrivaltime == "None" || departtime == "None") {
                    document.getElementById('fp61').innerHTML = 100;
                }
                else if (arrivaltime < existlocal[i].arrival && departtime < existlocal[i].arrival) {
                    if(departtime > existlocal[i].arrival){
                        count++;
                    }
                    else{
                        document.getElementById('fp61').innerHTML = 100;
                    }
                }
                else if (arrivaltime > existlocal[i].arrival && departtime > existlocal[i].depart) {
                    if(arrivaltime < existlocal[i].depart){
                        count++;
                    }
                    else{
                        document.getElementById('fp61').innerHTML = 100;
                    }
                }
                else {
                    count++;
                }
            }
        }
        if (count > 0) {
            document.getElementById('fp61').innerHTML = 100 - count;
        }
    }

    else if (cplace == "Mall2") {
        if (existlocal.length == 0) {
            document.getElementById('fp61').innerHTML = 150;
        }
        for (let i = 0; i < existlocal.length; i++) {
            if (existlocal[i].place == "Mall2") {
                if (arrivaltime == "None" || departtime == "None") {
                    document.getElementById('fp61').innerHTML = 150;
                }
                else if (arrivaltime < existlocal[i].arrival && departtime < existlocal[i].arrival) {
                    if(departtime > existlocal[i].arrival){
                        count++;
                    }
                    else{
                        document.getElementById('fp61').innerHTML = 150;
                    }
                }
                else if (arrivaltime > existlocal[i].arrival && departtime > existlocal[i].depart) {
                    if(arrivaltime < existlocal[i].depart){
                        count++;
                    }
                    else{
                        document.getElementById('fp61').innerHTML = 150;
                    }
                }
                else {
                    count++;
                }
            }
        }
        if (count > 0) {
            document.getElementById('fp61').innerHTML = 150 - count;
        }
    }

    else {
        if (existlocal.length == 0) {
            document.getElementById('fp61').innerHTML = 20;
        }
        for (let i = 0; i < existlocal.length; i++) {
            if (existlocal[i].place == "ACOE") {
                if (arrivaltime == "None" || departtime == "None") {
                    document.getElementById('fp61').innerHTML = 20;
                }
                else if (arrivaltime < existlocal[i].arrival && departtime < existlocal[i].arrival) {
                    if(departtime > existlocal[i].arrival){
                        count++;
                    }
                    else{
                        document.getElementById('fp61').innerHTML = 20;
                    }
                }
                else if (arrivaltime > existlocal[i].arrival && departtime > existlocal[i].depart) {
                    if(arrivaltime < existlocal[i].depart){
                        count++;
                    }
                    else{
                        document.getElementById('fp61').innerHTML = 20;
                    }
                }
                else {
                    count++;
                }
            }
        }
        if (count > 0) {
            document.getElementById('fp61').innerHTML = 20 - count;
        }
    }
}


function comingsoon() {
    alert("This feature under development and will be released soon.");
}