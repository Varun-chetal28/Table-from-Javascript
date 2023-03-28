const body = document.querySelector('body');
const table = document.createElement('table');
body.appendChild(table);

let thead = document.createElement('thead');
table.appendChild(thead);

let trow1 = document.createElement('tr');
thead.appendChild(trow1);

let thead1 = document.createElement('th');
thead1.textContent ="ID";

let thead2 = document.createElement('th');
thead2.textContent="Name";

let thead3 = document.createElement('th');
thead3.textContent="Location";

let thead4 = document.createElement('th');
thead4.textContent="Designation";

let thead5 = document.createElement('th');
thead5.textContent="Years of Experience";

trow1.append(thead1,thead2,thead3,thead4,thead5);

let tbody = document.createElement('tb');
table.appendChild(tbody);

let trow2 = document.createElement('tr');
thead.appendChild(trow2);


let tdata1 = document.createElement('td');
tdata1.textContent ="11";

let tdata2 = document.createElement('td');
tdata2.textContent="Varun";

let tdata3 = document.createElement('td');
tdata3.textContent="Faridabad";

let tdata4 = document.createElement('td');
tdata4.textContent="Intern";

let tdata5 = document.createElement('td');
tdata5.textContent="0";

trow2.append(tdata1,tdata2,tdata3,tdata4,tdata5);

let trow3 = document.createElement('tr');
thead.appendChild(trow3);

let tdata6 = document.createElement('td');
tdata6.textContent ="12";

let tdata7 = document.createElement('td');
tdata7.textContent="Deep";

let tdata8 = document.createElement('td');
tdata8.textContent=" Noida";

let tdata9 = document.createElement('td');
tdata9.textContent="Intern";

let tdata10 = document.createElement('td');
tdata10.textContent="0";

trow3.append(tdata6,tdata7,tdata8,tdata9,tdata10);

let trow4 = document.createElement('tr');
thead.appendChild(trow4);

let tdata11 = document.createElement('td');
tdata11.textContent ="13";

let tdata12 = document.createElement('td');
tdata12.textContent="Prerit";

let tdata13 = document.createElement('td');
tdata13.textContent="Rohini";

let tdata14 = document.createElement('td');
tdata14.textContent="Intern";

let tdata15 = document.createElement('td');
tdata15.textContent="0";

trow4.append(tdata11,tdata12,tdata13,tdata14,tdata15);

let trow5 = document.createElement('tr');
thead.appendChild(trow5);

let tdata16 = document.createElement('td');
tdata16.textContent ="14";

let tdata17 = document.createElement('td');
tdata17.textContent="Riya";

let tdata18 = document.createElement('td');
tdata18.textContent="Noida";

let tdata19 = document.createElement('td');
tdata19.textContent="Intern";

let tdata20 = document.createElement('td');
tdata20.textContent="0";

trow5.append(tdata16,tdata17,tdata18,tdata19,tdata20);

let trow6 = document.createElement('tr');
thead.appendChild(trow6);

let tdata21 = document.createElement('td');
tdata21.textContent ="15";

let tdata22 = document.createElement('td');
tdata22.textContent="Saksham";

let tdata23 = document.createElement('td');
tdata23.textContent="Delhi";

let tdata24 = document.createElement('td');
tdata24.textContent=" Intern";

let tdata25 = document.createElement('td');
tdata25.textContent="0";

trow6.append(tdata21,tdata22,tdata23,tdata24,tdata25);





