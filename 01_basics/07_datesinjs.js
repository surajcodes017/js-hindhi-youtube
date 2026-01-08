//  Dates

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2023,0,23) 
// let myCreatedDate = new Date(2026,1,14,11,30,45)
// let myCreatedDate = new Date("2026-02-14")
let myCreatedDate = new Date("02-14-2026")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamps = Date.now()

// console.log(myTimeStamps)
// console.log(Math.floor(Date.now()/(1000*60*60*24)))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getMonth())

console.log(newDate.toLocaleString('default',{
    weekday: "long",
    
}))