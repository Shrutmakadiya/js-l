class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const names = new Teacher("coffe", "coffe@teacher.com", "123")
names.addCourse()
names.logMe()

const extraName = new User("extraName")

extraName.logMe()

console.log(names instanceof User);
console.log(names instanceof Teacher);