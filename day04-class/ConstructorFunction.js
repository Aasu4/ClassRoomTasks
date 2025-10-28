function person(name, age) {

    this.name = name;
    this.age = age;
}

const user = new person("Aiswarya", 25);

console.log(user.name);
console.log(user.age);