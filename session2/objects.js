//object is a data structure
//data is stored in object in the form of key:value pair


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
