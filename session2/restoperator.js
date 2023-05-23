function add(x,y)
{
    return(x+y)
}

add(5,10,15,20,25,30,35)
//rest operator is used to pack the data into array
function add(...x)
{
    console.log(x)
}

add(5,10,15,20,25,30,35)

function add(a,b,...x)
{
    console.log(a,b,x)
}
