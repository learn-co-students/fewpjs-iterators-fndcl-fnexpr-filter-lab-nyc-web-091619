// Code your solution here


function findMatching(drivers, name){
    return drivers.filter( function(driver){
        return name.toLowerCase() === driver.toLowerCase()
    })
}

function fuzzyMatch(drivers, name){
    return drivers.filter(function(driver){
        return driver.slice(0, name.length) === name
    })
}

function matchName(drivers, name){
    return drivers.filter( function(driver){
        return name.toLowerCase() === driver.name.toLowerCase()
    })
}