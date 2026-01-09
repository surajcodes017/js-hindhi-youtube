// arrays 
// how arrays are declared

const myArr = [0,1,2,3,4,5,]
const Heroes = ["suraj","Virat","Kohli","Rohit"]
const myArr2 = new Array(33,43,67,43,1,29,0)
// console.log(myArr2) 
// console.log(Heroes) 
// console.log(myArr) 

 /*
     1.arrys awill start from zero th indexing
    2.in js arrays will not only just store a single datatypes  eleements, it can store different data type elements
    3. shallow copy , deep copy

 */

  // Array methods
  
  myArr.push(6)
  myArr.push(7)
  myArr.pop()

  myArr.unshift(0)
  myArr.shift()
//   console.log(myArr)
//   console.log(myArr.includes(1))
//   console.log(myArr.indexOf(5))

//   const newArr = myArr.join()

//   console.log(myArr)
//   console.log(newArr)
//   console.log(typeof newArr)

  // important method in arrays
  // 1. slice , splice

  const array1 = [1,2,3,4,5,6]
//   console.log(`A => ${array1}`)
//   console.log("A ",array1)
  const array2 = array1.slice(1,4)
//   console.log(array2)
//   console.log(array1)

  const array3 = array1.splice(1,4)
//   console.log(array3)
//   console.log(array1)

// Arrays more important topics 

const cric_heroes = ["sachin","pointing","Ganguly","Kapil dev","Khalis"]
const young_heroes = ["Abhishek","Tilak","Vaibhav","Gill"]

// cric_heroes.push(young_heroes)
// console.log(cric_heroes)
// console.log(cric_heroes[5][0])


// so in the above when we push an array1, so whole arrays pushed as an single entity , but we dont want this 


// const  all_heroes = cric_heroes.concat(young_heroes)
// console.log(all_heroes)


// Another one more important , is Spread operator 

const all_new_heroes = [...cric_heroes, ...young_heroes]
// console.log(all_new_heroes)

// Array flatening, 
const another_array = [1,2,3,[4,5,6],7,[7,8,[1,2,3]]]
// const real_another_array = another_array.flat(Infinity)
// W e can also give the depth, that means , until how ,much deep we go and and make flat 
const real_another_array = another_array.flat(1)
// console.log(real_another_array)


// when we are getting data from websites , how to check weather , it is comming in the form of arrays or not , and if it is not in the form of array , then we will amke it to arrays, 
// and why we onlu need it in the form of arrays is , beacuse we can do many manipulations with arrays, like looping , etc.../

const str = "suraj"
console.log(Array.isArray(str))
const str_array = Array.from(str)
// console.log(Array.from(str))
console.log(str_array)

console.log(Array.from({name: "suraj"})) // intresting  , and this will produce an empty string because we need to specify , weather to make keys as array or, values 

let score1 = 102
let score2 = 12
let score3 = 2
const goats = ["Messi","Ronaldo","Virat"]


console.log(Array.of(score1,score2,score3,goats))