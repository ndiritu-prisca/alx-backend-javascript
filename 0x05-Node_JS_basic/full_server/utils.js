const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (error, data) => {
      if (error) {
        reject(Error(error));
        return;
      }
      // Split the data into lines and filter out empty lines
      const lines = data.toString().split('\n').filter((line) => line);

      // Initialize counters for each field
      let SWECount = 0;
      let CSCount = 0;
      const SWEStudents = [];
      const CSStudents = [];
      const response = [];

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

    //   let msg = '';
    //   let msg1 = '';
    //   let msg2 = '';
    //   msg = `Number of students: ${lines.length - 1}`;
    //   msg1 = `Number of students in CS: ${CSCount}. List: ${CSStudents.join(', ')}`;
    //   msg2 = `Number of students in SWE: ${SWECount}. List: ${SWEStudents.join(', ')}`;
    //   console.log(msg);
    //   response.push(msg);
    //   console.log(msg1);
    //   response.push(msg1);
    //   console.log(msg2);
    //   response.push(msg2);
      response.push(`${CSStudents.join(', ')}`)
      response.push(`${SWEStudents.join(', ')}`)

      resolve(response);
    });
  });
}

export default readDatabase;
