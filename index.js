function Student(name,section){
    this.name=name;
    this.section=section;
}
let juan =new Student("juan dela cruz"," 2ITE");
let pedro=new Student("pedro"," 2ITA");
//Student.prototype.displayStudent=function(){
    //document.write(`${this.name} is enrolled in${this.section}`)
//}
//juan.displayStudent();
Student.prototype.school=" UST";
document.write(`${pedro.name} is enrolled in${pedro.school}`)
pedro.displayStudent();