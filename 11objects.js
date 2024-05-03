let student1 = {
    name:"s1",
    marks:90
}

let student2 = {
    name:"s2",
    marks:88

}

function  Student(nam, marks)
{
    this.name = nam
    this.marks = marks
}

let student3 = new Student("s3",78);
console.log(student1)
console.log(student2)
console.log(student3)