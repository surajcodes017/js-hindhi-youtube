// singleton
// A singleton is object which has only one reference throught that object in that app
// object.create



const mySym = Symbol("key1")


 // object literals
const JsUser = {
    name: "suraj",
    [mySym]: "myKey1",
    age: "18",
    location: "Dharwad",
    email: "suraj.google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon","Sat"]
}   

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym])
// 

// console.log(typeof mySym)
JsUser["mySym"] = "key2"
// JsUser[mySym] = "key3"
JsUser["email"] = "suraj@codes.com"
// or we can also access objects key as 
JsUser.email = "suraj@chatgpt.com"
// console.log(JsUser)

// if we wanyt to lock our object so we can do it using , object freeze  
// even after freezing , if we apply the chnages we dont get any error , but we those chnages will not get applied  to it
// Object.freeze(JsUser)

JsUser.email = "suraj@gemini.com"

// Adding functions into the object 
JsUser.greeting = function(){
    console.log("Hello Js User ")
    return 0
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`)
    return 0
}

// console.log(JsUser.greeting())
// console.log(JsUser.greetingTwo())
// console.log(JsUser)







// Other way of declaring objects 
// const tinder = new Object()


 const tinderUser = {}

 tinderUser.id = "123abc"
 tinderUser.name = "Achyuth"
 tinderUser.isLoggedIn = true
// console.log(tinderUser)

const regularUser ={
    email: "brocode@gmail.com",
    fullname: {
        userfullName: {
            firstname: "suraj",
            lastname: "Duppally"
        }
    }
}

// console.log(regularUser.fullname.userfullName.firstname)

// Merging of objects 
 const obj1 = {1:"a",2:"b"}
 const obj2 = {3:"a",4:"b"}
 const obj4 = {5:"a",6:"b"}
//  method-1
//  const obj3 = {obj1,obj2}
// we can also do it , i mean , doing merging in other way 
// method-2
// so the main syntax is Object.assign(target,source ) 
// const obj3 = Object.assign(obj1,obj2,obj4)
//  console.log(obj3)
//  console.log(obj1 == obj3)
//  method-3
// this is as we have seen same in the arrays , which is known as spread opearator

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)


// when we get data of objects as an array of objects , we usaully , use the syntax  below 

// const users = {
//     {
//         id:1,
//         email: "virat@gmail.com"
//     },
//      {
//         id:1,
//         email: "virat@gmail.com"
//     },
//      {
//         id:1,
//         email: "virat@gmail.com"
//     },
//      {
//         id:1,
//         email: "virat@gmail.com"
//     }
    
// }
// users[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))  //  this makes , array inside the array , 
// ?? The best about this , we get all the values of keys or values in the form of Array, whcih we very usefull, to use them in future
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


//  Object destructuring
const course = {
    coursename: "JS in Hindhi",
    price: "9999",
    courseInstructor: "HiteshChoudhary"
}
// if we did not do object deconstrcuting , then everytime we access , we need to do, 
//   so instead of every time , writting those whole like we can do one thing , which is called object deconstrcuting

// console.log(course.coursename)

const {coursename,price,courseInstructor} = course

//  so now we can do direct access of our key values 
// and one more thing , we can also  change the our key names to other if they are big , or if u need to call it something else
const {coursename: cn,price:p,courseInstructor:inst} = course
console.log(coursename)
console.log(cn)


// syntax of JSON 
/