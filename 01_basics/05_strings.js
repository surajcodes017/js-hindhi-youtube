// const name = "suraj"
// const repoCount = 50
// console.log(name + repoCount+" value") 
//  this above syntax of js is outdated in todays , 
// world  In modern days we generaly use back ticks, for strings
   

// Modern way syntax of javascript is :
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

//Another way of declaring strings:
// const gameName = new String("Suraj AndTrap")
// console.log(gameName)
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.toUpperCase())
// console.log(gameName)

// console.log(gameName.charAt(3))   //  this does not allow the usage of negative indexing
// console.log(gameName.indexOf('j'))
// console.log(gameName.anchor())
// console.log(gameName.length)
// console.log(gameName.at(3))
// console.log(gameName.charCodeAt(3))
// console.log(gameName.codePointAt(3))
// console.log(gameName.at(-3))  // this allows the usage of negative indexing,  and this is new addition to javascript

// console.log(gameName.charAt(13))  // if no character is found , we get return of an empty string
// console.log(gameName[13]) // in this , if no string is found , we get an return of undefined
// let text1 = "game";
// console.log(gameName.concat(" + ",text1))


// let text = "Apple, Banana, Kiwi";
// console.log(text.slice(7,13))
// console.log(text.slice(7))
// console.log(text.slice(-12))
// console.log(text.slice(-12,-6))


// console.log(text.substring(7,13))
// console.log(text.substring(7))
// console.log(text.substring(-12))
// console.log(text.substr(-12))

// console.log(text.substr(7,2))
// console.log(text.substring(7,2))

// console.log(text.toLowerCase())
// console.log(text.toUpperCase())

// console.log(text.isWellFormed())



// let text2 = "      Hello World!      ";
// let text3 = text2.trim();
// console.log(text3)
// console.log(text2)
// console.log(text2.trim())
// console.log(text2.trimStart())
// console.log(text2.trimEnd())

// padding in js

let text4 = "5"  // padding is string method , so to pad a number , we need to convert that number to string first
let padded = text4.padStart(5,"x")
console.log(padded)
console.log(typeof padded)
console.log(text4.padStart(4,"0"))
console.log(text4.padEnd(4,"0"))


let numb = 10
let text5 = numb.toString()
console.log(text5.padStart(3,"0"))

// reapeat()  in js
let text6 = "Hello World!"
let newtext = text6.repeat(3)
console.log(newtext)

//Replace string method

let text7 = "Please visit Microsoft!"
let newertext = text7.replace("Microsoft","W3Schools")
console.log(newertext)
//   so this replace will only replace the first occurence, if there are multiple occurences and we have to replace all of them then we have some other, syntaxes like /g

let  text8 = "Please visit Microsoft and Microsoft!"
let newertext1 = text8.replace(/Microsoft/g, "W3Schools")
console.log(newertext1)

// replace is initially a case sensitive this , so to make it case insensitive , we nned to use, so other syntax which is /i
let text9 = "Please visit Microsoft!"
console.log(text9.replace(/microsoft/i,"W3Schools"))


//split :=>   this converts the string to array and return and array , and also it does not chnages the original  string

let  data1 = "Virat,Rohit,Dhoni,Hardik"
let result = data1.split(",")
console.log(result)
console.log(typeof result)

let new1= "Apple,Banana, Kiwi"
console.log(new1.slice(-12,4))