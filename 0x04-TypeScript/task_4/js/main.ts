/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
/// <reference path="./Cpp.ts" />
/// <reference path="./React.ts" />
/// <reference path="./Java.ts" />

import { Subjects } from './Teacher';
import { Cpp, React, Java } from './Subject';

// Create and export constants
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Create and export a Teacher object
export const cTeacher: Subjects.Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10
};

// For Cpp subject
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
