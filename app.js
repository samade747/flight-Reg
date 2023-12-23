const passportDataBase = [
    {Name: 's', flightNumber: '1', passportNumber: 1},
    {Name: 'Kamil', flightNumber: 'Ek786', passportNumber: 700778586421},

];


let flightNum = document.getElementById('flightNum');

let passengerName = document.getElementById('PassengerName');

let passportNumber = document.getElementById('passportNumber');



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

flightNum = document.getElementById('flightNum');
passengerName = document.getElementById('PassengerName');
passportNumber = document.getElementById('passportNumber');

console.log("Flight Number:", flightNum);
    console.log("Passenger Name:", Name);
    console.log("Passport Number:", passportNumber);


let flightDetails = {
    flightNumber: flightNum,
    passengerName: Name,    
    passportNumber: passportNumber
}

console.log(flightDetails)

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


