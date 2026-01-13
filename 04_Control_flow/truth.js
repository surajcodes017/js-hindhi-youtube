//   falsy values => false,0,-0,"",BigInt,null,undefined, NaN
//   truthy values => "0", 'false', " ",[],{},function(){}

let userEmail =[]; 

if(userEmail.length === 0 ){
    console.log("Array is Empty")
}

const emptyObj ={}
if(Object.keys(emptyObj).length === 0){
    console.log(`Object is empty`)
}

// Nullish Coalscing operator (??): null undefined
// from data base if we get null , these operator will take of things and recheck , it is use full there , u will get more use cases there in the future
let val1;
// val1 = 5??10;
// val1 = undefined ?? 15
// val1 = null ?? 21
val1 = null ?? 10 ?? 17  //  so the first proper value only wiull get considered 
console.log(val1)

//terneray operartor

//consition ? true : false
const iceTeaPrice =100
iceTeaPrice <= 80 ? console.log(`less than eighty`) : console.log(`More than eighty`)