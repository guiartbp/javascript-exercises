const findTheOldest = function(people) {

    let ageOldest = 0;
    let objOldest;

    for (const person of people){
        if(person.hasOwnProperty('yearOfDeath')){

            let agePerson = person['yearOfDeath'] - person['yearOfBirth']

            if(agePerson > ageOldest){
            ageOldest = agePerson;
            objOldest = person;
            }

        } else {

            let year =  new Date().getFullYear()
            let agePerson = year - person['yearOfBirth']
            
            if(agePerson > ageOldest){
                ageOldest = agePerson;
                objOldest = person;
            }
        }
    }
        
    return objOldest;

};

// Do not edit below this line
module.exports = findTheOldest;
