//es 5 for handling class objects
function employee(name,age){
    this.name="oankaj"

    this.age=30

    showData = function(){
        console.log(this.name,this.age)
    }
}

var emp1 = new employee("pankaj",30)
emp1.showData()

//es 6 for handling class objects
class employee {
    constructor(name, age) {
        this.name = "oankaj"

        this.age = 30

        showData = function () {
            console.log(this.name, this.age)
        }
    }
}

var emp1 = new employee("pankaj",30)
emp1.showData()

