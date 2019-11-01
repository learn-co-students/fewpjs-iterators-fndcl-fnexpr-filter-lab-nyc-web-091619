function findMatching(coll, name) {
  return coll.filter(collName => {
    return collName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(coll, partial) {
  return coll.filter(collName => {
    return collName.slice(0, partial.length) === partial;
  });
}

function matchName(coll, name) {
  return coll.filter(collObj => {
    return collObj.name === name;
  });
}
