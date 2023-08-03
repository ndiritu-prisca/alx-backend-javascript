interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string) {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

interface Employee {
  role: string;
  // Add other properties as needed
}

interface Director extends Employee, DirectorInterface {
  role: 'Director';
}

interface Teacher extends Employee, TeacherInterface {
  role: 'Teacher';
}

function isDirector(employee: Employee): employee is Director {
  return employee.role === 'Director';
}

function executeWork(employee: Employee) {
  if (isDirector(employee)) {
      employee.workDirectorTasks();
  } else if (employee.role === 'Teacher') {
      (employee as Teacher).workTeacherTasks();
  } else {
      console.log("Employee's role is not recognized.");
  }
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    } else if (todayClass === "History") {
        return "Teaching History";
    } else {
        return "Class not recognized";
    }
}
