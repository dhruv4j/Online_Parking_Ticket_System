function searchFun(){
    let filter = document.getElementById('myInput').value.toUpperCase();
    let myTable = document.getElementById('myTable');
    let tr = myTable.getElementsByTagName('tr');
    
    for(let i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[2];
        if(td){
            let textvalue = td.textContent || td.innerHTML;

            if(textvalue.toUpperCase().indexOf(filter)>-1){
                tr[i].style.display="";
            }
            else{
                tr[i].style.display="none";
            }
        }
    }
}
let searchbox = document.getElementById('myTable');
const existlocal3 = JSON.parse(localStorage.getItem("test3")) || [];
for(let i=0;i<existlocal3.length;i++){
    let tr = document.createElement("tr");
	searchbox.appendChild(tr);

    let td0 = document.createElement("td");
	td0.innerHTML = i+1;
    tr.appendChild(td0);
    let td1 = document.createElement("td");
	td1.innerHTML = existlocal3[i].date;
	tr.appendChild(td1);
    let td2 = document.createElement("td");
	td2.innerHTML = existlocal3[i].name;
	tr.appendChild(td2);
    let td3 = document.createElement("td");
	td3.innerHTML = existlocal3[i].place;
	tr.appendChild(td3);
    let td31 = document.createElement("td");
	td31.innerHTML = existlocal3[i].contact;
	tr.appendChild(td31);
    let td4 = document.createElement("td");
	td4.innerHTML = existlocal3[i].type;
	tr.appendChild(td4);
    let td5 = document.createElement("td");
	td5.innerHTML = existlocal3[i].plate;
	tr.appendChild(td5);
    let td6 = document.createElement("td");
	td6.innerHTML = existlocal3[i].arrival+":00";
	tr.appendChild(td6);
    let td7 = document.createElement("td");
	td7.innerHTML = existlocal3[i].depart+":00";
	tr.appendChild(td7);
    let td8 = document.createElement("td");
	td8.innerHTML = existlocal3[i].amount;
	tr.appendChild(td8);
    let td9 = document.createElement("td");
    let payimg = document.createElement("img");
    payimg.src = existlocal3[i].url;
    payimg.style.width="50px";
    payimg.style.padding="10px";
	td9.appendChild(payimg);
	tr.appendChild(td9);
}

function backto(){
    window.location="admin.html";
}
	