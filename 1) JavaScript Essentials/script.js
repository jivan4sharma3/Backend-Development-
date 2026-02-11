// alert("hey this is javaScript essentials")

const arr = [1,2,3,'jivan',]

// foreach loop
arr.forEach((val)=>{
  console.log(val)
})

// map loop 
// map gives new array
const newarr = arr.map((val)=>{
    return val + 2
})       

console.log(arr)
console.log(newarr)

// filter
const new_  = arr.filter((val)=>{
    if(val>2){
        return true
    }else{
        return false
    }
})

//find 
const find = arr.find((val)=>{
   if(val === 2 ) return val
})
console.log(find)


// object in js
const students = {
    name:"jivan",
    class: 12,
    rollno:15,
    subjects:["maths","science","nepali" , "english"]
}

console.log(students);
console.log(students.subjects)

// function in js

function add(a, b) {
    return a + b;
}

add(4,3) // calling the fuction 


// function wiht parameters
function square(num) {
    return num * num;
}
square(5); // 25

// funstion without retrun 
function sayHi(name) {
    console.log("Hi " + name);
}
 sayHi("jivan")



