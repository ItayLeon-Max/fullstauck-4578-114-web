//7-BOOM Game
//Ask the user to enter a number.
//If the number is divisible by 7, alert "BOOM!!!"
//Otherwise, alert "You lose"
//To make it more interesting, you can add the following rules:
//If the number contains 7, alert "BOOM!!!"
//Example: 7, 17, 27, 37, 47, 57, 67, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 87, 97
//Note: The rules must be followed in the same order.
//Example: If the number is 77, it is divisible by 7 and contains 7. Both rules apply.

let num = parseInt(prompt("Enter a number: "));
let i = 1;
while(i <= num){
    let span = document.createElement("span");
    //Integer: 47 ToString ---> String: "47" (.includes 7) test if have 7 on it or not on the string string
    if(i % 7 == 0 || i.toString().includes("7")){ 
        //if the number is divisible by 7 or contains 7
        span.style.color = "red";
        span.innerHTML += " BOOM ";
        document.body.appendChild(span);
    }else{
        //if the number is not divisible by 7 or contains 7
        span.style.color = "green";
        span.innerHTML += i + " ";
        document.body.appendChild(span);
    }
    i++;
}

