const grade = +prompt("Enter your grade: ");
if(grade >= 0 && grade <= 100){
    if(grade === 100){
        document.write("A+");
    } else if(grade >= 60 && grade !== 100){
        document.write("A");    
    } else if(grade >=0 && grade <= 59){
        document.write("F");
    } 
} else {
    document.write("this is grate is not valid");
}


