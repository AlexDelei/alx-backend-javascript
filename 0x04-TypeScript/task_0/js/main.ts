interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Alex",
    lastName: "Delei",
    age: 20,
    location: "Nairobi"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Vegas"
};

const studentsList: Student[] = [student1, student2];

function makeUpTable(students: Student[]): void {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    ['First Name', 'Location'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;

        headerRow.appendChild(th);
    })
    table.appendChild(headerRow);

    students.forEach(student => {
        const row = document.createElement('tr');

        [student.firstName, student.location].forEach(text => {
            const td = document.createElement('td');

            td.textContent = text;

            row.appendChild(td);
        });

        table.appendChild(row);
    })

    document.body.appendChild(table);
}

makeUpTable(studentsList);