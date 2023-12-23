const passportDataBase = [
    {passengerName: 's', flightNumber: '1', passportNumber: 1},
    {passengerName: 'Kamil', flightNumber: 'Ek786', passportNumber: 700778586421},

];





function displayPassportDataBase(){
    const displayEle = document.getElementById('passportDatabaseDisplay');
    displayEle.innerHTML = `<h3>Passport DataBase</h3><ul>`;

    passportDataBase.forEach(entry => {
        displayEle.innerHTML += `<li>${entry.passengerName} - ${entry.flightNumber} - ${entry.passportNumber}</li>`;
    });
    displayEle.innerHTML += `</ul>`
}

displayPassportDataBase();




function flightDataInput(){

let flightNum = document.getElementById('flightNum').value;
let passengerName = document.getElementById('ticketName').value;
let passportNumber = document.getElementById('passportNumber').value;



let flightDetails = {
    passengerName: Name,
    flightNumber: flightNum,
    passportNumber: passportNumber
}



checkIn(flightDetails);

}





function checkIn(flightDetails) {
    let found = false;
    for(let i = 0; i < passportDataBase.length; i++){
    if( 
        passportDataBase[i].passengerName === flightDetails.passengerName &&
        passportDataBase[i].flightNumber === flightDetails.flightNumber && 
        passportDataBase[i].passportNumber == flightDetails.passportNumber   
    ) {
        found = true;
        break;
    }
}   

if (found) {
    console.log(found)
    alert('check-in successfully');
} else {
    alert('check-in denied. passenger not found')
}

displayPassportDataBase()
}


