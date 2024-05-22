
type Student = {
    name:string,
    marks:number[],
}
let students :Student[]=[
 {
 name: "suman",
 marks:[55, 65,84,87,91]
},
{ name: "zaib",
 marks:[78,66,56,67]
},
{
name: "komal",
marks:[92,64,83,69]
},
]

function calculateAverageGrade(studentGrade:number[]) {
    let average = studentGrade.reduce((a,b) => a+b ) / studentGrade.length
    return Math.floor(average)
};
students.forEach((student) => { 
    console.log(`Student Name: ${student.name}, Average Grade: ${calculateAverageGrade(student.marks)}`);
 });