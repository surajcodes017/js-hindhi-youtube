const user = {
    username: "Hitesh",
    prices: 999,

    WelcomeMessage: function(){
         console.log(`${this.username} ,Welcome to website`)
         console.log(this)
      }
}



// user.WelcomeMessage()
// user.username = "sam"
// user.WelcomeMessage()

// console.log(this)

const car = {
    brand : "BMW",
    showBrand :  function(){
        console.log(this.brand)
    }
}

const bike = {
    brand : "yamaha",
    showBrand : car.showBrand
}

// bike.showBrand()



//  this key word have so uses with functions
// function chai(){
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()



//  how to declare functions using Arrow  functions

const chai = function(){
     let username = "hitesh"
    console.log(this.username)
    console.log(this)
}
// chai()


// const chai = () =>{
//          let username = "hitesh"
//         console.log(this.username)
//         console.log(this)
// }

// chai()


// const addTwo = (num1,num2) => {
//     return num1+num2

// }

// we can also do implicit return which is like below
// const addTwo = (num1,num2) =>  (num1+num2)  

// see if u want to return an object , then keep the object in  this ->()  brackets 
const addTwo = (num1,num2) => ({username: "syrahbnw"})

console.log(addTwo(2,3)) 