let arry1=[1,2,3]

let arry2=[4,5,6]
console.log(...arry1)
//let combine = arry1.concat(arry2)

let combine = [...arry1, ...arry2]



function sum(x,y,z)
    {
        console.log(x,y,z)
    }
sum(...arry1)


