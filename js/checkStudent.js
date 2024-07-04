document.getElementById('studentList').addEventListener('click',function(){
    window.location.href = "studentList.html"
})
document.getElementById('openModalBtn').addEventListener('click', function() {
    document.getElementById('modal').classList.remove('hidden');
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('modal').classList.add('hidden');
});

document.getElementById('addStudentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;

    console.log('Student added:', { name, subject });

    const studentList = document.getElementById('studentList');
    const rowCount = studentList.rows.length;

    const newRow = studentList.insertRow(rowCount);

    newRow.insertCell(0).innerHTML = rowCount + 1;
    newRow.insertCell(1).innerHTML = name;
    newRow.insertCell(2).innerHTML = subject;
    newRow.insertCell(3).innerHTML = `
        <button class="px-2 py-1 text-white bg-blue-500 rounded">Edit</button>
        <button class="px-2 py-1 text-white bg-red-500 rounded">Delete</button>
    `;

    // Close the modal
    document.getElementById('modal').classList.add('hidden');

    // Clear the form
    document.getElementById('addStudentForm').reset();
});
