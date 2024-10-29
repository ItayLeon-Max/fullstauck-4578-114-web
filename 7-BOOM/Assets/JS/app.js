//7-BOOM Game
//input: number- 39
//output: 1 2 3 4 5 6 BOOM 8 9 10 11 12 13 14 BOOM 16 17 18 19 20 21 22 BOOM 24 25 26 27 28 29 BOOM BOOM BOOM BOOM BOOM 30 31 32 33 34 35 36 37 38 39
let num = parseInt(prompt("Enter a number: "));
let i = 1;
while(i <= num){
    if(i % 7 == 0 || i.toString().includes("7")){
        document.write(" BOOM ");
    }else{
        document.write(i + " ");
    }
    i++;
}
//8-Print the following pattern