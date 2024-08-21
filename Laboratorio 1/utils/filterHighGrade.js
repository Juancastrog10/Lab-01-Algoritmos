export function filterHighGrade(students) {
    const result = [];
    students.forEach(student => {
      if (student.grade > 80) {
        result.push(student);
      }
    });
    return result;
  }
  