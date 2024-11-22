// Get the course list element
const courseList = document.getElementById('course-list');

// Get the registration form element
const registrationForm = document.getElementById('registration-form');

// Get the course select element
const courseSelect = document.getElementById('course');

// Define a list of courses
const courses = [
    { id: 1, name: 'Curso 1', description: 'Este es el curso 1' },
    { id: 2, name: 'Curso 2', description: 'Este es el curso 2' },
    { id: 3, name: 'Curso 3', description: 'Este es el curso 3' },
];

// Function to generate the course list
function generateCourseList() {
    const courseListHtml = courses.map((course) => {
        return `
            <li>
                <h3>${course.name}</h3>
                <p>${course.description}</p>
            </li>
        `;
    }).join('');

    courseList.innerHTML = courseListHtml;
}

// Function to generate the course options
function generateCourseOptions() {
    const courseOptionsHtml = courses.map((course) => {
        return `
            <option value="${course.id}">${course.name}</option>
        `;
    }).join('');

    courseSelect.innerHTML = courseOptionsHtml;
}

// Function to handle the registration form submission
function handleRegistrationFormSubmission(event) {
    event.preventDefault();

    const formData = new FormData(registrationForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const courseId = formData.get('course');

    // Send the form data to the server
    fetch('/register', {
        method: 'POST',
        body: JSON.stringify({
            name,
            email,
            phone,
            courseId,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
}

// Generate the course list and options
generateCourseList();
generateCourseOptions();

// Add an event listener to the registration form
registrationForm.addEventListener('submit', handleRegistrationFormSubmission);