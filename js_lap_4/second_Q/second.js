document.addEventListener('DOMContentLoaded', function () {
    let students = [
        { name: "Mohamed", grade: 95, department: "EL" },
        { name: "Ahmed", grade: 60, department: "SD" },
        { name: "Ali", grade: 0, department: "OS" }
    ];
    let studentTable = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    let studentNameInput = document.getElementById('studentName');
    let studentGradeInput = document.getElementById('studentGrade');
    let addBtn = document.getElementById('addBtn'); 
    let filterSelect = document.getElementById('filter');
    let sortSelect = document.getElementById('sort');
    let nameError = document.getElementById('nameError');
    let gradeError = document.getElementById('gradeError');
    let departmentRadios = document.querySelectorAll('input[name="department"]');
    let studentForm = document.getElementById('studentForm');

    // Initialize the table
    updateTable();

    addBtn.addEventListener('click', function () {
        // console.log("Add button clicked!");

        //error messages
        nameError.style.display = 'none';
        gradeError.style.display = 'none';

        let name = studentNameInput.value.trim();
        let grade = studentGradeInput.value.trim();
        let department = '';

        departmentRadios.forEach(radio => {
            if (radio.checked) {
                department = radio.value;
            }
        });

        let isValid = true;

        if (!name) {
            nameError.textContent = 'Student name is required';
            nameError.style.display = 'inline';
            isValid = false;
        } else if (students.some(student => student.name.toLowerCase() === name.toLowerCase())) {
            nameError.textContent = 'Student name already exists';
            nameError.style.display = 'inline';
            isValid = false;
        }

        if (!grade) {
            gradeError.textContent = 'Grade is required';
            gradeError.style.display = 'inline';
            isValid = false;
        } else if (isNaN(grade) || grade < 0 || grade > 100) {
            gradeError.textContent = 'Grade must be between 0 and 100';
            gradeError.style.display = 'inline';
            isValid = false;
        }

        if (!isValid) {
            // console.log("Validation failed");
            return;
        }

        let formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

        let newStudent = {
            name: formattedName,
            department: department,
            grade: parseInt(grade),
            status: parseInt(grade) >= 60 ? 'Passed' : 'Failed'
        };

        students.push(newStudent);
        // console.log("New student added:", newStudent);

        studentNameInput.value = '';
        studentGradeInput.value = '';

        updateTable();
    });

    function updateTable() {
        // console.log("Updating table...");
        studentTable.innerHTML = '';

        // Filtering
        let filteredStudents = [...students];
        let filterValue = filterSelect.value;

        if (filterValue === 'failed') {
            filteredStudents = filteredStudents.filter(student => student.grade < 60);
        }

        // Sorting
        let sortValue = sortSelect.value;

        if (sortValue === 'name') {
            filteredStudents.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortValue === 'grade') {
            filteredStudents.sort((a, b) => b.grade - a.grade);
        }

        filteredStudents.forEach(student => {
            let row = studentTable.insertRow();

            let nameCell = row.insertCell(0);
            let gradeCell = row.insertCell(1);
            let departmentCell = row.insertCell(2);
            let actionCell = row.insertCell(3);

            nameCell.textContent = student.name;
            gradeCell.textContent = student.grade;
            departmentCell.textContent = student.department;

            if (student.grade >= 90) {
                row.style.backgroundColor = 'lightgreen';
                gradeCell.style.fontWeight = 'bold';
            } else if (student.grade >= 60) {
                row.style.backgroundColor = 'yellow';
            } else {
                row.style.backgroundColor = 'red';
            }

            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', function () {
                students = students.filter(s => s.name !== student.name);
                updateTable();
            });

            actionCell.appendChild(deleteBtn);

            // Highlight failed students in red
            if (student.grade < 60) {
                row.style.color = 'black';
            }
        });
    }

    filterSelect.addEventListener('change', updateTable);
    sortSelect.addEventListener('change', updateTable);

    studentForm.addEventListener('submit', function (e) {
        e.preventDefault();
    });
});