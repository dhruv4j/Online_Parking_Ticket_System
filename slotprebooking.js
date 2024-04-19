function comingsoon() {
    let date = new Date();
    let currentdate = date.getDate();
    let year = date.getFullYear();
    let initialmonth = date.getMonth();
    let month = initialmonth + 1;
                                                   
    if(month==2)
    {
        if(year%4==0){
            if(currentdate==29){
                document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="smallwidth settingpadding" min="${year}-03-01" max="${year}-03-02" required>`;
            }
            else if(currentdate==28){
                document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="smallwidth settingpadding" min="${year}-02-29" max="${year}-03-01" required>`;   
            }
            else if(1 <= currentdate && currentdate<8){
                document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="settingpadding" min="${year}-0${month}-0${currentdate+1}" max="${year}-0${month}-0${currentdate+2}" required>`;
            }
            else if(currentdate==8){
                document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="settingpadding" min="${year}-0${month}-09" max="${year}-0${month}-10" required>`;
            }
            else{
                document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="settingpadding" min="${year}-0${month}-${currentdate+1}" max="${year}-0${month}-${currentdate+2}" required>`;
            }
        }
        else{
            if(currentdate==27){
                document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="smallwidth settingpadding" min="${year}-02-28" max="${year}-03-01" required>`;
            }
            else if(currentdate==28){
                document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="smallwidth settingpadding" min="${year}-03-01" max="${year}-03-02" required>`;
            }
            else if(1 <= currentdate && currentdate<8){
                document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="settingpadding" min="${year}-0${month}-0${currentdate+1}" max="${year}-0${month}-0${currentdate+2}" required>`;
            }
            else if(currentdate==8){
                document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="settingpadding" min="${year}-0${month}-09" max="${year}-0${month}-10" required>`;
            }
            else{
                document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="settingpadding" min="${year}-0${month}-${currentdate+1}" max="${year}-0${month}-${currentdate+2}" required>`;
            }
        }
    }
    else if (month==1 || month==3 || month==5 || month==7 || month==8){
        if(currentdate==30){
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="smallwidth settingpadding" min="${year}-0${month}-31" max="${year}-0${month+1}-01" required>`;
        }
        else if(currentdate==31){
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="smallwidth settingpadding" min="${year}-0${month+1}-01" max="${year}-0${month+1}-02" required>`;
        }
        else if(1 <= currentdate && currentdate<8){
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="settingpadding" min="${year}-0${month}-0${currentdate+1}" max="${year}-0${month}-0${currentdate+2}" required>`;
        }
        else if(currentdate==8){
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="settingpadding" min="${year}-0${month}-09" max="${year}-0${month}-10" required>`;
        }
        else{
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="settingpadding" min="${year}-0${month}-${currentdate+1}" max="${year}-0${month}-${currentdate+2}" required>`;
        }
    }
    else if(month==10){
        if(currentdate==30){
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="smallwidth settingpadding" min="${year}-${month}-31" max="${year}-${month+1}-01" required>`;
        }
        else if(currentdate==31){
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="smallwidth settingpadding" min="${year}-${month+1}-01" max="${year}-${month+1}-02" required>`;
        }
        else if(1 <= currentdate && currentdate<8){
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="settingpadding" min="${year}-${month}-0${currentdate+1}" max="${year}-${month}-0${currentdate+2}" required>`;
        }
        else if(currentdate==8){
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="settingpadding" min="${year}-${month}-09" max="${year}-${month}-10" required>`;
        }
        else{
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="settingpadding" min="${year}-${month}-${currentdate+1}" max="${year}-${month}-${currentdate+2}" required>`;
        }
    }
    else if(month==12){
        if(currentdate==30){
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="smallwidth settingpadding" min="${year}-12-31" max="${year+1}-01-01" required>`;
        }
        else if(currentdate==31){
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="smallwidth settingpadding" min="${year+1}-01-01" max="${year+1}-01-02" required>`;
        }
        else if(1 <= currentdate && currentdate<8){
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="settingpadding" min="${year}-${month}-0${currentdate+1}" max="${year}-${month}-0${currentdate+2}" required>`;
        }
        else if(currentdate==8){
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="settingpadding" min="${year}-${month}-09" max="${year}-${month}-10" required>`;
        }
        else{
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="settingpadding" min="${year}-${month}-${currentdate+1}" max="${year}-${month}-${currentdate+2}" required>`;
        }
    }
    else if(month==4 || month==6){
        if(currentdate==29){
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="smallwidth settingpadding" min="${year}-0${month}-30" max="${year}-0${month+1}-01" required>`;
        }
        else if(currentdate==30){
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="smallwidth settingpadding" min="${year}-0${month+1}-01" max="${year}-0${month+1}-02" required>`;
        }
        else if(1 <= currentdate && currentdate<8){
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="settingpadding" min="${year}-0${month}-0${currentdate+1}" max="${year}-0${month}-0${currentdate+2}" required>`;
        }
        else if(currentdate==8){
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="settingpadding" min="${year}-0${month}-09" max="${year}-0${month}-10" required>`;
        }
        else{
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="settingpadding" min="${year}-0${month}-${currentdate+1}" max="${year}-0${month}-${currentdate+2}" required>`;
        }
    }
    else if(month==9){
        if(currentdate==29){
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="smallwidth settingpadding" min="${year}-0${month}-30" max="${year}-${month+1}-01" required>`;
        }
        else if(currentdate==30){
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="smallwidth settingpadding" min="${year}-${month+1}-01" max="${year}-${month+1}-02" required>`;
        }
        else if(1 <= currentdate && currentdate<8){
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="settingpadding" min="${year}-0${month}-0${currentdate+1}" max="${year}-0${month}-0${currentdate+2}" required>`;
        }
        else if(currentdate==8){
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="settingpadding" min="${year}-0${month}-09" max="${year}-0${month}-10" required>`;
        }
        else{
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="settingpadding" min="${year}-0${month}-${currentdate+1}" max="${year}-0${month}-${currentdate+2}" required>`;
        }
    }
    else if(month==11){
        if(currentdate==29){
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="smallwidth settingpadding" min="${year}-${month}-30" max="${year}-${month+1}-01" required>`;
        }
        else if(currentdate==30){
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="smallwidth settingpadding" min="${year}-${month+1}-01" max="${year}-${month+1}-02" required>`;
        }
        else if(1 <= currentdate && currentdate<8){
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="settingpadding" min="${year}-${month}-0${currentdate+1}" max="${year}-${month}-0${currentdate+2}" required>`;
        }
        else if(currentdate==8){
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="settingpadding" min="${year}-${month}-09" max="${year}-${month}-10" required>`;
        }
        else{
            document.getElementById('fp11').outerHTML = ` <input type="date" id="fp11" class="settingpadding" min="${year}-${month}-${currentdate+1}" max="${year}-${month}-${currentdate+2}" required>`;
        }
    }

    changept();
}

function changept(){
    let date = new Date();
    let currentdate = date.getDate();
    let year = date.getFullYear();
    let initialmonth = date.getMonth();
    let month = initialmonth + 1;
    let completedate = currentdate + "/" + month + "/" + year;
    if(document.getElementById('fp11').value===completedate){

    }
    else{
        let cplace = document.getElementById('fp21').value;
        if(cplace == "ACOE"){
            document.getElementById('fp41').innerHTML = `<option value="None">-Select-</option>
            <option value="9">9:00 AM</option>
            <option value="10">10:00 AM</option>
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
                    <option value="10">10:00 AM</option>
                    <option value="11">11:00 AM</option>
                    <option value="12">12:00 PM</option>
                    <option value="13">1:00 PM</option>
                    <option value="14">2:00 PM</option>
                    <option value="15">3:00 PM</option>
                    <option value="16">4:00 PM</option>
                    <option value="17">5:00 PM</option>
                    <option value="18">6:00 PM</option>
                                                           `;
        }
        else
        {
            document.getElementById('fp41').innerHTML = `<option value="None">-Select-</option>
            <option value="9">9:00 AM</option>
            <option value="10">10:00 AM</option>
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
            document.getElementById('fp42').innerHTML = `
                    <option value="None">-Select-</option>
                    <option value="10">10:00 AM</option>
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
                    <option value="24">12:00 AM</option>
                    
                                                           `;
        }
    }
}