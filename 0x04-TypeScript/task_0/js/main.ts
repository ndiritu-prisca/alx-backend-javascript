interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: "Prisca",
  lastName: "Ndiritu",
  age: 20,
  location: "Nairobi"
}

const student2: Student = {
  firstName: "Spike",
  lastName: "Candy",
  age: 30,
  location: "Kenya"
}

const studentsList: Student[] = [student1, student2];

document.addEventListener("DOMContentLoaded", () => {
  const table = document.createElement("table");
  table.innerHTML = `
    <thead>
      <tr>
        <th>First Name</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;
  
  const tbody = table.querySelector("tbody");
  
  if (tbody) {
    studentsList.forEach(student => {
      const row = document.createElement("tr");
      const firstNameCell = document.createElement("td");
      const locationCell = document.createElement("td");
      
      firstNameCell.textContent = student.firstName;
      locationCell.textContent = student.location;
      
      row.appendChild(firstNameCell);
      row.appendChild(locationCell);
      
      tbody.appendChild(row);
    });
  }
  
  document.body.appendChild(table);
});
