export function calculateMeanGrade(students) {
    let total = 0;
    students.forEach(student => {
      total += student.grade;
    });
    return total / students.length;
  }
  