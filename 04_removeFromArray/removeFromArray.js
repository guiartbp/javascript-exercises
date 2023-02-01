const removeFromArray = function(arrayItems, ...removeItems) {

    let index;
    let removeOfArray;
    for (const item of removeItems) {
        if (arrayItems.includes(item)){
            index = arrayItems.indexOf(item);
            removeOfArray = arrayItems.splice(index, 1);
        } 
    }
    
    return arrayItems;


};

// Do not edit below this line
module.exports = removeFromArray;
