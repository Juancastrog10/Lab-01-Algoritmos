export function orderByName(students) {
    const sortedStudents = [...students];
    sortedStudents.sort((a, b) => a.name.localeCompare(b.name));
    
    const result = [];
    sortedStudents.forEach(student => result.push(student));
    
    return result;
  }
  