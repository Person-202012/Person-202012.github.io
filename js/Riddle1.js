function Person(name, eyeColor, age) {
    this.name = name;
    this.eyeColor = eyeColor
    this.age = age;
    this.updateAge = function() {
        return ++this.age;
    };
}


let person01 = new Person('Neil', 'brown', 13);

console.log(person01.updateAge())
