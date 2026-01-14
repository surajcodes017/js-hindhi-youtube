const coding = ["js","c++","c","HTML","css","java"]


// const value = coding.forEach((item)=>{
//     console.log(item)
//     return item;
// })
// console.log(value)

// foreach loop will not return anything , even if we want , so there is some other different process to get return

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums =myNums.filter((num)=> num>4)  // this was good if we use the one line syntax of arrow function 

const newNums = myNums.filter((num) =>{
       return num>4
})

// console.log(newNums)


const nums=[]
myNums.forEach((val) =>{
        if(val>5){
            nums.push(val)
        }
})
// console.log(nums)


const books = [
  {
    id: 1,
    title: "The Silent Forest",
    author: "Emily Carter",
    genre: "Fiction",
    price: 399,
    pages: 320,
    publishedYear: 2018,
    rating: 4.2
  },
  {
    id: 2,
    title: "Code Beyond Basics",
    author: "Rahul Mehta",
    genre: "Technology",
    price: 699,
    pages: 540,
    publishedYear: 2022,
    rating: 4.6
  },
  {
    id: 3,
    title: "History of Ancient Worlds",
    author: "Dr. Alan Brooks",
    genre: "History",
    price: 499,
    pages: 410,
    publishedYear: 2015,
    rating: 4.1
  },
  {
    id: 4,
    title: "The Art of Mindfulness",
    author: "Sophia Nguyen",
    genre: "Self-Help",
    price: 299,
    pages: 210,
    publishedYear: 2020,
    rating: 4.4
  },
  {
    id: 5,
    title: "Mystery at Raven Hill",
    author: "James Holloway",
    genre: "Mystery",
    price: 349,
    pages: 280,
    publishedYear: 2019,
    rating: 4.0
  },
  {
    id: 6,
    title: "Learning JavaScript Fast",
    author: "Anita Sharma",
    genre: "Technology",
    price: 599,
    pages: 460,
    publishedYear: 2021,
    rating: 4.7
  },
  {
    id: 7,
    title: "Poems Under the Moon",
    author: "Liam O'Connor",
    genre: "Poetry",
    price: 249,
    pages: 180,
    publishedYear: 2016,
    rating: 3.9
  },
  {
    id: 8,
    title: "The Science of Everyday Life",
    author: "Dr. Maria Lopez",
    genre: "Science",
    price: 549,
    pages: 390,
    publishedYear: 2017,
    rating: 4.3
  }
];


let  userBooks = books.filter((bk) =>{
    if(bk.genre === "Technology"){
        return bk;
    }
})

 userBooks = books.filter((bk)=>{
    if(bk.publishedYear>2021 && bk.genre === 'Technology'){
        return bk
    }
})

// console.log(userBooks)


const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//  const new_nums = myNumbers.map((num) => num+10)
//  console.log(new_nums)

const nnewNums = myNumbers
                .map((num)=> {
                  return num*10})
                .map((num) =>{
                  return num+1
                })
                .filter((num) =>{
                  return num>50
                })

// console.log(nnewNums)

 const number = [1,2,3]
//  const myTotal = number.reduce(function (acc,currval){
//   console.log(`Accumulator ${acc} and Current Vlaue ${currval}`)
//               return acc + currval;
//  },0)

const myTotal = number.reduce((acc,currval) =>{
              return acc+currval
},0)


//  console.log(myTotal)


const cart = [
  {
    id: 101,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    quantity: 2,
    inStock: true
  },
  {
    id: 102,
    name: "Bluetooth Headphones",
    category: "Electronics",
    price: 2499,
    quantity: 1,
    inStock: true
  },
  {
    id: 103,
    name: "Notebook",
    category: "Stationery",
    price: 99,
    quantity: 5,
    inStock: true
  },
  {
    id: 104,
    name: "Water Bottle",
    category: "Accessories",
    price: 349,
    quantity: 1,
    inStock: false
  },
  {
    id: 105,
    name: "Backpack",
    category: "Bags",
    price: 1299,
    quantity: 1,
    inStock: true
  }
];


const myRes = cart.reduce((acc,currval) =>{
        return acc+currval.price
},0)

console.log(myRes)