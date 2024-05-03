///1. object literals

let student1 = {
    name: "abc",
    rno: 1,
    grade: "x"
}


//2. using constructor

function Student(namepassed, rnopassed, gradepassed) {
    this.name = namepassed;
    this.rno = rnopassed;
    this.grade = gradepassed;
}





let student2= new Student("cde",6,"m");
console.log(student2)