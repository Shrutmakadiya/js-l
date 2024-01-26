// object can declare as literals and constructor both 
// if make object through the constructor make a singleton object

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Shrut",
    "full name": "Shrut Choudhary", // this can not call with (JsUser,full name)
    [mySym]: "mykey1",  //without [] type is string
    age: 18,
    location: "Jaipur",
    email: "Shrut@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])


/** lock the object value */
// JsUser.email = "Shrut@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "Shrut@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());