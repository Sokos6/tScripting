var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        return 'Hello ' + this.name;
    };
    return Person;
}());
var person = new Person('Will');
console.log(person.name);
console.log(person.sayHello());
