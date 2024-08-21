export function organizeByCourse(students) {
    const result = {};
    
    students.forEach(student => {
      if (!result[student.course]) {
        result[student.course] = [];
      }
      result[student.course].push(student);
    });
    
    return result;
  }
  