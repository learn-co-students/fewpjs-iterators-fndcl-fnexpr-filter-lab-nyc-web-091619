// Code your solution here
const findMatching = (arr, name) => {
    return arr.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

const fuzzyMatch = (arr, str) => {
    return arr.filter(driver => driver.charAt(0) === str.charAt(0) && driver.charAt(1) === str.charAt(1))
}

const matchName = (arr, name) => {
    return arr.filter(obj => obj.name === name)
}