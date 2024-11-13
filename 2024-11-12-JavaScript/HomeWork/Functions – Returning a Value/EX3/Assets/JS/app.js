const getTheBigStrOfArr = str => {
    let strLength = 0;
    let bigStr = '';
    str.forEach(firstStr => {
        if (firstStr.length > strLength) {
            strLength = firstStr.length;
            bigStr = firstStr;
        }
    });
    return bigStr;
}

const str = ['aaaaaaaa', 'ab', 'abc', 'abcd', 'abcde', 'abcdef'];
console.log(getTheBigStrOfArr(str));
