var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    //あくまでもPerson型になるのでperson.middleInitialはエラーになる
    return "Hello, " + person.firstName + " " + person.lastName;
    //greeterの引数はPerson型のデータを持たなければならないため、
    //引数は必ずPerson型もしくはそれを継承したやつになる(=事実上の継承的な..?)
    //Class2 extends Class1 とかじゃなくて。なんか気持ち悪いな。
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
