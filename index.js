// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(function (driverName) { return driverName.toLowerCase() === name.toLowerCase(); })
}

function fuzzyMatch(drivers, partName) {
    return drivers.filter(function(driverName){ return driverName.slice(0, partName.length) === partName;});
}

function matchName(drivers, name) {
    return drivers.filter(function (driver) { return driver.name.toLowerCase() === name.toLowerCase(); })
}