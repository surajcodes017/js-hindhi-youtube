//for of 
const arr = [1,2,3,4,5,6,7,8,9]
for (const num of arr) {
    // console.log(num)
}
const  greetings = "Hello WOrld!"
for (const greet of greetings) {
    // console.log(greet )
}

//Maps 

const map = new Map()
map.set("IN","India")
map.set('USA','United sates of america ')
map.set('FR','FRANCE')
map.set("IN","Inndia")


// console.log(map)


// now how loop maps

for (const [key,value] of map) {
    // console.log(key,':-',value )
}

const myObject = {
    game1 : 'NFS',
    game2 : 'SpiderMAN'

}

// 
// for (const [key,value] of myObject) {
    // console.log(key,':-',value )
// }   // object are not iterable like this , there sis some other method , to iterate objects


//now lwts see the objects are iterated 

const newObj = {
    js : 'javascript',
    cpp: 'C++',
    rb : 'Ruby',
    swift :  'Swift by Apple'
}

// so for of loop is not suiable to iterate an object, so that is why we have an other loop caled for in

// for in

for (const key in newObj) {
//   console.log(`${key} shortcut  is for ${newObj[key]}`)
}


//DDoes for in loop work in arrays , lets check 
const programming = ["js","c++","c","HTML","css","java"]

for (const key  in programming) {
//    console.log(programming[key])
}

for (const key in map) {
  
    // console.log(key)  // map[ is not iteratatble using for in loop
}


//for each loop \\\

const coding = ['js','javascript','c++','c','python','ruby']

// coding.forEach(function (val){
//     console.log(val)
// })

// coding.forEach((item)=>{
//     console.log(item)
// })

function printMe(item){
    console.log(item)
}

// coding.forEach(printMe)

coding.forEach((item,i,myarray)=>{
    // console.log(item,i,myarray)
})

const myCoding =[  
    {
        languageName: "JavaScript",
        languageFileName: "JS"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "CPP",
        languageFileName: "cpp"
    } 

]
myCoding.forEach((item)=>{
    console.log(item.languageName)
})
     




