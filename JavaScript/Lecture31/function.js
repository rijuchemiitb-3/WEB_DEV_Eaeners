// function totalMarks() {
//     console.log("hiii");
// }

// const { use } = require("react");

// totalMarks()



// function totalMarks(studentName ,mathMarks, scienceMarks, sanskritMarks) {
//     console.log(`${studentName } total marks :` ,mathMarks + scienceMarks + sanskritMarks);
// }

// totalMarks("Alok", 46, 35 , 56);
// totalMarks("anu", 54, 27 , 84);
// totalMarks("karan", 46, 63 , 73);
// totalMarks("addi", 57, 26 , 83);




// function greetingMsg(userName, greetings = "hii") {
//     console.log(`${greetings}, ${userName}`);
// }

// greetingMsg("Riju");
// greetingMsg("Mansi" , "Kasa Kai");


// function calculator(num1, num2, operator) {

//     switch (operator) {
//         case "+":
//             console.log(`${num1} ${operator} ${num2} =`, num1 + num2);
//             break;
//         case "-":
//             console.log(`${num1} ${operator} ${num2} =`, num1 - num2);
//     }
// }

// calculator(12, 34, "-");




// function totalMarks(mathMarks, scienceMarks, sanskritMarks) {
//     // console.log(mathMarks + scienceMarks + sanskritMarks);

//     return mathMarks + scienceMarks + sanskritMarks

// }


// function calPercentage(studentName ,mathMarks, scienceMarks, sanskritMarks) {
//     let total = totalMarks(mathMarks, scienceMarks, sanskritMarks)
//     let Percentage = (total / 200) * 100
//     console.log(`${studentName} Percentage : ` , Percentage);
// }

// calPercentage("anu", 54, 27 , 84);



// Arrow function

// syntax 1
// let add = num1 => num1 + 4;

// syntax 2
// let add = (num1, num2) => num1 + num2;

// syntax 3
let add = (num1, num2) => {
    return num1 + num2
}

console.log(add(4,6));