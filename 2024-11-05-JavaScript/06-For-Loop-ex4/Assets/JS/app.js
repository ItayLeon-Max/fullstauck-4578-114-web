//output
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********

// for(let i = 0; i < 10; i++){
//     for(let j = 0; j < 10; j++){
//         document.write(' * ');
//     }
//     document.write('<br>');
// }

// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********

// Let him write down one asterisk like typing on a keyboard with delay of 1 second
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
for(let i = 0; i < 10; i++){
    setTimeout(() => {
        for(let j = 0; j < 10; j++){
            document.write(' * ');
        }
        document.write('<br>');
    }, 1000 * i);
}










