const Myname: string = "John Doe";

function hasName(hasName: boolean){
    if(hasName) console.log(Myname);
}

hasName(!!Myname);
