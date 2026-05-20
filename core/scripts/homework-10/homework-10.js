// 3. Create a structure of your choice, as shown in the lecture (meaning with machines/beauty products).
// Come up with your own structure and implement class inheritability.

class Animal {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    speak() { }
}

class Cow extends Animal {
    constructor(name, gender, age) {
        super(name, gender, age)
    }
    speak() {
        console.log('Myyy')
    }
}

class Cat extends Animal {
    constructor(name, gender, age, breed) {
        super(name, gender, age)
        this.breed = breed
    }
    speak() {
        console.log('Mrrr')
    }
}