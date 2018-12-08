class Student {
    fullName: string;

    constructor(public firstName: string,
                public middleInitial: string,
                public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    //あくまでもPerson型になるのでperson.middleInitialはエラーになる
    return "Hello, " + person.firstName + " " + person.lastName;
    //greeterの引数はPerson型のデータを持たなければならないため、
    //引数は必ずPerson型もしくはそれを継承したやつになる(=事実上の継承的な..?)
    //Class2 extends Class1 とかじゃなくて。なんか気持ち悪いな。
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);