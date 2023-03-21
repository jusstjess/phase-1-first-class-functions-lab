// Code your solution in this file!
const returnFirstTwoDrivers = function(names){
    const newarray = names.slice(0,2);
    return newarray;
    
}
const returnLastTwoDrivers = function(names2){
    const newarray2 = names2.slice(2);
    return newarray2;
    
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(number) {
    return (fare) => {
        return fare * number;
    }  
}
const fareDoubler = createFareMultiplier(2);
    
const fareTripler = createFareMultiplier(3);

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function selectDifferentDrivers(drivers,returnFirstTwoDrivers){
 
    
    return returnFirstTwoDrivers(drivers)
}




    


 

