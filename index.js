function findMatching(drivers, name){
    return drivers.filter(elem => elem.toLowerCase() === name.toLowerCase() )
}

function fuzzyMatch(drivers, name){
    let match = []
    for(var i = 0; i < drivers.length; i++) {
        if (drivers[i][0] === name[0])
        match.push(drivers[i]);
      }
      return match;
}

function matchName(drivers, name){
    return drivers.filter(elem => elem.name === name )
    
}