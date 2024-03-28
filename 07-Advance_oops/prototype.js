// let myName = "shrut     "
// let mychannel = "makadiya     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shrut = function(){
    console.log(`shrut is present in all objects`);
}

Array.prototype.heyshrut = function(){
    console.log(`shrut says hello`);
}

// heroPower.shrut()
// myHeros.shrut()
// myHeros.heyshrut()
// heroPower.heyshrut()



// inheritance

const User = {
    name: "amtics",
    email: "amtics@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "amticsAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"shrut".trueLength()
"iceTea".trueLength()