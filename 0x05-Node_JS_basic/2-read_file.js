const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) throw new Error('Cannot load the database');
  else {
    const data = fs.readFileSync(path, 'utf-8');
    const students = data.trim().split('\n').slice(1);
    console.log(`Number of students: ${students.length}`);

    const course = [];
    const firstName = [];
    const sweNames = [];
    let cs = 0;
    let swe = 0;
    let names;
    for (let i = 0; i < students.length; i += 1) {
      const field = students[i].split(',').slice(-1);

      if (field[0] === 'CS') {
        cs += 1;
        names = students[i].split(',')[0].trim();
        firstName.push(names);
      } else if (field[0] === 'SWE') {
        swe += 1;
        names = students[i].split(',')[0].trim();
        sweNames.push(names);
      }
      course.push(firstName, sweNames);
    }

    console.log(`Number of students in CS: ${cs}. List: ${course[0].join(', ')}`);
    console.log(`Number of students in SWE: ${swe}. List: ${course[1].join(', ')}`);
  }
}

module.exports = countStudents;
