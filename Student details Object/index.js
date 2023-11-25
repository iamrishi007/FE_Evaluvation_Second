
// You need to create a Constructor function which will create object for Student details of the following properties:

// name: It will store student name
// roll_no: Stores the roll number
// class: Stores the class
// section: Stores the section
// marks_of_5_subjects: It will store marks of science, maths, social science, english & hindi. You can store marks in this format:
// {
//     science: 72,
//     maths: 75,
//     social_science: 79,
//     english: 80,
//     hindi: 67
// }
// printTop3Subjects: It is a function method. It will print top three subject names based on marks.
// printReportCard: It is also a function method. It will create and print a report card of a student. For example:
// +--------------------+
// |     REPORT CARD    |
// +--------------------+
// | Name     - Huzaifa |
// | Roll no. - 16      |
// | Class    - X       |
// | Section  - A       |
// | Science  - 73      |
// | S.Sc     - 79      |
// | Maths    - 75      |
// | English  - 80      |     
// | Hindi    - 67      |
// | Prectage - 74.8 %  |
// +--------------------+

function Student(name, roll_no, className, section, marks_of_5_subjects) {
          this.name = name;
          this.roll_no = roll_no;
          this.class = className;
          this.section = section;
          this.marks_of_5_subjects = marks_of_5_subjects

}

let obj = {
          science: 72,
          maths: 75,
          social_science: 79,
          english: 80,
          hindi: 67

}



let print = new Student("Rushikesh", 26, "10th", "A", obj);


let totalMarks = 0
for (let key in obj) {
          totalMarks += obj[key]
}
let Percentage = (totalMarks / 5)

console.log("Repost Card")
console.log('\n')

console.log("Name :", print.name)
console.log("RollNo :", print.roll_no)
console.log("Class :", print.class)
console.log("Section:", print.class)
console.log("Science: ", obj.science)
console.log("Social Science: ", obj.social_science)
console.log("Maths: ", obj.maths)
console.log("English: ", obj.english)
console.log("Hindi: ", obj.hindi)
console.log("Percentage : ", Percentage)
