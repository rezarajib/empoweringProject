document.getElementById('saveFactuly').addEventListener('click',function(){
    window.location.href = "checkFactuly.html"
})
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

    // Close the modal
    document.getElementById('modal').classList.add('hidden');

    // Clear the form
    document.getElementById('addFacultyForm').reset();
    

});
