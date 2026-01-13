//Immediately Invoked Fucntion expression

(function chai(){
    //  This is Called Named IIFE, because function has a name here
    console.log(`DB CONNECTED ONE`)
})();
// we need to complusoryly end the invoked iife, because it doesn't know where to stop , so this is done using semicolon ;
// writing IIFE as an arrrow function

((name) =>{
    // This is called Unnamed IIFE, because this doesnot have a name
    console.log(`DB CONNECTED TWO ${name}`)
})("suraj bro");