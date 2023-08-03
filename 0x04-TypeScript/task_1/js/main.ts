interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  readonly yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstNameInitial = firstName.charAt(0).toUpperCase();
  const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

  return `${firstNameInitial}. ${formattedLastName}`;
};

interface StudentName {
  firstName: string;
  lastName: string;
}

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(options: StudentName) {
    this.firstName = options.firstName;
    this.lastName = options.lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
