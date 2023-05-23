

let person = {
    name: "john", age:30, city:"jaipur",
    address:{from:123, street:"asda",pincode:123454},
    hobiies:["painting", "music", "gaming"],
    display:function()
    {
        console.log("this is an object function")
    }
}
console.log(person)
console.log(typeof(person))

console.log(person.name)
console.log(person.age)
console.log(person.city)


//dstructure object

let {name, age,city,address}=person
console.log(name)
console.log(age)
console.log(city)

//destrycturing array

let array = [10,20,30,40,50]

let [a,b,c,d,e] = array
//selective array destructuring
let [f,g,,,j] = array