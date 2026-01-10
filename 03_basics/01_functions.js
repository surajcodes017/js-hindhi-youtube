

function sayMyNmae() {
    console.log("s")
    console.log("u")
    console.log("r")
    console.log("a")
    console.log("j")
}

// sayMyNmae()


// function addTwoNumbers(num1,num2){
//     console.log(num1+num2)
// }


function addTwoNumbers(num1,num2){
    // let result = num1 + num2
    return num1+num2
}

// addTwoNumbers(3,4)  
// addTwoNumbers(3,null)  
// addTwoNumbers(3,"2")


const result = addTwoNumbers(7,0)
// console.log(`RESULT: ${result}`)

 function loginUserMessage(username="sam"){  //  this is giving default values , when arguemnts are not passed
    if(!username){
        console.log(`please enetr user name`)
        return
    }
    
        return `${username} just LoggedIn`
 
    }
        

// console.log( loginUserMessage("SURAJ DUPPALLY"))
// console.log( loginUserMessage())


// when working in building , e-coomerce website we dont know , how may items , a customers may adds to the crat , that meas  we dont know know , how may arguments were 
// sent so , that is why the below technique is used


// function calculateCartPrice(...num1) {
//         return num1
// }


function calculateCartPrice(val1,val2,...num1) {
        return num1
}

// console.log(calculateCartPrice(3,200,300,400))

// now we will see , how objects are passed into functions

const user = {
    username: "suarj",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
    
}
// handleObject(user)
//  the problem here is when we accesd the key which is not in our object then ., it will print undefined, so 
// we need to always check first weather whatever we are accessing is there in the object or not


handleObject({
    username: "sammy",
    price: 399

})


//Now lets see how arrays are passed in objects 

const myNewArray = [100,200,300,400]

function returnSecondValue(getArray){
        return getArray[0]
}
//  console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([1,2,3,4]))