// // let student = {
// //     name: "Riju",
// //     rollNo: 6,
// //     subjects: ["math", "english", "hindi"],
// // }


// // // how to rename key
// // let { subjects: vishay, totalMarks = 500, ...variable } = student
// // // subject -> vishay
// // // let vishay = subjects
// // // console.log(vishay);
// // // console.log(totalMarks);


// // // Object merging using spread operator
// // let obj1 = {
// //     name: "riju",
// //     phone: 987654321

// // }

// // // let india = "country" 

// // let obj2 = {
// //     address: "inidia",
// //     aadhaarCard: 6891247274921,
// //     name: "Ladoo"
// // }


// // let obj3 = { ...obj1, ...obj2 }
// // // console.log(obj3);



// // // array and object update

// // const arr = [1, 2, 3, 4]

// // arr[1] = "updated"

// // // console.log(arr);




// // const obj = {
// //     name: "RIju",
// //     rollNo: 22,
// //     address: null
// // }

// // obj["name"] = "Ladoo";
// // obj.name = "Bachhaa";

// // delete obj.rollNo;  //property deleted

// // console.log(obj);
// // console.log(obj.address?.street);




// let arr1 = [1, 2, 3, 4, 5, 6]

// // arr1.splice(1, 3)  // delete
// // // arr1.splice(3, 0, 2)  // add
// // arr1.splice(3, 1, ["replace"])  // replace
// // console.log(arr1);          



// // let trimArr = arr1.slice(1, 3)

// // console.log(trimArr);   




// // console.log(arr1.indexOf(2));


// // let res = arr1.find((value) => {
// //     return value  === "3";
// // })

// // console.log(res);




// // mutability

// // let arr4 = [4,5,6,75,83,544]

// // let arrCopy = [...arr4];

// // arrCopy.pop()

// // console.log("arr4",  arr4);
// // console.log("arrCopy", arrCopy);






// // M<ap,Filter,Reduce

// let originalPrices = [646, 345, 5434]

// let discountedPrice = []

// for (value of originalPrices) {
//     discountedPrice.push(value * 0.9) // 10% discount
// }

// // console.log(originalPrices);
// // console.log(discountedPrice);


// const discountedPrice2 = originalPrices.map((value) => value * 0.9)

// // const discountedPrice2 = originalPrices.map((value) => {
// //     return value * 0.9
// // })

// // console.log(discountedPrice2);





// let students = [
//     {
//         name: "RIJU",
//         marks: 65,
//     },
//     {
//         name: "Mansi",
//         marks: 83,
//     },
//     {
//         name: "DEBA",
//         marks: 37,
//     },
//     {
//         name: "Shivam",
//         marks: 24,
//     },
// ]

// // let studentNames = []

// // students.forEach(value => {
// //     studentNames.push(value.name)
// // });


// const studentNames = students.map((student) => student.name)
// const studentMarks = students.map((student) => student.marks)


// // console.log(studentNames, studentMarks);



// let boostedMarks = students.map((student) => ({ ...student, marks: student.marks + 10 }))

// // console.log(boostedMarks);




// // let failedStudents = []

// // students.forEach((student) => {
// //     if(student.marks < 33) {
// //         failedStudents.push(student)
// //     }
// // })

// // console.log(failedStudents);




// // const failedStudents = students.filter((student) => student.marks < 33).map ((student) => student.name)

// // // const failedStudentsName = failedStudents.map ((student) => student.name)
// // console.log(failedStudents);


// // let marks = [45, 64, 34, 74, 53]

// // // let totalMark = 0
// // // marks.forEach((marks) => totalMark = totalMark + marks)


// // const totalMark = students.reduce((totalMarks , student) => totalMarks + student.marks, 0) 
// // console.log(totalMark);


// const attendence = ["present", "present", "absent", "present", "absent"]

// // -> {present : 3, absent : 2}

// let obj ={}

// attendence.forEach((value) => {
//     if(obj[value]) {
//         obj[value] = obj[value] + 1
//     } else {
//         obj[value] = 1
//     }
// })


// console.log(obj);




// by reduce

// const obj = attendence.reduce((acc, value) => {
//     if (obj[value]) {
//         obj[value] = obj[value] + 1
//     } else {
//         obj[value] = 1
//     }
// }, {}) 

// console.log(obj);