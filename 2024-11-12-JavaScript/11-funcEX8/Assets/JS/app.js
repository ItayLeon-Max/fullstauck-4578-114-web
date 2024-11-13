//1.
const getReversed = (str) => {
    return str.split("").reverse().join("");
}

console.log(getReversed("Itay"));

//2.isPalindrome
const isPalindrome = (str) => {
    if(str === str.split("").reverse().join("")){
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("202"));

