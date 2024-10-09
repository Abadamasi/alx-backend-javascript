var student1 = {
    firstName: "Habeeb",
    lastName: "Sulaiman",
    age: 20,
    location: "Lagos"
};
var student2 = {
    firstName: "Abba",
    lastName: "Badamasi",
    age: 22,
    location: "Kano"
};
var studentsList = [student1, student2];
function renderTable(students) {
    var table = document.createElement('table');
    var headerRow = table.insertRow();
    headerRow.innerHTML = '<th>First Name</th><th>Location</th>';
    students.forEach(function (student) {
        var row = table.insertRow();
        row.innerHTML = "<td>" + student.firstName + "</td><td>" + student.location + "</td>";
    });
    document.body.appendChild(table);
}
renderTable(studentsList);
