//what are different type of functions

//named function
//Annonymus function

function sayHello()
{
    console.log("this is an named function")
}


let myFun = function()
{
    console.log("this is an Anonymus function")
}

let sum= function(x,y)
{
    return x+y

}

//arrow function

let sum1 = (x,y)=> x+y

console.log(sum(10,11))

let msg = ()=> console.log("this is an Arrow Function")
msg()



let arr = [10,20,30,40,50]
for(let i=0;arr.length;i++)
{
    console.log(arr[i])
}
//foreach is used to itrate
//call back when a function is passed as an argument
arr.forEach((i)=>{console.log(i)})

let newArry = arr.map((i)=>{console.log(i*i)})
console.log(newArry)

let arry1=["hema","rani","sunita","sangeeta"]
let newarray1 = arry1.map((i)=>{"hi "+i})


