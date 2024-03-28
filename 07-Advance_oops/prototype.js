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