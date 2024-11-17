//Promise Object
function foo(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('(:');
        }, 2000);
    });
}


foo().then(function(data){
    console.log(data);
});