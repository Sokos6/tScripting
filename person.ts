class Person {
	name: String;
	constructor(name: String) {
		this.name = name;
	}
	sayHello() {
		return 'Hello ' + this.name;
	}
}

var person = new Person('Will');
console.log(person.name);
console.log(person.sayHello());