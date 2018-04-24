var subjectInput = document.querySelector(".add-subject");
var studentInput = document.querySelector(".add-student-name");
var gradeInput = document.querySelector(".add-grade");

function collectData() {
    var collectData = {};
    collectData.subject = subjectInput.value;
    collectData.student = studentInput.value;
    collectData.grade = gradeInput.value;
    return collectData;
}

function validateData(collectData) {

    if (collectData.subject == "" || collectData.student == "" || collectData.grade == "") {
        alert("Please insert all data correct");
        return false;
    } else if (collectData.grade < 5 || collectData.grade > 10) {
        alert("Please insert a grade between 5 and 10!");
        return false;
    } else {

        return true;
    }
}

function listOfStudents(exam) {
    var newDivPassed = document.querySelector('.passed-list');
    var newDivFailed = document.querySelector('.failed-list');

    // var studentInfo = document.createTextNode(exam.getExamInfo());
    // var newList = document.createElement("li");
    // newList.appendChild(studentInfo);

    if (exam.grade > 5) {

        newDivPassed.innerHTML += '<div class="item clearfix" id="passed-0">' +
            '<div class="item-description">' + exam.student.getStudentData() + '</div>' +
            '<div class="right clearfix">' +
            '<div class="item-value">' + exam.grade + '</div>' +
            '<div class="item-delete">' +
            '<button class="item-delete-btn">x</i>' +
            '</button>' +
            '</div>' +
            '</div>' +
            '</div>';
        // document.querySelector(".passed-list").appendChild(newList);
        passedExams.push(exam.getExamInfo());
    } else {
        newDivFailed.innerHTML += '<div class="item clearfix" id="passed-0">' +
            '<div class="item-description">' + exam.student.getStudentData() + '</div>' +
            '<div class="right clearfix">' +
            '<div class="item-value">' + exam.grade + '</div>' +
            '<div class="item-delete">' +
            '<button class="item-delete-btn">x</i>' +
            '</button>' +
            '</div>' +
            '</div>' +
            '</div>';
        // document.querySelector(".failed-list").appendChild(newList);
        failedExams.push(exam.getExamInfo());
    }
}

function updateStatistics() {
    var percentage = Math.floor((failedExams.length / (failedExams.length + passedExams.length)) * 100) + "%";

    document.querySelector(".exam-passed-count").textContent = passedExams.length;
    document.querySelector(".exam-failed-count").textContent = failedExams.length;
    document.querySelector(".exam-failed-percentage").textContent = percentage;
    document.querySelector("#student-count").textContent = failedExams.length + passedExams.length;

}