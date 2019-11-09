// Code your solution here

// Write findMatching- This function takes an array of drivers and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

// findMatching()
// ✓ returns all drivers that match the passed in name
// ✓ returns matching drivers if case does not match but letters do
// ✓ returns an empty array if there is no match

function findMatching(drivers, name){
    return drivers.filter(element => element.toLowerCase() === name.toLowerCase())
}



// Write fuzzyMatch - This function takes an array of drivers and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

// fuzzyMatch()
// ✓ returns a driver if beginning provided letters match
// ✓ does not return drivers if only middle or ending letters match
// ✓ does not return drivers if only middle or ending letters match

function fuzzyMatch(drivers, name){
    const match = []
    for(var i=0; i< drivers.length; i++){
        if (drivers[i][0] === name[0])
        match.push(drivers[i]);
    }
    return match;
}



// Write matchName - This function takes an array of drivers and a string as arguments. In this function, each element of the drivers array is a JavaScript object that has a property of name. The function should return each element whose name property matches the provided string argument.

// matchName()
// ✓ accesses the data structure to check if name matches

function matchName(drivers, name){
    return drivers.filter(element => element.name === name)
}