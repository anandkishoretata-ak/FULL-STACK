// Part 1: Student Details
let studentName = "Anand";
let rollNumber = 101;
let course = "B.Tech CSE";
let age = 20;
let marks1 = 95;
let marks2 = 88;
let marks3 = 76;
let marks4 = 84;
let marks5 = 91;

console.log("Student Name:", studentName);
console.log("Roll Number:", rollNumber);
console.log("Course:", course);
console.log("Age:", age);
console.log("Marks:", marks1, marks2, marks3, marks4, marks5);

// Part 2: Operators
let totalMarks = marks1 + marks2 + marks3 + marks4 + marks5;
let averageMarks = totalMarks / 5;
let percentage = totalMarks / 5;

let grade = "";
let scholarship = "";
let result = "";

// Part 3: Conditional Statements
if (percentage >= 90) {
  grade = "A+";
} else if (percentage >= 80) {
  grade = "A";
} else if (percentage >= 70) {
  grade = "B";
} else if (percentage >= 60) {
  grade = "C";
} else if (percentage >= 50) {
  grade = "D";
} else {
  grade = "Fail";
}

if (percentage >= 85) {
  scholarship = "Eligible for Scholarship";
} else {
  scholarship = "Not Eligible for Scholarship";
}

if (percentage >= 50) {
  result = "Pass";
} else {
  result = "Fail";
}

