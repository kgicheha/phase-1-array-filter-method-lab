// Code your solution here
const drivers = ["Matt", "Kevin", "Nick", "nick"]
function findMatching(arr, word) {

    const newArr = arr.filter((element)=> {
        if (element.toLowerCase() === word.toLowerCase()){
            return true
        } else {
            return false
        }
    })
    console.log(newArr)
    return newArr;
}
findMatching(drivers, "Nick");
findMatching(drivers, "matt");