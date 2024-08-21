// index.js
import students from './data/students.js';
import { orderByName } from './utils/orderByName.js';
import { filterHighGrade } from './utils/filterHighGrade.js';
import { calculateMeanGrade } from './utils/calculateMeanGrade.js';
import { organizeByCourse } from './utils/organizeByCourse.js';

const app = document.getElementById('app');

// 1. Listar estudiantes ordenados por nombre
const sortedStudents = orderByName(students);
const listContainer = document.createElement('div');
listContainer.innerHTML = '<h3>List students</h3>';
const ul = document.createElement('ul');
sortedStudents.forEach(student => {
  const li = document.createElement('li');
  li.textContent = `${student.id} ${student.name}`;
  ul.appendChild(li);
});
listContainer.appendChild(ul);
app.appendChild(listContainer);

// 2. Mostrar estudiantes con las calificaciones más altas
const highGradeStudents = filterHighGrade(students);
const highGradeContainer = document.createElement('div');
highGradeContainer.innerHTML = '<h3>Students with the highest grades</h3>';
highGradeStudents.forEach(student => {
  const p = document.createElement('p');
  p.textContent = `${student.name}    Grade: ${student.grade}`;
  highGradeContainer.appendChild(p);
});
app.appendChild(highGradeContainer);

// 3. Calcular y mostrar el promedio de calificaciones
const meanGrade = calculateMeanGrade(students);
const meanGradeContainer = document.createElement('div');
meanGradeContainer.innerHTML = `<h3>Grade point average: ${meanGrade}</h3>`;
app.appendChild(meanGradeContainer);

// 4. Organizar y mostrar estudiantes por curso
const studentsByCourse = organizeByCourse(students);
const coursesContainer = document.createElement('div');
coursesContainer.innerHTML = '<h3>COURSES:</h3>';
Object.keys(studentsByCourse).forEach(course => {
  const courseHeader = document.createElement('h4');
  courseHeader.textContent = course;
  coursesContainer.appendChild(courseHeader);

  const courseStudents = studentsByCourse[course];
  const cardsContainer = document.createElement('div');
  cardsContainer.style.display = 'flex';
  cardsContainer.style.gap = '10px';
  
  courseStudents.forEach(student => {
    const card = document.createElement('div');
    card.className = 'student-card';
    card.style.border = '1px solid #ddd';
    card.style.padding = '16px';
    card.style.margin = '8px';
    card.style.borderRadius = '8px';
    card.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)';

    card.innerHTML = `
      <p><strong>ID</strong> ${student.id}</p>
      <p><strong>Name</strong> ${student.name}</p>
      <p><strong>Age</strong> ${student.age}</p>
      <p><strong>Grade</strong> ${student.grade}</p>
    `;
    cardsContainer.appendChild(card);
  });

  coursesContainer.appendChild(cardsContainer);
});

app.appendChild(coursesContainer);
