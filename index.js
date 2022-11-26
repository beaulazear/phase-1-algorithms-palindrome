function isPalindrome(word) {

  let newArr = word.split("").reverse().join("")
  console.log(newArr)

  // let splitWord = word.split("")
  // let reverseArr = splitWord.reverse()
  // let joinedArr = reverseArr.join("")

  // console.log(joinedArr)
  
  if(newArr === word) {
    return true
  } else {
    return false
  }
}

/* 
  take in initial string passed as parameter
  reverse that string
  compare whether string is the same whil reversed
  if so, return true,
  if not, return false
*/

/*
  function will take one word in, confirm whether it is a palindrome(spelled the same forward and backwards) and return true if so, and false if not
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
