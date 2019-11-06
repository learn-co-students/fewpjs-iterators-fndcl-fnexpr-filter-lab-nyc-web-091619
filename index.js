// Code your solution here
// ok! 🙌🏼

// use filter() method on [driversArray](typeof array) with an anonymous
// function which is passed individual [drivers](typeof string) from
// [driversArray], along with a [searchString](typeof string) and converts
// both using toLowerCase() method.  The anonymous function returns true
// on match to filter(), creating a new array and assigning it to the 
// variable [matches](typeof array).  It returns this array to caller.
function findMatching(driversArray, searchString) {
    let matches = driversArray.filter(driver => {
        return (driver.toLowerCase() === searchString.toLowerCase())
    })
    return matches;
}

// use filter() method on [driversArray](typeof array) with an anonymous
// function which is passed individual [drivers](typeof string) from
// [driversArray], along with a [searchString](typeof string) and converts
// both using toLowerCase() method.  It the uses the startsWith() method
// (case-sensitive), to see whether the individual [driver] string starts
// with the [searchString].  If it does, return it in a new array and 
// assign it to the variable matches and returns it the caller.
function fuzzyMatch(driversArray, searchString) {
    let matches = driversArray.filter(driver => {
        return (driver.toLowerCase().startsWith(searchString.toLowerCase()))
    })
    return matches;
}

// use filter() method on [driversArray](typeof array of objects) with an
// anonymous function which is passed individual [drivers](typeof string) from
// [driversArray], along with a [searchString](typeof string) and converts
// both using toLowerCase() method.  It compares the ["name"] attribute of 
// [driver] to see whether it's equal to the [searchString].  If it does,
// return it in a new array and assign it to the variable matches and
// returns it the caller.
function matchName(driversArray, searchString) {
    return driversArray.filter(driver => {
        return (driver.name.toLowerCase() === searchString.toLowerCase())
    })
}
