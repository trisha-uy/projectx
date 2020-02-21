class Person{
    constructor(name, gender){
        this.name=name;
        this.gender=gender;
    }
    walk (distance){
        console.log(`${this.name} can walk up to ${distance} kms...`);
    }

}
class Student extends Person{
    constructor(name, gender, school){
        super(name, gender);
        this.school=school;
    }
    study(subject){
        console.log(`${this.name} is enrolled in ${subject}`);
    }
}
let p1= new Person("juan dela cruz", "male");
let s1 = new Student("cathy morales", "female", "UST");
s1.study("ICS2609");