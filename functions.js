//ততততততততততততততত CHALLENGE ONE ততততততততততততততত
function addToZero(arr) {
    for(let i = 0; i < arr.length; i++)
        for(let j = i + 1; j < arr.length; j++)
            if (arr[i] + arr[j] === 0)
                return true 
    return false
}
console.log(addToZero([-1, 4, 1]))
// Results for the addToZero
// insert 38.8 μs
// append 75.3 μs
//O(n^2)

//ততততততততততততততত CHALLENGE TWO ততততততততততততততত
function uniqueCharacters(str) {
    for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if (str[i] == str[j])
                return false
    return true
}
console.log(uniqueCharacters('monday'))
// Results for the uniqueCharacters
// insert 30.2 μs
// append 67.4 μs
//O(n^2)

//ততততততততততততততত CHALLENGE THREE ততততততততততততততত
function isPangram(str) {
    let strArr = str.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false
      }
    }
    return true 
}
console.log(isPangram('The quick brown fox jumps over the lazy dog'))
// Results for the isPangram
// insert 125.6 μs
// append 78.7 μs
//O(n)

//ততততততততততততততত CHALLENGE FOUR ততততততততততততততত
let str= 'hi hello'
let strArr = str.split(' ')
let sortedStrArr = strArr.sort(
    (strA, strB) => {
        return strB.length - strA.length
    }
)
console.log(sortedStrArr[0].length)
// Results for the sortedStrArr
// insert 36.7 μs
// append 78.6 μs
//O(n)

// ───────────────────────────────────────
// ───▐▀▄───────▄▀▌───▄▄▄▄▄▄▄─────────────
// ───▌▒▒▀▄▄▄▄▄▀▒▒▐▄▀▀▒██▒██▒▀▀▄──────────
// ──▐▒▒▒▒▀▒▀▒▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄────────
// ──▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▒▒▒▒▒▒▒▒▒▒▒▒▀▄──────
// ▀█▒▒▒█▌▒▒█▒▒▐█▒▒▒▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌─────
// ▀▌▒▒▒▒▒▒▀▒▀▒▒▒▒▒▒▀▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐───▄▄
// ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌▄█▒█
// ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒█▀─
// ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▀───
// ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌────
// ─▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐─────
// ─▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌─────
// ──▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐──────
// ──▐▄▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▌──────
// ────▀▄▄▀▀▀▀▀▄▄▀▀▀▀▀▀▀▄▄▀▀▀▀▀▄▄▀────────


