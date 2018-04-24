var passedExams = [];
var failedExams = [];

document.querySelector('.add-btn').addEventListener('click', function(event) {

    // procitati podatke iz formulara
    var examData = collectData();

    // validirati podatke
    var validateStatus = validateData(examData);
    if (!validateStatus) {
        return;
    }
    // AZURIRATI STRANU

    // kreiramo odgovarajuce objekte
    var nameAndSurname = examData.student.split(' ');
    var student = new Student(nameAndSurname[0], nameAndSurname[1]);
    var subject = new Subject(examData.subject);
    var exam = new Exam(subject, student, examData.grade);


    // dodajemo ispit u odgovarajucu **listu - niz **
    listOfStudents(exam);

    // azuriranje statistike
    updateStatistics();


})