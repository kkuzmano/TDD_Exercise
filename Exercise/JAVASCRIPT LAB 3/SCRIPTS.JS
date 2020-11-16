let submissions = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true,
    },
    {
        name: "Joe",
        score: 77, 
        date: "2018-05-14",
        passed: true,
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false,
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true,
    },
    ];
console.log (submissions);

function addSubmission (array, newName, newScore, newDate) {
 let newPassed = true;
    if (newScore >= 60) {
 newPassed = true;
 } 
 else {
     newPassed = false;
 }
   let newSubmission = {
       name: newName,
       score: newScore,
       date: newDate,
       passed: newPassed,
   }
   array.push (newSubmission)
}
addSubmission(submissions, "Kristina", 73, "2020-04-21")
console.log (submissions);

//Declare a function named deleteSubmissionByIndex
function deleteSubmissionByIndex (array, index) {
    (array.splice (index, 1));  
}
//deleteSubmissionByIndex (submissions, 2)
//console.log (submissions)

//Declare a function named deleteSubmissionByName
function deleteSubmissionByName (array, name) {
let submissionIndex = array.findIndex (submission => submission.name === name);
console.log (submissionIndex);
(array.splice (submissionIndex, 1)); 
}
//deleteSubmissionByName (submissions, "Joe");
//console.log (submissions)

//Declare a function named editSubmission
function editSubmission (array, index, score) {
    let newPassed = true;
        if (score >= 60) {
     newPassed = true;
     } 
     else {
         newPassed = false;
     }
     array[index].score = score;
     array[index].passed = newPassed;
}
editSubmission (submissions, 2, 80);
console.log (submissions);

function findSubmissionByName (array, name) {
    //use find method array.find 
    let foundStudent = array.find (studentSubmission => studentSubmission.name === name);
    return foundStudent;
    }
let newFoundstudent = findSubmissionByName (submissions, "Jill");
console.log (newFoundstudent);


function findLowestScore (array) {
    //Use the forEach method
   submissions.forEach(array, score);
    console.log (score);
}


   // let lowestScore = array.forEach(score);
    
//}
//let score = findLowestScore (array);
//console.log (lowestScore);

