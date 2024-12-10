"using strict";

(async () => {
   const generateStrongPasswordAsync = () => {
    return new Promise((resolve, reject) => {
    });
   }
   const bigChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
   // with big and small letters with 6 length with numbers
   const randomPassword = bigChars[Math.floor(Math.random() * bigChars.length)] + bigChars[Math.floor(Math.random() * bigChars.length)].toLowerCase() + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + bigChars[Math.floor(Math.random() * bigChars.length)] + bigChars[Math.floor(Math.random() * bigChars.length)].toLowerCase();

   console.log(randomPassword);
})();