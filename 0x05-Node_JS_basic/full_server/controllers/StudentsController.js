const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const allData = await readDatabase('database.csv');
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
    const major = request.params.major;

    if (major === 'CS') {
      try {
        const csData = await readDatabase('database.csv');
        const results = csData[0].CS;
        response.statusCode = 200;
        response.send(`List: ${results}`);
      } catch (error) {
        response.statusCode = 500;
        response.send('Cannot load the database');
      }
    } else if (major === 'SWE') {
      try {
        const sweData = await readDatabase('database.csv');
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
