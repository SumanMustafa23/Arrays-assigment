var students = [
    {
        name: "suman",
        marks: [55, 65, 84, 87, 91]
    },
    { name: "zaib",
        marks: [78, 66, 56, 67]
    },
    {
        name: "komal",
        marks: [92, 64, 83, 69]
    },
];
function calculateAverageGrade(studentGrade) {
    var average = studentGrade.reduce(function (a, b) { return a + b; }) / studentGrade.length;
    return Math.floor(average);
}
;
students.forEach(function (student) {
    console.log("Student Name: ".concat(student.name, ", Average Grade: ").concat(calculateAverageGrade(student.marks)));
});
