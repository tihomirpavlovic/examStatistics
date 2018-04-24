function Exam(subject, student, grade) {
    this.subject = subject;
    this.student = student;
    this.grade = grade;
}

Exam.prototype.getExamInfo = function() {
    return this.student.getStudentData() + " " + this.subject.getSubjectName();
}

Exam.prototype.hasPassed = function() {
    if (this.grade > 5) {
        return "PASSED";
    } else {
        return "FAILED";
    }
}