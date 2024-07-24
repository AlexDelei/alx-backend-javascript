const readDatabase = require('../utils');

const db = process.argv[2];

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const allData = await readDatabase(db);
      response.statusCode = 200;
      response.send(
        'This is the list of our students\n'
        + `Number of students in CS: ${allData[1].CS}. ${allData[0].CS}\n`
        + `Number of students in SWE: ${allData[1].SWE}. ${allData[0].CS}`,
      );
    } catch (error) {
      response.statusCode = 500;
      response.send('Cannot load the database');
    }
    response.end();
  }

  static async getAllStudentsByMajor(request, response) {
    if (request.params.major === 'CS') {
      try {
        const csData = await readDatabase(db);
        const results = csData[0].CS;
        response.statusCode = 200;
        response.send(`List: ${results}`);
      } catch (error) {
        response.statusCode = 500;
        response.send('Cannot load the database');
      }
    } else if (request.params.major === 'SWE') {
      try {
        const sweData = await readDatabase(db);
        const resultss = sweData[0].SWE;
        response.statusCode = 200;
        response.send(`List: ${resultss}`);
      } catch (error) {
        response.statusCode = 500;
        response.send('Cannot load the database');
      }
    } else {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE\n');
    }
    response.end();
  }
}

module.exports = StudentsController;
