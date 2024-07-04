document.getElementById('openModalBtn').addEventListener('click', function() {
    document.getElementById('modal').classList.remove('hidden');
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('modal').classList.add('hidden');
});

document.getElementById('addFacultyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const department = document.getElementById('department').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Faculty added:', { name, department, username, password });

    const facultyList = document.getElementById('facultyList');
    const rowCount = facultyList.rows.length;

    const newRow = facultyList.insertRow(rowCount);

    newRow.insertCell(0).innerHTML = rowCount + 1;
    newRow.insertCell(1).innerHTML = name;
    newRow.insertCell(2).innerHTML = department;
    newRow.insertCell(3).innerHTML = `
        <button class="px-2 py-1 text-white bg-blue-500 rounded">Edit</button>
        <button class="px-2 py-1 text-white bg-red-500 rounded">Delete</button>
    `;

    // Close the modal
    document.getElementById('modal').classList.add('hidden');

    // Clear the form
    document.getElementById('addFacultyForm').reset();
});
