const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const students = data.trim().split('\n').slice(1);

    const firstName = [];
    const sweNames = [];
    let cs = 0;
    let swe = 0;

    for (let i = 0; i < students.length; i += 1) {
      const field = students[i].split(',').slice(-1)[0].trim();

      if (field === 'CS') {
        cs += 1;
        const names = students[i].split(',')[0].trim();
        firstName.push(names);
      } else if (field === 'SWE') {
        swe += 1;
        const names = students[i].split(',')[0].trim();
        sweNames.push(names);
      }
    }
    return (
      `Number of students: ${students.length}\n`
      + `Number of students in CS: ${cs}. List: ${firstName.join(', ')}\n`
      + `Number of students in SWE: ${swe}. List: ${sweNames.join(', ')}`
    );
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
