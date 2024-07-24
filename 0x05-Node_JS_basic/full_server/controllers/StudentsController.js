const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const allData = await readDatabase(process.argv[2]);
      response.status(200).send(
        'This is the list of our students\n'
        + `Number of students in CS: ${allData[1].CS}. List: ${allData[0].CS.join(', ')}\n`
        + `Number of students in SWE: ${allData[1].SWE}. List: ${allData[0].SWE.join(', ')}`,
      );
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    if (request.params.major === 'CS') {
      try {
        const csData = await readDatabase(process.argv[2]);
        const results = csData[0].CS;
        response.statusCode = 200;
        response.send(`List: ${results.join(', ')}`);
      } catch (error) {
        response.statusCode = 500;
        response.send('Cannot load the database');
      }
    } else if (request.params.major === 'SWE') {
      try {
        const sweData = await readDatabase(process.argv[2]);
        const resultss = sweData[0].SWE;
        response.statusCode = 200;
        response.send(`List: ${resultss.join(', ')}`);
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
