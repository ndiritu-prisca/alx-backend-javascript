const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (error, data) => {
      if (error) {
        // Reject the promise if an error occurs
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split the data into lines and filter out empty lines
      const lines = data.toString().split('\n').filter((line) => line);

      // Initialize counters for each field
      let SWECount = 0;
      let CSCount = 0;
      const SWEStudents = [];
      const CSStudents = [];

      // Loop through each line and process the data
      for (const line of lines) {
        const [firstName, , , field] = line.split(',');
        if (field === 'SWE') {
          SWECount += 1;
          SWEStudents.push(firstName);
        } else if (field === 'CS') {
          CSCount += 1;
          CSStudents.push(firstName);
        }
      }

      console.log(`Number of students: ${lines.length - 1}`);
      console.log(`Number of students in CS: ${CSCount}. List: ${CSStudents.join(', ')}`);
      console.log(`Number of students in SWE: ${SWECount}. List: ${SWEStudents.join(', ')}`);

      resolve();
    });
  });
}

module.exports = countStudents;
