// 1. VARIABLES: const and let

const studentName = "Mahir";
const university = "IIUC";

let completedTasks = 3;

completedTasks = 4;

console.log("Student:", studentName);
console.log("University:", university);
console.log("Completed tasks:", completedTasks);


// 2. JAVASCRIPT DATA TYPES

const courseName = "Web Development"; // String
const semester = 3;                   // Number
const isEnrolled = true;              // Boolean

let assignment;                       // Undefined
const selectedCourse = null;          // Null

const largeNumber = 12345678901234567890n; // BigInt
const uniqueId = Symbol("id");             // Symbol

console.log(typeof courseName);
console.log(typeof semester);
console.log(typeof isEnrolled);
console.log(typeof assignment);
console.log(typeof selectedCourse); // "object" is a JavaScript quirk
console.log(typeof largeNumber);
console.log(typeof uniqueId);


// 3. TYPE CONVERSION

const inputMark = "85";

console.log(Number(inputMark)); // 85
console.log(String(100));       // "100"
console.log(Boolean(1));        // true
console.log(Boolean(0));        // false


// 4. OPERATORS

const mark1 = 80;
const mark2 = 90;

console.log(mark1 + mark2);
console.log(mark1 - mark2);
console.log(mark1 * mark2);
console.log(mark2 / mark1);
console.log(mark1 % 3);

console.log(mark1 > mark2);
console.log(mark1 === 80);
console.log(mark1 !== mark2);

console.log(5 === "5"); // false
console.log(5 == "5");  // true

const hasPaid = true;
const hasRegistered = true;

console.log(hasPaid && hasRegistered);
console.log(hasPaid || hasRegistered);
console.log(!hasPaid);


// 5. CONDITIONS

const mark = 78;

if (mark >= 80) {
    console.log("Grade: A+");
} else if (mark >= 70) {
    console.log("Grade: A");
} else if (mark >= 60) {
    console.log("Grade: B");
} else {
    console.log("Needs improvement");
}

const result = mark >= 40 ? "Pass" : "Fail";

console.log(result);

const day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;

    case "Friday":
        console.log("End of the working week");
        break;

    default:
        console.log("Regular day");
}


// 6. LOOPS

for (let i = 1; i <= 3; i++) {
    console.log("Task", i);
}

let count = 1;

while (count <= 3) {
    console.log("Count:", count);
    count++;
}

let choice;

do {
    console.log("1. View courses");
    console.log("2. Exit");

    choice = 2;
} while (choice !== 2);

console.log("Program ended.");

// 7. FUNCTIONS

function calculateTotal(price, quantity) {
    return price * quantity;
}

console.log(calculateTotal(500, 2));

const calculateDiscount = function (price, discount) {
    return price - (price * discount / 100);
};

console.log(calculateDiscount(1000, 10));

const greetStudent = (name) => `Welcome, ${name}!`;


console.log(greetStudent("Mahir"));


// 8. ARRAYS

const courses = [
    "Web Development",
    "Data Mining",
    "Machine Learning"
];

console.log(courses[0]);
console.log(courses.length);
console.log(courses.includes("Data Mining"));

courses.push("Software Engineering");

console.log(courses);

courses.pop();

courses.forEach((course) => {
    console.log("Course:", course);
});

const marks = [45, 82, 67, 91, 38];

const passedMarks = marks.filter((value) => value >= 40);

console.log(passedMarks);

const firstHighMark = marks.find((value) => value >= 80);

console.log(firstHighMark);


// 9. OBJECTS

const student = {
    name: "Mahir",
    department: "CSE",
    semester: 3,
    isActive: true
};

console.log(student.name);
console.log(student["department"]);

student.semester = 4;

student.email = "student@example.com";

console.log(student);

delete student.email;

console.log(student);


// 10. ARRAY OF OBJECTS

const courseList = [
    { name: "Web Development", progress: 82 },
    { name: "Data Mining", progress: 68 },
    { name: "Machine Learning", progress: 54 }
];

courseList.forEach((course) => 
    console.log(`${course.name}: ${course.progress}%`));

const completedCourses = courseList.filter((course) => 
    course.progress >= 80);

console.log(completedCourses);


// 11. TEMPLATE LITERALS

const instructor = "Mahir";
const duration = 12;

const message = `${instructor} teaches a ${duration}-week course.`;

console.log(message);