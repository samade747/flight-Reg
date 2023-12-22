const passortDataBase = [
    {passengerName: 'samad', flightNumber: 'Ek786', passportNumber: 7778586421},
    {passengerName: 'Kamil', flightNumber: 'Ek786', passportNumber: 700778586421},

];

function displayPassportDataBase(){
    const displayEle = document.getElementById('passportDatabaseDisplay');
    displayEle.innerHTML = `<h3>Passport DataBase</h3><ul>`;

    passortDataBase.forEach(element => {
        
    });
}




function flightDataInput(){
let flightNum = document.getElementById('flightNum');
let passengerName = document.getElementById('TicketName');
let passportNumber = document.getElementById('passportNumber');

let flightDetails = {
    passengerName: passengerName,
    flightNumber: flightNum,
    passportNumber: passportNumber
}

checkIn(flightDetails);

}





function checkIn(flightDetails) {
    let found = false;
    for(let i = 0; i < passortDataBase.length; i++){
    if( 
        passortDataBase[i].passengerName === flightDetails.passengerName &&
        passortDataBase[i].flightNumber === flightDetails.flightNumber && 
        passortDataBase[i].passportNumber == flightDetails.passportNumber   
    ) {
        found = true;
        break;
    }


}   

    
}


if (found) {
    alert('check-in successfully ');
} else {
    alert('check-in denied. passenger not found')
}