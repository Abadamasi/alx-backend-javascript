interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Habeeb",
    lastName: "Sulaiman",
    age: 20,
    location: "Lagos"
};

const student2: Student = {
    firstName: "Abba",
    lastName: "Badamasi",
    age: 22,
    location: "Kano"
};

const studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]) {
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    headerRow.innerHTML = '<th>First Name</th><th>Location</th>';

    students.forEach((student) => {
        const row = table.insertRow();
        row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
    });

    document.body.appendChild(table);
}
renderTable(studentsList);
