// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const shrut = new User("shrut", "shrut@gmail.com", "123")

console.log(shrut.encryptPassword());
console.log(shrut.changeUsername());
