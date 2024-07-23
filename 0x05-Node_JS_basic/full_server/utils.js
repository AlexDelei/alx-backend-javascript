const fs = require('fs').promises;

async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const studData = data.trim().split('\n').slice(1);

    const fieldCs = [];
    const fieldSwe = [];
    let csStuds = 0;
    let sweStuds = 0;

    for (let i = 0; i < studData.length; i += 1) {
      const field = studData[i].split(',').slice(-1)[0].trim();

      if (field === 'CS') {
        const names = studData[i].split(',')[0].trim();
        csStuds += 1;
        fieldCs.push(names);
      } else if (field === 'SWE') {
        const names = studData[i].split(',')[0].trim();
        fieldSwe.push(names);
        sweStuds += 1;
      }
    }
    const obj = {
      CS: fieldCs,
      SWE: fieldSwe,
    };
    const numbers = {
      CS: csStuds,
      SWE: sweStuds,
    };

    return [obj, numbers];
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
